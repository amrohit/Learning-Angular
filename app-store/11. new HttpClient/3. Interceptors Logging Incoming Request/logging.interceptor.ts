import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import {  tap } from 'rxjs/operators'; //do() renamed with tap() and we have to use pipe also
export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req) 
      // .do(
      //   event => {
      //     console.log('Logging interceptor ',  event);
      //   }
      // )
      .pipe(
        tap(
          event => console.log('Logging interceptor', event)
        )
      )
  }
}