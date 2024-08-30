import { Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <your-domain>/users/<userId>
    component: UserTasksComponent,
    children: userRoutes,
    // static data
    data: {
      message: 'Hello!',
    },
    // dynamic data
    resolve: {
      userName: resolveUserName,
    },
  },
  {
    // Fallback routes if no url found
    path: '**', // <your-domain>/*
    component: NotFoundComponent,
  },
];
