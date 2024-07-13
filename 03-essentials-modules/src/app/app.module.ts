import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks-modules';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  // imports: [] - This is for the usage with standalone components,
  // but this need the BrowserModule from '@angular/platform-browser'.
  // With this you can mix angual components and mudules!
  imports: [
    BrowserModule, // BrowserModule - is only used in the Root Module.
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}
