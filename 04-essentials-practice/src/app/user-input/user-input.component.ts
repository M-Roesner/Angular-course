import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // HINT: Currently the app is using the service provider!
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    // reset the form inputs:
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

  // ----------------------------------------------------------------
  // without using signal:
  // @Output() calculate = new EventEmitter<InvestmentInput>(); // With using the Output decorator
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';
  // onSubmit() {
  //   this.calculate.emit({
  //     /**
  //      * Transforming the value to a number use ...
  //      *
  //      * Number()
  //      * - or -
  //      * + in front of the attribute name
  //      *
  //      * Hint: '+' is a shortcut for transforming
  //      */
  //     initialInvestment: +this.enteredInitialInvestment,
  //     duration: +this.enteredDuration,
  //     expectedReturn: Number(this.enteredExpectedReturn),
  //     annualInvestment: Number(this.enteredAnnualInvestment),
  //   });
  // }

  // ----------------------------------------------------------------
  // with using signal:
  // calculate = output<InvestmentInput>(); // With using the output function

  // enteredInitialInvestment = signal('0');
  // enteredAnnualInvestment = signal('0');
  // enteredExpectedReturn = signal('5');
  // enteredDuration = signal('10');

  // onSubmit() {
  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment(),
  //     duration: +this.enteredDuration(),
  //     expectedReturn: +this.enteredExpectedReturn(),
  //     annualInvestment: +this.enteredAnnualInvestment(),
  //   });
  //   // reset the form inputs:
  //   this.enteredInitialInvestment.set('0');
  //   this.enteredAnnualInvestment.set('0');
  //   this.enteredExpectedReturn.set('5');
  //   this.enteredDuration.set('10');
  // }
}
