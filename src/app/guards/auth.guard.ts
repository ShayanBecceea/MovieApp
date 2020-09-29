import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthServiceService, public router: Router) {}

  canActivate():boolean {
    if (localStorage.getItem('token')) {
        return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

  /*

    canActivate(): boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
  }

  */
