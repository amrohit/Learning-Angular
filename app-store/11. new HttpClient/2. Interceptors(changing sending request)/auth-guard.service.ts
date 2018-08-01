import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// @Injectable(); if placed colon ->  Declaration expected.
@Injectable() //<- if missing  = Can't resolve all parameters for AuthGuard: (?).
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated();
  }
}
