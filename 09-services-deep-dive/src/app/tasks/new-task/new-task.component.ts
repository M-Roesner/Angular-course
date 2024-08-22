import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // Injecting the TasksService via the constructor to access its methods and properties.
  constructor(private taskService: TasksService) {}

  /**
   * Method to handle adding a new task.
   * This method is typically called from the template when a user submits a form.
   *
   * @param title - The title of the new task.
   * @param description - The description of the new task.
   */
  onAddTask(title: string, description: string) {
    this.taskService.addTask({
      title,
      description,
    });
    this.formEl()?.nativeElement.reset();
  }
}
