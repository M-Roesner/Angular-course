import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {}
}
