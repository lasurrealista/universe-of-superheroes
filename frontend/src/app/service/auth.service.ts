import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../model/user';
import {ConfigService} from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    currentUserSubject$ : BehaviorSubject < User | null > = new BehaviorSubject<User | null>(null);
    lastToken : string = '';
    loginUrl : string = `${
        this.config.apiUrl
    }login`;
    storageName = 'currentUser';

    constructor(
      private config : ConfigService,
      private http : HttpClient,
      private router : Router,
      private userService: UserService
      ) {
        if (localStorage.currentUser) {
            const user: User = JSON.parse(localStorage.currentUser);
            this.lastToken = user.accessToken || '';
            this.currentUserSubject$.next(user);
        }
    }

    login(loginData: User): Observable<any> {
      return this.http.post<{ accessToken: string }>(
        this.loginUrl,
        { email: loginData.email, password: loginData.password }
      )
      .pipe( switchMap( response => {
        if (response.accessToken) {
          this.lastToken = response.accessToken;
          return this.userService.query(`email=${loginData.email}`);
        }
        return of(null);
      }))
      .pipe(
        tap( user => {
          if (!user) {
            localStorage.removeItem(this.storageName);
            this.currentUserSubject$.next(null);
          } else {
            user[0].token = this.lastToken;
            localStorage.setItem(this.storageName, JSON.stringify(user[0]));
            this.currentUserSubject$.next(user[0]);
          }
        })
      );
    }

    logout(): void {
        this.lastToken = '';
        this.currentUserSubject$.next(null);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/', 'login']);
    }
}
