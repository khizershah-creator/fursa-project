import { Routes } from '@angular/router';

export const INVESTOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shell/investor-shell.component').then(m => m.InvestorShellComponent),
  },
];
