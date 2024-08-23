import { Component, inject } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
})
export class MessagesListComponent {
  private messageService = inject(MessagesService);
  // messages = input.required<string[]>(); // Step 1: Changed to a MessagesService
  // messages = this.messageService.allMessages; // Step 2: Changed to a non signal
  get messages() {
    return this.messageService.allMessages;
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
