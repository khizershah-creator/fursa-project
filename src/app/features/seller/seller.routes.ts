import { Routes } from '@angular/router';

export const SELLER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shell/seller-shell.component').then(m => m.SellerShellComponent),
  },
];
