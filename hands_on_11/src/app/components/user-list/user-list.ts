import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, catchError, delay, finalize, of, shareReplay } from 'rxjs';

import { User } from '../../models/user/user';
import { UserService } from '../../services/user-service/user-service';

@Component({
  selector: 'app-user-list',
  imports: [AsyncPipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  private userService = inject(UserService);

  loading = signal(true);
   error = signal('');

  users$: Observable<User[]> = this.userService.getUsers().pipe(
    delay(3000),

    catchError((err) => {

      console.error(err);

      this.error.set('Unable to load users');

      return of([]);

    }),

    finalize(() => {

      this.loading.set(false);

    }),

    shareReplay(1)

  );

}