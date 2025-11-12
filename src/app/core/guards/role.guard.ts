import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService, Role } from './services/auth.service';

export const RoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data?.['role'] as Role | undefined;
  const user = auth.me();

  // logged in and either role matches or no specific role required
  if (user && (!requiredRole || user.role === requiredRole)) return true;

  // logged in but wrong role -> send to their correct area
  if (user?.role) return router.createUrlTree(['/', user.role]);

  // not logged in -> login
  return router.createUrlTree(['/login']);
};
