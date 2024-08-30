import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userId = input.required<string>();

  // Extracting Query Parameters via Inputs - a short way!
  // Attention the name (in this case 'order') has to be the same name as in the template!
  // order = input<'asc' | 'desc'>();

  // Using signal to sort the tasks
  order = signal<'asc' | 'desc'>('desc');
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => this.order.set(params['order']),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  private tasksService = inject(TasksService);

  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        // sorts the tasks according to the order
        if (this.order() === 'desc') {
          return a.id > b.id ? -1 : 1;
        } else {
          return a.id > b.id ? 1 : -1;
        }
      })
  );

  // Extracting Query Parameters via Observables
  // order?: 'asc' | 'desc';
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.queryParams.subscribe({
  //     next: (params) => (this.order = params['order']),
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}
