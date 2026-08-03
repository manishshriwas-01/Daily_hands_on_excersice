import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser, User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
  addUser(user: CreateUser): Observable<User> {
    return this.http.post<User>(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      user
    );
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}