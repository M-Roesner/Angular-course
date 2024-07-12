import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /** without signal */
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  /**
   * Statemanagement with signal from '@angular/core':
   *
   * Signal is an object that stores a value (any type of value, including nested objects)
   * When a change occurs, Angular is then able to update the part of the UI that needs updating.
   *
   * Hint: This is provided since Angular 16 / 17
   */
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
