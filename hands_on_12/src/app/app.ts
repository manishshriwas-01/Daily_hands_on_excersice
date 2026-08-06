import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchUser } from './components/search-user/search-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SearchUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hands_on_12');
}
