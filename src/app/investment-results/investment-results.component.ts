import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  imports: [CurrencyPipe, CommonModule],
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  //results = this.investmentService.resultData.asReadonly();
  results = computed(() => this.investmentService.resultData());
}
