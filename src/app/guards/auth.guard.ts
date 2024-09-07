import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import {AuthService} from "../services/AuthService";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.GetUserRole().pipe(
    map(role => {
      const isLoggedIn = !!role;

      if (isLoggedIn && (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register')) {
        if (role === "ROLE_USER") {
          router.navigate(['/']);
        }
        else if (role === "ROLE_ADMIN") {
          router.navigate(['/admin']);
        }
        return false;
      }

      const requiredRole = route.data['role'] as string;
      if (requiredRole && role !== requiredRole) {
        router.navigate(['/login']);
        return false;
      }

      return true;
    })
  );
};
