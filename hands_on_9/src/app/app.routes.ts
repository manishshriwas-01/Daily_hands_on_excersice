import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Tasks } from './tasks/tasks';
import { Profile } from './profile/profile';
import { Notfound } from './notfound/notfound';
import { TasksDetails } from './tasks-details/tasks-details';

export const routes: Routes = [
    {
        path:'',
        component:Dashboard
    },
    {
        path:'dashboard',
        component:Dashboard


    },
    {
        path:'tasks',
        component:Tasks
    },
    {
        path:'tasks/:id',
        component:TasksDetails
    },
    {
        path:'profile',
        component:Profile
    },
    {
        path:'admin',
        loadComponent:()=>
            import('./admin/admin').then(m=>m.Admin)
        
    },
    {
        path:'**',
        component:Notfound
    }

];
