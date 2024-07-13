import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.module';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

/**
 * Dokumentation for using of the date pipe:
 * https://angular.dev/api/common/DatePipe
 */
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    this.completed.emit(this.task.id);
  }
}
