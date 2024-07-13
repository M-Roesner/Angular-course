import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.module';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // With using of 'signal' as statemanagement system.
  // Inside of the html component, you don't have to change everything there. (no brackets needed in this case!)
  // enteredTitle = signal('');

  @Output() cancel = new EventEmitter<void>();
  onCancel() {
    this.cancel.emit();
  }

  @Output() add = new EventEmitter<NewTaskData>();
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
