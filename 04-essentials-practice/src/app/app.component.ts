import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  // HINT: Currently the app is using the service provider!
  // ----------------------------------------------------------------
  // resultsData without using of signal as store manager:
  // resultsData?: {
  //   year: number;
  //   interest: number; // Zinsen
  //   valueEndOfYear: number;
  //   annualInvestment: number; // jährliche Investition
  //   totalInterest: number; // Gesamt Zinsen
  //   totalAmountInvested: number; // Investierter Gesamtbetrag
  // }[];
  // ----------------------------------------------------------------
  // resultsData with using of signal as store manager:
  // resultsData = signal<
  //   | {
  //       year: number;
  //       interest: number; // Zinsen
  //       valueEndOfYear: number;
  //       annualInvestment: number; // jährliche Investition
  //       totalInterest: number; // Gesamt Zinsen
  //       totalAmountInvested: number; // Investierter Gesamtbetrag
  //     }[]
  //   | undefined
  // >(undefined);
}
