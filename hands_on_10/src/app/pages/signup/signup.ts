import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { passwordMatchValidator } from '../../validators/password-match/password-match';


@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  
  successMessage=signal('');
  fb = inject(FormBuilder);
  signUpForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', 
      [Validators.required, 
        Validators.minLength(8)
      ]],
    confirmPassword: ['', Validators.required]
  },
  {
    validators:passwordMatchValidator
  });
  

  register() {

  if (this.signUpForm.invalid) {
    this.signUpForm.markAllAsTouched();
    return;
  }

  console.log(this.signUpForm.value);
  this.successMessage.set("Registration Successful!")
  this.signUpForm.reset();

  setTimeout(()=>{
    this.successMessage.set('');
    console.log('Message Hidden');
  },3000)
  

}

}
