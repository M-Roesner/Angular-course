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

## Data formatting:

### DatePipe:

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

### CurrencyPipe:

Dokumentation: [CurrencyPipe](https://angular.dev/api/common/CurrencyPipe)

Example:

```ts
// ts component
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  // some code ...
}
```

Formatting a value with the currency:
`{{ result.value | currency }}` add '| currency' after the value!

```html
<!-- html component -->
<table>
  <tbody>
    @for (result of results; track result.year) {
    <tr>
      <td>{{ result.year }}</td>
      <td>{{ result.valueEndOfYear | currency }}</td>
      <td>{{ result.interest | currency }}</td>
      <td>{{ result.totalInterest | currency }}</td>
      <td>{{ result.totalAmountInvested | currency }}</td>
    </tr>
    }
  </tbody>
</table>
<!-- some content ... -->
```

## Forms:

### Form submission

To prevent the default event for submitting a form.

**Alternative ways to extract data:**

- Input binding - `[(ngModel)]="enteredInitialInvestment"`
- or
- template variables - `#inputText`

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

### via Input binding

To bind/connect the input binding with the component.

#### TS file

To bind the value binding with the component, 'FormsModule' is required!

Hint: The value that you get out an input will always be a string not a number.

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
  enteredInitialInvestment = "0";
}
```

#### HTML file

- [(ngModel)] is Angular's selector to bind the value with the component.
- Inside "" contains the name of the value from the ts file, e.g. "enteredInitialInvestment".
- Hint: the 'name' attribute is required if you use [(ngModel)]!
- Error message:

  `NG01352: If ngModel is used within a form tag, either the name attribute must be set or the form`

  `control must be defined as 'standalone' in ngModelOptions.`

  `Example 1: <input [(ngModel)]="person.firstName" name="first">`

```html
<p>
  <label for="initial-investment">Initial Investment</label>
  <input type="number" id="initial-investment" name="initial-investment" [(ngModel)]="enteredInitialInvestment" />
</p>
```

### via template variables

#### TS file

Hint: 'FormsModule' is required!

```ts
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent {
  onSubmit(title: string, ticketText: string) {
    console.log("title:" + title);
    console.log("ticketText:" + ticketText);
  }
}
```

#### HTML file

- 'titleInput' itself receives an 'HTMLInputElement' that contains an object.
- There you can find the key value to get the entered value.
- In this example the value of the element is given directly.
- The data will be passed to the TS file as an argument to the 'onSubmit' method.
- Hint: the # sign is required on the input field .. !

- By default, you have access to the HTML element itself, but if you set it to a user-defined component, you have access to this component!
- Example:
  `<input name="title" id="title" #titleInput /> - It is a default element and gets 'HTMLInputElement'`
  `<app-control label="Title" #control > - Gets access to the 'ControlComponent' component`

```html
<form (ngSubmit)="onSubmit(titleInput.value, textInput.value)">
  <app-control label="Title">
    <!-- app-control = custom component -->
    <input name="title" id="title" #titleInput />
  </app-control>
  <textarea name="request" id="request" rows="3" #textInput></textarea>
</form>
```
