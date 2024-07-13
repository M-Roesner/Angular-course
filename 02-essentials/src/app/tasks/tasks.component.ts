import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

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

  filteredTasks = DUMMY_TASKS;

  isAddingTask = false;

  get selectedUserTasks() {
    return this.filteredTasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.filteredTasks = this.filteredTasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
