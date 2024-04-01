import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  //in order to use a service, we have to add it as a provider
  //in the constructor
  constructor(private taskService: TaskService) {}

  //this is a lifecycle method
  //can be thought as lifecycle methods in react
  //class based componenets and hooks in functional
  //componenets
  ngOnInit(): void {
    //subscribing to this observable
    //so we can constantly listen to it
    //kind of trpc, but this is probably doing something more behind the scenes

    //callback function to receive whatever the observable returns
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
