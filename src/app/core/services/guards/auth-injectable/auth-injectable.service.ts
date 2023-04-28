import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthInjectableService {
  router = inject(Router);

  constructor(private authService: AuthService) { }  // vagy itt megadom az authService-t, vagy a fn-ön belül injecttel

  isAllowed() {
    const authService = inject(AuthService);
    if (authService.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
  }
}
