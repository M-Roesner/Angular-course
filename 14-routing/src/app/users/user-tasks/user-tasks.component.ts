import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';

import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  private userService = inject(UsersService);
  private destroyRef = inject(DestroyRef);

  // userId = input.required<string>();
  // userName = computed(
  //   () => this.userService.users.find((u) => u.id === this.userId())?.name
  // );

  // An alternative way to determine the user name, however, is an older and more complex approach.
  private activatedRoute = inject(ActivatedRoute);
  userName = '';
  ngOnInit(): void {
    console.log(this.activatedRoute);
    const subscribtion = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        const userId = paramMap.get('userId')!;
        this.userName =
          this.userService.users.find((u) => u.id === userId)?.name || '';
      },
    });

    this.destroyRef.onDestroy(() => subscribtion.unsubscribe());
  }
}
