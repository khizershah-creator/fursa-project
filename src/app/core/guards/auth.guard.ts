// src/app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // ✅ correct relative path

export const AuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // allow if session exists
  if (auth.me()) return true;

  // return a UrlTree to redirect (no side-effect navigate in guards)
  return router.createUrlTree(['/login']);
};
