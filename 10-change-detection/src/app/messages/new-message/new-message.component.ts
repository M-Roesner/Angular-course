import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
})
export class NewMessageComponent {
  // add = output<string>(); // Step 1: Removed because of using a MessagesService
  private messageService = inject(MessagesService);
  // enteredText = signal(''); // Step 2: Changed to a non signal
  enteredText = '';

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText()); // Step 1: Changed to a MessagesService
    // this.messageService.addMessage(this.enteredText()); // Step 2: Changed to a non signal
    this.messageService.addMessage(this.enteredText);
    // this.enteredText.set(''); // Step 2: Changed to a non signal
    this.enteredText = '';
  }
}
