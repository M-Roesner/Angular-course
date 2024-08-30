import { Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    // If the user navigates manually inside the url.
    // This is ensures that the user will always see the correct path.
    path: '', // <your-domain>/users/<userId>/
    redirectTo: 'tasks', // Redirect to tasks if no specific path is given
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<userId>/tasks
    component: TasksComponent,
  },
  {
    path: 'tasks/new', // <your-domain>/users/<userId>/tasks/new
    component: NewTaskComponent,
  },
];
