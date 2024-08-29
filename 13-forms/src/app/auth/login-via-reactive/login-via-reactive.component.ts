import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-via-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-via-reactive.component.html',
  styleUrl: './login-via-reactive.component.css',
})
export class LoginViaReactiveComponent {
  // Set up the form (FormGroup and FormControl are classes and must be initialized first):
  myform = new FormGroup({
    // lets angualar know, how is this form connected to the actual templete (input elements)
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  get emailIsInvalid() {
    return (
      this.myform.controls.email.touched &&
      this.myform.controls.email.dirty &&
      this.myform.controls.email.invalid
    );
  }
  get passwordIsInvalid() {
    return (
      this.myform.controls.password.touched &&
      this.myform.controls.password.dirty &&
      this.myform.controls.password.invalid
    );
  }

  onSubmit() {
    console.log(this.myform);
    const enteredEmail = this.myform.controls.email;
    const enteredPassword = this.myform.controls.password;
    console.log(enteredEmail, enteredPassword);
  }
}
