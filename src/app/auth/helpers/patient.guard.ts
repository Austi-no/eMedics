import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {
  constructor(private router: Router, private sessionService: SessionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.sessionService.getToken();
    var roles = this.sessionService.getUserRole();

    var patientRole = roles?.find(x => x.name.toLowerCase().includes('patient'));

    if (token && patientRole?.name?.toLowerCase().includes('patient')) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["login"]);
    return false;
  }

}
