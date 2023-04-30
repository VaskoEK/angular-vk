import { Injectable, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {  // megvizsg., h a login megtörtént-e
    if (this.authService.isLoggedIn()) {
      return true;
    }
    else {
      this.authService.increaseErrorCount();
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }

}
