import { Component, signal } from '@angular/core';
import { EmployeeForm } from '../employee-form/employee-form';
import { EmployeeCard } from '../employee-card/employee-card';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EmployeeForm, EmployeeCard],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  pageTitle = signal("Employee List");

  message = signal("");

  onEmployeeAdded(name: string) {
    this.message.set(`${name} added successfully`);
  }

}