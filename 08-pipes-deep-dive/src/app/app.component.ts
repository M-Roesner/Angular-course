import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturPipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturPipe, SortPipe],
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    // this.historicTemperatures.sort((a, b) => b - a); // If you sort here you can remove the sort pipe from the template!
  }

  onReset(index: number) {
    // this.historicTemperatures[index] = 18;

    // We need to create a new instance of the temperatures array because the sort pipe (| sort: 'desc') returns a new sorted array
    // The original array reference is not updated by the pipe, so we must manually create a new array to update the temperatures correctly.
    const newTemps = (this.historicTemperatures = [
      ...this.historicTemperatures,
    ]);
    newTemps[index] = 18;
    this.historicTemperatures = newTemps;
  }
}
