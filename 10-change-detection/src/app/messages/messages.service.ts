import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  //   private messages = signal<string[]>([]); // Step 2: Changed to a non signal
  private messages: string[] = [];

  //   allMessages = this.messages.asReadonly(); // Step 2: Changed to a non signal
  get allMessages() {
    return [this.messages];
  }

  addMessage(message: string) {
    // this.messages.update((prevMessages) => [...prevMessages, message]); // Step 2: Changed to a non signal
    this.messages = [...this.messages, message];
  }
}
