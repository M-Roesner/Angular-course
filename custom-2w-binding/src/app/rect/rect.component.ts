import {
  Component,
  EventEmitter,
  Input,
  input,
  model,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // Two Way binding with the decorator:
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  // // Attention: The name for two way binding is important the name has to end with "Change"
  // // Error message:
  // // "The property and event halves of the two-way binding 'size' are not bound to the same target."

  // Two Way binding with signal (model):
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // With the decorator:
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100',
    // });

    // With signal (model):
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
