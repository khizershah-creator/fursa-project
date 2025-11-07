import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIMENG_IMPORTS } from '../../../shared/ui/primeng';

@Component({
  standalone: true,
  selector: 'app-investor-interests',
  imports: [CommonModule, PRIMENG_IMPORTS],
  template: `
  <p-card header="My Interests" class="shadow-3">
    <p-table [value]="rows">
      <ng-template pTemplate="header">
        <tr><th>Title</th><th>Status</th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td>{{ r.title }}</td>
          <td>{{ r.status }}</td>
        </tr>
      </ng-template>
    </p-table>
  </p-card>
  `
})
export class InvestorInterestsComponent {
  rows = [{ title: 'Food opportunity in Riyadh', status: 'Accepted' }];
}
