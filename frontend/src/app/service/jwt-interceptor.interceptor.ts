import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
//import { Router } from '@angular/router';
//import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    //private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.lastToken;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);

    /*
     return next.handle(request).pipe(
      catchError( (err): Observable<HttpEvent<unknown>> => {
        if (err.status === 401) {
          this.router.navigate(['/forbidden'])
        }
        return next.handle(request);
      })
    );
    */
  }
}
