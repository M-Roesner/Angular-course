import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>/users/<userId>
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks', // <your-domain>/users/<userId>/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new', // <your-domain>/users/<userId>/tasks/new
        component: NewTaskComponent,
      },
    ],
  },
];