import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(): void {

    localStorage.setItem(
      'token',
      'abc123'
    );

  }

  logout(): void {

    localStorage.removeItem(
      'token'
    );

  }

  getToken(): string | null {

    return localStorage.getItem(
      'token'
    );

  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem(
      'token'
    );

  }

}