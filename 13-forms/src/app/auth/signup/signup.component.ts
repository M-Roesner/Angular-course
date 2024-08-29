import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// function equalValues(controle: AbstractControl) {
//   const passwordControl = controle.get('password')?.value;
//   const confirmPasswordControl = controle.get('confirmPassword')?.value;

//   if (passwordControl === confirmPasswordControl) {
//     return null; // To allow form to submit
//   }
//   return { passwordsNotEqual: true };
// }
function equalValues(controlName1: string, controlName2: string) {
  return (controle: AbstractControl) => {
    const val1 = controle.get(controlName1)?.value;
    const val2 = controle.get(controlName2)?.value;

    if (val1 === val2) {
      return null;
    }
    return { valueNotEqual: true };
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  myForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      {
        validators: [equalValues('password', 'confirmPassword')],
      }
    ),
    firstName: new FormControl('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      validators: [Validators.required],
    }),
    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required],
      }),
      number: new FormControl('', {
        validators: [Validators.required],
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required],
      }),
      city: new FormControl('', {
        validators: [Validators.required],
      }),
    }),
    role: new FormControl<
      'student' | 'teacher' | 'employee' | 'founder' | 'other'
    >('student', {
      validators: [Validators.required],
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false, {
      validators: [Validators.required],
    }),
  });

  OnSubmit() {
    if (this.myForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    console.log(this.myForm);
  }

  OnReset() {
    console.log('onReset');

    this.myForm.reset();
  }
}
