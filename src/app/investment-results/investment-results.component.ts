import { Component, input, Input } from '@angular/core';
import { AnnualData } from '../annual-data.model';
import { CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  imports: [CurrencyPipe, CommonModule],
})
export class InvestmentResultsComponent {
  results = input<AnnualData[]>();
}
