import { Component, input ,inject} from '@angular/core';
import { Services } from '../services/services';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
  title=input.required<string>();
  employeeService=inject(Services);
}
