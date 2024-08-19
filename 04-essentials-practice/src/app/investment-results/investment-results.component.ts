import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input<{
  //   year: number,
  //   interest: number, // Zinsen
  //   valueEndOfYear: number,
  //   annualInvestment: number, // jährliche Investition
  //   totalInterest: number, // Gesamt Zinsen
  //   totalAmountInvested: number, // Investierter Gesamtbetrag
  // }[]>()

  @Input() results?: {
    year: number;
    interest: number; // Zinsen
    valueEndOfYear: number;
    annualInvestment: number; // jährliche Investition
    totalInterest: number; // Gesamt Zinsen
    totalAmountInvested: number; // Investierter Gesamtbetrag
  }[];

  /**
   * {}[]
   * - {} an object
   * - [] defines the object as an array
   */
}
