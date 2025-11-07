import { Routes } from '@angular/router';
import { DebugHelloComponent } from './debug-hello.component';
import { LoginComponent } from './features/authentication/login/login.component';

export const routes: Routes = [
  { path: '', component: DebugHelloComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
