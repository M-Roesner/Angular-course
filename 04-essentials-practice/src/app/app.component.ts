import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  onCalculateInvestmentResults(data: {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }) {
    // This content comes from the file investment-results.ts and was provided by the creator of the tutorial.
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);

      investmentValue += interestEarnedInYear + annualInvestment;

      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear, // Zinsen
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment, // jährliche Investition
        totalInterest: totalInterest, // Gesamt Zinsen
        totalAmountInvested: initialInvestment + annualInvestment * year, // Investierter Gesamtbetrag
      });
    }

    console.log(annualData);

    // return annualData;
  }
}
