import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  private http=inject(HttpClient);

  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {

    // Remove token
    this.authService.logout();

    // Redirect to login page
    this.router.navigate(['/login']);

  }

  getUsers() {

    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {

        console.log(res);

      });

  }

}