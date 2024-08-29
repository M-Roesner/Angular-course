import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login-via-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponentViaTemplateDriven {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('safed-login-form');

      if (savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;

        // The timeout must be set here, because if the page is not fully initialized, you will receive an error message
        // Message: TypeError: Cannot read properties of undefined (reading 'setValue')
        // Setting a timeout is one way of waiting for initialization.
        setTimeout(() => {
          // This sets the whole form data:
          // this.form().setValue({
          //   email: savedEmail,
          //   password: '',
          // });
          // This sets only the 'email' variable
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subbscription = this.form()
        .valueChanges?.pipe(
          // debounceTime - is an optimization for performance otherwise it will store the value after every change.
          debounceTime(500)
        )
        .subscribe({
          next: (value) =>
            // Store the form data in local storage.
            window.localStorage.setItem(
              // key in the local storage
              'safed-login-form',
              // value to be stored in the local storage
              // The value must be changed to a json string before.
              JSON.stringify({ email: value.email })
            ),
        });

      this.destroyRef.onDestroy(() => subbscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;

    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(formData.form);
    console.log(enteredEmail, enteredPassword);

    formData.form.reset();
  }
}
