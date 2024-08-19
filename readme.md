# Angular - The Complete Guide (2024 Edition)

This course is created by Maximilian Schwarzmüller

[course code repository](https://github.com/mschwarzmueller/angular-complete-guide-course-resources)

# The Angular CLI:

- [The Angular CLI](https://angular.dev/tools/cli)
- [Getting Started](https://angular.dev/tools/cli/setup-local)

  `npm install -g @angular/cli`

# Needed Tools:

- Is needed bevor installing of angular CLI!

- [nodejs](https://nodejs.org/en)

# VSC Extension:

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

# Commands:

- new project:
  `ng new <APP_NAME>`

  - Note: If you receive an error message like this:

        ng : Die Datei "C:\PATH\AppData\Roaming\npm\ng.ps1" kann nicht geladen werden, da die Ausführung von Skripts auf diesem System deaktiviert ist. Weitere Informationen finden Sie unter
        "about_Execution_Policies" (https:/go.microsoft.com/fwlink/?LinkID=135170).

    - Click on the link of the file, the file will be displayed in vsc.
    - Right-click on the file in vsc and open it with "Reveal in File Explorer".
    - Remove the file and enter the command again.

- start server:

  `npm start` or `ng serve`

  - Then you get a local host address, e.g. `http://localhost:4200/`.
  - This will reload and update all changes during running.

- create a new component by CLI:

  `ng generate component <COMPONENT_NAME>` or `ng g c <COMPONENT_NAME>`

# Setups:

- To see the images, adjust the angular.json with the following assets:

  ```ts
  {
  "projects": {
      "essentials": {
        "architect": {
          "build": {
              "assets": ["src/favicon.ico", "src/assets"],
            },
  }}}}

  ```

# Extras:

## DatePipe:

Dokumentation: [DatePipe](https://angular.dev/api/common/DatePipe)

Example:

```ts
// ts component
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [DatePipe],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  // some code ...
}
```

```html
<!-- html component -->
<article>
  <time>{{ task.dueDate | date : "fullDate" }}</time>
  <!-- some content ... -->
</article>
```

## Forms:

### Form submission

To prevent the default event for submitting a form.

#### TS file

To use the event handling of the submit event, 'FormsModule' is required!

```ts
import { FormsModule } from "@angular/forms";

@component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  onSubmit() {
    console.log("Submitted");
  }
}
```

#### HTML file

- (ngSubmit) is Angular's selector to prevent the standard event.
- Inside "" contains the function that handles the submit event, e.g. "onSubmit()".

```html
<form (ngSubmit)="onSubmit()">
  <!-- some code -->
</form>
```
