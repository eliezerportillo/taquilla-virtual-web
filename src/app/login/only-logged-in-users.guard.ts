import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(
    private auth: Auth,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

    if (this.auth.currentUser) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}