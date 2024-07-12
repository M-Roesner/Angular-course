import { Component, Input } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /**
   * Use with the 'Input' decorator
   */
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {}

  /**
   * Use with the 'input' function:
   * It works with 'signal' and 'computed' as state management from '@angular/core',
   * so the usage within the html file will be changed!
   */
  // avatar = input.required<string>(); // Attention: With this usage it is readonly, you cannot .set / overwrite the value!
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  // onSelectUser() {}

  /** without 'signal' */
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
   * Statemanagement with 'signal' and 'computed' from '@angular/core':
   *
   * Signal is an object that stores a value (any type of value, including nested objects)
   * When a change occurs, Angular is then able to update the part of the UI that needs updating.
   *
   * Hint: This is provided since Angular 16 / 17
   */
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
