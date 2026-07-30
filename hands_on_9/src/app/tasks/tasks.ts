import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [RouterLink,NgClass],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  Tasks=signal([
    {
      id:1,
      title:"Learn Angular",
      completed:false
    },
    {
      id:2,
      title:"Build TaskFlow",
      completed:true
    },
    {
      id:3,
      title:"Learn Routing",
      completed:false
    }
  ]);
}
