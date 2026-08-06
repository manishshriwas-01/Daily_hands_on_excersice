import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  catchError,
  finalize,
  of,
  delay,
  filter
} from 'rxjs';

import { UserService } from '../../services/user-service/user-service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-search-user',
  imports: [
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './search-user.html',
  styleUrl: './search-user.css'
})
export class SearchUser {


  private userService = inject(UserService);


  searchControl = new FormControl('', {
    nonNullable: true
  });

 
  loading = signal(false);

 
  error = signal('');

  // Search result Observable
  users$ = this.searchControl.valueChanges.pipe(

    // User stops typing for 500ms
    debounceTime(500),

    // Same consecutive value ignore
    distinctUntilChanged(),

    // Minimum 3 characters required
    filter(searchText => searchText.trim().length >= 3),

   
    switchMap(searchText => {

      // API start → show loading
      this.loading.set(true);

      // Remove previous error
      this.error.set('');

      return this.userService.getUsers().pipe(


        delay(2000),

        // Filter API users according to search
        map((users: User[]) => {

          return users.filter(user =>

            user.name
              .toLowerCase()
              .includes(searchText.toLowerCase())

          );

        }),

        // Handle API errors
        catchError(err => {

          console.error(err);

          this.error.set('Unable to load users.');

          return of([] as User[]);

        }),

       
        finalize(() => {

          this.loading.set(false);

        })

      );

    })

  );

}