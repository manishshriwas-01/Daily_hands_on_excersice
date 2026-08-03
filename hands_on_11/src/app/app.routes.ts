import { Routes } from '@angular/router';


import { UserList } from './components/user-list/user-list';
import {AddUserComponent } from './components/add-user/add-user';
import {  UpdateUserComponent } from './components/update-user/update-user';
import {  DeleteUserComponent } from './components/delete-user/delete-user';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserList
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'update-user',
    component: UpdateUserComponent
  },
  {
    path: 'delete-user',
    component:DeleteUserComponent
  }
];