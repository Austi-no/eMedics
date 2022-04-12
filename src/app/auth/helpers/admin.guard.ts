import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private sessionService: SessionService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.sessionService.getToken();
    var roles = this.sessionService.getUserRole();

    var adminRole = roles?.find(x => x.name.toLowerCase().includes('admin'));

    if (token && adminRole?.name?.toLowerCase().includes('admin')) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["login"]);
    return false;
  }

}
