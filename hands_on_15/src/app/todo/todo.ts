import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

  taskTitle = '';

  tasks: Task[] = [];

  addTask(): void {

    if (!this.taskTitle.trim()) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: this.taskTitle.trim(),
      completed: false
    };

    this.tasks.push(newTask);

    this.taskTitle = '';
  }

  toggleTask(task: Task): void {

    task.completed = !task.completed;

  }

  deleteTask(id: number): void {

    this.tasks = this.tasks.filter(
      task => task.id !== id
    );

  }

}