import { Component, Inject, Injectable, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})

@Injectable({
  providedIn:'root'
})
export class Services {

  employees=signal<any[]>([
    {
      id:1,
      name:'Manish',
      department:'Engineering'
    },
    {
      id:2,
      name:'Rahul',
      department:'HR'
    },
  ]);
  addEmployee(employee :any){
    this.employees.update(currentEmployees=>[
      ...currentEmployees,
      employee
    ]);
  }
}
