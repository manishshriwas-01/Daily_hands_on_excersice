import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signup } from './pages/signup/signup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hands_on_10');
}
