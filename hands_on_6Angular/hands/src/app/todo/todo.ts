import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tasks = signal([
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Practice Signals', completed: true },
    { id: 3, title: 'Build Todo UI', completed: false }
  ]);

  selectedFilter = signal('All');
  filterTasks = computed(() => {
    if (this.selectedFilter() === 'Active') {
      return this.tasks().filter(task => !task.completed);
    }

    if (this.selectedFilter() === 'Completed') {
      return this.tasks().filter(task => task.completed);
    }

    return this.tasks();
  });
}
