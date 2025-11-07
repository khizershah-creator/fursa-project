import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRIMENG_IMPORTS } from '../../../shared/ui/primeng';

@Component({
  standalone: true,
  selector: 'app-investor-browse',
  imports: [CommonModule, FormsModule, PRIMENG_IMPORTS],
  template: `
  <p-card header="Browse Opportunities" class="shadow-3">
    <div class="flex gap-2 mb-3">
      <p-dropdown
        [options]="sectorOptions"
        [(ngModel)]="selectedSector"
        placeholder="Filter by sector">
      </p-dropdown>

      <p-inputNumber [(ngModel)]="minValue" placeholder="Min Value"></p-inputNumber>
      <p-inputNumber [(ngModel)]="maxValue" placeholder="Max Value"></p-inputNumber>
      <button pButton label="Filter" (click)="filter()"></button>
    </div>

    <p-table [value]="masked">
      <ng-template pTemplate="header">
        <tr>
          <th>Title</th><th>Sector</th><th>Value</th><th></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td>{{ r.title }}</td>
          <td>{{ r.sector }}</td>
          <td>{{ r.value | number }}</td>
          <td>
            <button pButton label="Request Details" (click)="openTerms(r)"></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </p-card>

  <p-dialog [(visible)]="termsVisible" header="Terms & NDA" [modal]="true" [style]="{width:'35rem'}">
    <div class="mb-3" style="max-height: 240px; overflow: auto">
      {{ ndaText }}
    </div>
    <div class="flex align-items-center gap-2 mb-3">
      <p-checkbox [(ngModel)]="agreed"></p-checkbox>
      <span>I have read and agree to the terms</span>
    </div>
    <div class="flex justify-content-end gap-2">
      <button pButton label="Cancel" (click)="termsVisible=false" severity="secondary"></button>
      <button pButton label="Proceed" [disabled]="!agreed" (click)="unlock()"></button>
    </div>
  </p-dialog>
  `
})
export class InvestorBrowseComponent {
  sectorOptions = [
    { label: 'Food', value: 'Food' },
    { label: 'Tech', value: 'Tech' },
    { label: 'Retail', value: 'Retail' },
  ];
  masked = [
    { id: 1, title: 'Investment Opportunity in the Food Sector in Riyadh', sector: 'Food', value: 500000 },
  ];

  selectedSector?: string;
  minValue?: number;
  maxValue?: number;

  termsVisible = false;
  agreed = false;
  ndaText = 'Admin-defined click-wrap terms will appear here.';

  openTerms(row: any) {
    console.log('Request Details for', row);
    this.termsVisible = true;
    this.agreed = false;
  }

  unlock() {
    this.termsVisible = false;
    alert('Full details unlocked (FR-INV-006)');
  }

  filter() {
    console.log('Filter by', this.selectedSector, this.minValue, this.maxValue);
  }
}
