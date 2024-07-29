import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule],
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log(
      `
       Initial Investment: ${this.enteredInitialInvestment},
       Annual Investment: ${this.enteredAnnualInvestment},
       Expected Return: ${this.enteredExpectedReturn},
       Duration: ${this.enteredDuration}
       `
    );
  }
}
