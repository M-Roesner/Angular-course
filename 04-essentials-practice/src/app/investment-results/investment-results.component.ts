import { CurrencyPipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // With using signal:
  results = input<
    {
      year: number;
      interest: number; // Zinsen
      valueEndOfYear: number;
      annualInvestment: number; // jährliche Investition
      totalInterest: number; // Gesamt Zinsen
      totalAmountInvested: number; // Investierter Gesamtbetrag
    }[]
  >();

  // Without using signal:
  // @Input() results?: {
  //   year: number;
  //   interest: number; // Zinsen
  //   valueEndOfYear: number;
  //   annualInvestment: number; // jährliche Investition
  //   totalInterest: number; // Gesamt Zinsen
  //   totalAmountInvested: number; // Investierter Gesamtbetrag
  // }[];

  /**
   * {}[]
   * - {} an object
   * - [] defines the object as an array
   */
}
