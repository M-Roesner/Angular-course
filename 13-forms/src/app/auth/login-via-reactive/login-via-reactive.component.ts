import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null; // No errors, the control is valid
  }

  return { doesNotContainQuestionMark: true };
}

function emailIsUnique_dummyValidator(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    // of() is an observable of RxJS
    return of(null);
  }

  return of({ notUnique: true });
}

// Initial value for the email field (if any) loaded from local storage (outside of the component):
// This will be executed when the file will be executed for the first time in the browser.
// This won't work for server-side rendering, but only for client-side rendering.
let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-form');
if (savedForm) {
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
}

@Component({
  selector: 'app-login-via-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-via-reactive.component.html',
  styleUrl: './login-via-reactive.component.css',
})
export class LoginViaReactiveComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  // Set up the form (FormGroup and FormControl are classes and must be initialized first):
  myform = new FormGroup({
    // lets angualar know, how is this form connected to the actual templete (input elements)
    // email: new FormControl('', {
    email: new FormControl(initialEmailValue, {
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique_dummyValidator],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        mustContainQuestionMark,
      ],
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

  ngOnInit(): void {
    // const savedForm = window.localStorage.getItem('saved-login-form');
    // if (savedForm) {
    //   const loadedForm = JSON.parse(savedForm);
    //   // this.myform.controls.email.setValue(loadedForm.email);
    //   // patchValue() set the values which are given and let the other values untouched
    //   this.myform.patchValue({
    //     email: loadedForm.email,
    //   });
    // }

    const subscription = this.myform.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify({ email: value.email })
          );
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onSubmit() {
    console.log(this.myform);
    const enteredEmail = this.myform.controls.email;
    const enteredPassword = this.myform.controls.password;
    console.log(enteredEmail, enteredPassword);
  }
}
