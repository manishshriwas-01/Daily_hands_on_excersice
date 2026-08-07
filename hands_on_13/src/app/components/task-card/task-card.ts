import { Component } from '@angular/core';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-task-card',
  imports: [TimeAgoPipe,HighlightDirective],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = {
    title: 'Angular Learning',
    createdAt: new Date(),
    status: 'In Progress'
  };

   ngOnInit(): void {
    console.log('Task Card Loaded');
  }

  ngOnDestroy(): void {
    console.log('Task Card Destroyed');
  }
}
