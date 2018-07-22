import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

// Can't resolve all parameters for AuthGuard
@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  // canActivate also returns something, it eiter returns observable and these observable then will wrap a boolean, so at the end will resovle true or false value, alternatively this route returns a promise also returning boolean at the end, or it just return boolean. canActive can run both asynchronously returing both observable or promise or synchronously because you can have some guard which runs completely on the client therefore it runs sychronously or you have some codes which takes couple of seconds to finish because you use timeout or you reach out to server so it runs asychronously and both will possible for canActivate

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
    .then(
      (authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);

              }
    })
    // .catch(err => {
    //   console.log(err);
    // });


  }
}
