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
