import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Services } from '../services/services';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  private fb=inject(FormBuilder);
  private employeeService=inject(Services);

  //child->parent
  employeeAdded=output<string>();

  employeeForm=this.fb.group({
    id:[0],
    name: ['',Validators.required],
    department:['',Validators.required]
  });
  addEmployee(){
    if(this.employeeForm.invalid){
      return;
    }
    const employee=this.employeeForm.getRawValue();
    this.employeeService.addEmployee(employee);

    this.employeeAdded.emit(employee.name!);//parent ko data send kr rha hai 

    this.employeeForm.reset({
      id:0,
      name:'',
      department:''
    });
  }
}
