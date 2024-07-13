import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {} // Get access to tasksService with usage of the constructor.
  // private tasksService = inject(TasksService); // Get access to tasksService with usage of inject function.

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
