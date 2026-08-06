import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../../models/user/user';

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

}