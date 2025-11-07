import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIMENG_IMPORTS } from '../../../shared/ui/primeng';

@Component({
  standalone: true,
  selector: 'app-seller-dashboard',
  imports: [CommonModule, PRIMENG_IMPORTS],
  template: `
    <p-card header="Seller Dashboard" class="shadow-3">
      <p>Welcome, Seller! This is your main area.</p>
    </p-card>
  `
})
export class SellerDashboardComponent {}
