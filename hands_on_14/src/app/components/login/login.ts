import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  errorMessage = '';

  login() {

    const email = this.emailControl.value;
    const password = this.passwordControl.value;

    if (
      email === 'admin@gmail.com' &&
      password === '123456'
    ) {

      this.authService.login();

      this.router.navigate(['/dashboard']);

    } else {

      this.errorMessage = 'Invalid email or password';

    }

  }

}