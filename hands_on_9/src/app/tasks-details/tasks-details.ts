import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-details',
  imports: [],
  templateUrl: './tasks-details.html',
  styleUrl: './tasks-details.css',
})
export class TasksDetails {
   taskId=signal(0);
   constructor(private route:ActivatedRoute){
    this.taskId.set(
      Number(this.route.snapshot.paramMap.get('id'))
    );
   }
}
