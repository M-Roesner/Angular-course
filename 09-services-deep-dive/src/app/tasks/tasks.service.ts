import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

/**
 * Service to manage tasks within the application.
 * Provides methods to add tasks and exposes a read-only list of all tasks.
 */
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  // Private signal ensures only the service has direct access to modify the tasks.
  private tasks = signal<Task[]>([]);

  // Exposes a read-only version of the tasks, preventing external modifications.
  allTasks = this.tasks.asReadonly();

  /**
   * Adds a new task to the task list.
   *
   * @param taskData - The data for the new task, containing a title and a description.
   * @returns void
   */
  addTask(taskData: { title: string; description: string }): void {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(), // Generates a unique ID for the task.
      status: 'OPEN', // Sets the initial status of the task as 'OPEN'.
    };

    // Updates the tasks array by adding the new task to the existing list.
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
}
