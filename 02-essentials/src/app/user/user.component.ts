import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.module';

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
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  /**
   * Use with the 'input' function:
   * It works with 'signal' and 'computed' as state management from '@angular/core',
   * so the usage within the html file will be changed!
   */
  // avatar = input.required<string>(); // Attention: With this usage it is readonly, you cannot .set / overwrite the value!
  // name = input.required<string>();
  // id = input.required<string>();

  // select = output<string>();

  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }

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
