import { Component } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
})
export class MessagesComponent {
  // messages = signal<string[]>([]); // Step 1: Changed to a MessagesService

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  // Step 1: Removed because of using a MessagesService
  // onAddMessage(message: string) {
  //   this.messages.update((oldMessages) => [...oldMessages, message]);
  // }
}
