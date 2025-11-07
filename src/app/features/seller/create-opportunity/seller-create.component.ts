import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRIMENG_IMPORTS } from '../../../shared/ui/primeng';
import { SECTORS, CITIES, EMPLOYEE_RANGES, OFFER_TYPES } from '../../../core/guards/constants/lookups';

@Component({
  standalone: true,
  selector: 'app-seller-create',
  imports: [CommonModule, FormsModule, PRIMENG_IMPORTS],
  template: `
  <p-card header="Create New Opportunity" class="shadow-3">
    <p-tabView>
      <!-- Step 1: Company Information -->
      <p-tabPanel header="Company Info">
        <div class="p-fluid">
          <div class="field">
            <label>Company Legal Name</label>
            <input pInputText [(ngModel)]="form.companyName" />
          </div>

          <div class="field">
            <label>Commercial Registration (CR) Number</label>
            <input pInputText [(ngModel)]="form.crNumber" />
          </div>

          <div class="field">
            <label>Company Capital (SAR)</label>
            <p-inputNumber [(ngModel)]="form.capital" [min]="0" mode="decimal"></p-inputNumber>
          </div>

          <div class="field">
            <label>Company Sector</label>
            <p-dropdown
              [options]="sectorOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select sector"
              [(ngModel)]="form.sector">
            </p-dropdown>
          </div>

          <div class="field">
            <label>Company Location</label>
            <p-dropdown
              [options]="cityOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select city"
              [(ngModel)]="form.location">
            </p-dropdown>
          </div>

          <div class="field">
            <label>Year Founded</label>
            <p-inputNumber [(ngModel)]="form.yearFounded" [min]="1900" [max]="2100"></p-inputNumber>
          </div>

          <div class="field">
            <label>Number of Employees</label>
            <p-dropdown
              [options]="employeeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select range"
              [(ngModel)]="form.employees">
            </p-dropdown>
          </div>
        </div>
      </p-tabPanel>

      <!-- Step 2: Offer Details -->
      <p-tabPanel header="Offer Details">
        <div class="p-fluid">
          <div class="field">
            <label>Offer Type</label>
            <p-dropdown
              [options]="offerTypeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select offer type"
              [(ngModel)]="form.offerType">
            </p-dropdown>
          </div>

          <div class="field">
            <label>Estimated Value / Asking Price (SAR)</label>
            <p-inputNumber [(ngModel)]="form.askingPrice" [min]="0" mode="decimal"></p-inputNumber>
          </div>

          <div class="field">
            <label>Masked Listing Title</label>
            <input pInputText [(ngModel)]="form.maskedTitle" placeholder="e.g., Investment Opportunity in the Food Sector in Riyadh" />
          </div>

          <div class="field">
            <label>Short Description (Public)</label>
            <textarea pInputTextarea rows="4" [(ngModel)]="form.shortDescription"></textarea>
          </div>

          <div class="field">
            <label>Detailed Description (Private)</label>
            <textarea pInputTextarea rows="6" [(ngModel)]="form.detailedDescription"></textarea>
          </div>
        </div>
      </p-tabPanel>

      <!-- Step 3: Documents -->
      <p-tabPanel header="Documents">
        <div class="p-fluid">
          <div class="field">
            <p-fileUpload mode="basic" name="cr" chooseLabel="Upload CR Copy"></p-fileUpload>
          </div>
          <div class="field">
            <p-fileUpload mode="basic" name="fs" chooseLabel="Upload Financial Statements"></p-fileUpload>
          </div>

          <div class="mt-3">
            <button pButton label="Submit for Review" (click)="submit()"></button>
          </div>
        </div>
      </p-tabPanel>
    </p-tabView>
  </p-card>
  `
})
export class SellerCreateComponent {
  form: any = {
    companyName: '',
    crNumber: '',
    capital: null,
    sector: '',
    location: '',
    yearFounded: null,
    employees: '',
    offerType: '',
    askingPrice: null,
    maskedTitle: '',
    shortDescription: '',
    detailedDescription: '',
  };

  // convert lookups into dropdown {label,value}
  sectorOptions   = SECTORS.map(s => ({ label: s, value: s }));
  cityOptions     = CITIES.map(c => ({ label: c, value: c }));
  employeeOptions = EMPLOYEE_RANGES.map(e => ({ label: e, value: e }));
  offerTypeOptions= OFFER_TYPES.map(o => ({ label: o, value: o }));

  submit() {
    // For MVP, just simulate FR-SEL-004 (Pending Review queue)
    console.log('Submitted listing:', this.form);
    alert('Listing submitted for Admin review (status: Pending Review).');
  }
}
