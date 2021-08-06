import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new User());
      }
      return this.userService.get(Number(params.id));
    })
  );
  user: User = new User();

  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.user = user;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
    _id: string | number = 0;
    first_name?: string = '';
    last_name?: string = '';
    email: string = '';
    password?: string = '';
    role?: string = '';
    accessToken?: string = ''
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.user._id}),
      new InputField({key: 'first_name', label: 'First Name', type: 'text', value: this.user.first_name as string,
        validators: [Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,19}/)],
        errorMessage: 'The first name of the user must be between 1 and 20 characters.'}),
      new InputField({key: 'last_name', label: 'Last Name', type: 'text', value: this.user.last_name as string,
        validators: [Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,19}/)],
        errorMessage: 'The last name of the user must be between 1 and 20 characters.'}),
      new InputField({key: 'email', label: 'Email', type: 'text', value: this.user.email,
        validators: [Validators.required, Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)],
        errorMessage: 'Please enter a valid email address.'}),
      new InputField({key: 'password', label: 'Password', type: 'text', value: this.user.password as string,
        validators: [Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,19}/)],
        errorMessage: 'The password of the user must be between 1 and 20 characters.'}),
      new InputField({key: 'role', label: 'Role', type: 'number', value: this.user.role as unknown as number,
        validators: [Validators.required, Validators.pattern(/[1,2,3]/)],
        errorMessage: 'The role of the user must be 1, 2, or 3.'}),
      new InputField({key: 'accessToken', label: 'Access Token', type: 'string', value: this.user.accessToken as string,
        validators: [Validators.pattern(/^[ $A-Za-z0-9_@./#&+-]{1,50}/)],
        errorMessage: 'The access token of the user must be between 1 and 50 characters.'}),
    ];
  }
  onSave(user: User): void {

    if (user._id == 0) {
      this.userService.create(user).subscribe(
        () => this.router.navigate(['users'])
      );
    } else {
      //this.updating = true;
      this.userService.update(user).subscribe(
        () => this.router.navigate(['users'])
      );
    }
  }
}
