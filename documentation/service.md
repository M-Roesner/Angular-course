# Services

## How do I configure a service

The following services uses **signal** to store data it also will work without signal.

```ts
import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
  providedIn: "root",
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
      status: "OPEN", // Sets the initial status of the task as 'OPEN'.
    };

    // Updates the tasks array by adding the new task to the existing list.
    this.tasks.update((oldTasks) => [...oldTasks, newTask]); // update() creates a new array, ensuring immutability.
    // If you use this.oldTasks.push(newTask); instead of update().
    // This modifies the original array, which might not trigger change detection.
  }
}
```

## How do I get access to a service!

**via constructor:**

```ts
import { Component } from "@angular/core";
import { TasksService } from "../tasks.service";

@Component({})
export class NewTaskComponent {
  // Injecting the TasksService via the constructor to access its methods and properties.
  constructor(private taskService: TasksService) {}

  // Method to handle adding a new task.
  onAddTask(title: string, description: string) {
    this.taskService.addTask({
      title,
      description,
    });
  }
}
```

**via inject:**

```ts
import { Component, inject } from "@angular/core";
import { TasksService } from "../tasks.service";

@Component({})
export class TasksListComponent {
  // Injecting the TasksService into the component to access task-related functionalities.
  private tasksService = inject(TasksService);

  // Assigning the read-only tasks from the service to a local property for use in the template.
  tasks = this.tasksService.allTasks;
}
```
