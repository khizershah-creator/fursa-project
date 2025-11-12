import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/public/home/home.component').then(m => m.HomeComponent),
  },

  // auth
  {
    path: 'login',
    loadComponent: () =>
      import('./features/authentication/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/authentication/register/register.component').then(m => m.RegisterComponent),
  },

  { path: '**', redirectTo: '' }
];
