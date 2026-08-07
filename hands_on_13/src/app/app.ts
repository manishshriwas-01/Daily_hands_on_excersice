import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCard } from './components/task-card/task-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showCard = true;
  protected readonly title = signal('hands_on_13');
}
