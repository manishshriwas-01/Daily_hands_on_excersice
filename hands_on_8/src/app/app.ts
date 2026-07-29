import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EmployeeCard } from './employee-card/employee-card';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeCard,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
