import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService, Role } from './services/auth.service'; // ✅ fixed import path

export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data['role'] as Role;
  const user = auth.me();

  // ✅ user exists and has correct role → allow
  if (user && user.role === requiredRole) return true;

  // ✅ user logged in but wrong role → redirect to their correct area
  if (user?.role) return router.createUrlTree(['/' + user.role]);

  // ❌ not logged in → redirect to login
  return router.createUrlTree(['/login']);
};
