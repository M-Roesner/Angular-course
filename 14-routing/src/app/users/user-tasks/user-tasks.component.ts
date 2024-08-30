import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';

import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // The name userName comes from the router with help of the resolcer.
  userName = input.required<string>(); // Here is the dynamic data stored
  message = input.required<string>(); // Here is the static data stored
  // /**
  //  * This is a code snippet from the router:
  //  * {
  //  * path: 'users/:userId', // <your-domain>/users/<userId>
  //  * component: UserTasksComponent,
  //  * children: userRoutes,
  //  * resolve: {
  //  *   userName: resolveUserName,
  //  * },
  //  */

  // With this approach, you can retrieve both data (static and dynamic) from the router.
  private activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  // ----------------------------------------------------------------
  // // The code below is old it gets the data inside this component.
  // private userService = inject(UsersService);
  // private destroyRef = inject(DestroyRef);

  // message = input.required<string>(); // TEST: how can you get static data from the route.
  // /**
  //  * This is a code snippet from the route:
  //  * {
  //  * path: 'users/:userId', // <your-domain>/users/<userId>
  //  * component: UserTasksComponent,
  //  * children: userRoutes,
  //  * data: {
  //  *   message: 'Hello!',
  //  * },
  //  */

  // // userId = input.required<string>();
  // // userName = computed(
  // //   () => this.userService.users.find((u) => u.id === this.userId())?.name
  // // );

  // // An alternative way to determine the user name, however, is an older and more complex approach.
  // private activatedRoute = inject(ActivatedRoute);
  // userName = '';
  // ngOnInit(): void {
  //   console.log('Input Data: ' + this.message()); // TESTING: get the data from the route

  //   console.log(this.activatedRoute);
  //   const subscribtion = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       const userId = paramMap.get('userId')!;
  //       this.userName =
  //         this.userService.users.find((u) => u.id === userId)?.name || '';
  //     },
  //   });

  //   this.destroyRef.onDestroy(() => subscribtion.unsubscribe());
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userId = activatedRoute.paramMap.get('userId')!;
  const userName = userService.users.find((u) => u.id === userId)?.name || '';
  return userName;
};
