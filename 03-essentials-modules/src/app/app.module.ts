import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  // imports: [] - This is for the usage with standalone components,
  // but this need the BrowserModule from '@angular/platform-browser'.
  // With this you can mix angual components and mudules!
  imports: [BrowserModule, UserComponent, TasksComponent],
})
export class AppModule {}
