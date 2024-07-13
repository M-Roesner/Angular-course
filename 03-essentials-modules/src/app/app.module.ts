import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';

// Modules
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  // imports: [] - This is for the usage with standalone components,
  // but this need the BrowserModule from '@angular/platform-browser'.
  // With this you can mix angual components and mudules!
  imports: [
    BrowserModule,
    // DatePipe, // DatePipe is not needed, because it's already available in 'BrowserModule'.
    FormsModule,
    SharedModule,
  ],
})
export class AppModule {}
