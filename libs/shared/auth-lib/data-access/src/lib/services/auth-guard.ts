import { inject } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { LocalStorageJwtService } from './local-storage-jwt.service';

export const authGuard = (): Observable<boolean | UrlTree> => {
  const storage = inject(LocalStorageJwtService);
  const router = inject(Router);
  // const state = inject(RouterStateSnapshot)

  return storage.getItem().pipe(
    map((token) => {
      if (!token) {
        // router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
        return router.parseUrl('/login');
      }
      return true;
    }),
    take(1),
  );
};
