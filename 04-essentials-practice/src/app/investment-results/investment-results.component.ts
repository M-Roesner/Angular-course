import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // HINT: Currently the app is using the service provider!
  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultData;
  // }

  results = computed(() => this.investmentService.resultData());
  // ----------------------------------------------------------------
  // With using signal:
  // results = input<
  //   {
  //     year: number;
  //     interest: number; // Zinsen
  //     valueEndOfYear: number;
  //     annualInvestment: number; // jährliche Investition
  //     totalInterest: number; // Gesamt Zinsen
  //     totalAmountInvested: number; // Investierter Gesamtbetrag
  //   }[]
  // >();
  // ----------------------------------------------------------------
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
