import { Component, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  // Injecting the TasksService into the component to access task-related functionalities.
  private tasksService = inject(TasksService);

  // Assigning the read-only tasks from the service to a local property for use in the template.
  tasks = this.tasksService.allTasks;

  selectedFilter = signal<string>('all');

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
