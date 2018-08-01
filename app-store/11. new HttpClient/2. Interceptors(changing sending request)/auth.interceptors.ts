import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable() //missing @-> cannot resolve auth promise
export class AuthInterceptors implements HttpInterceptor {

constructor(private authService: AuthService) {}
//it returns observable(genric type) give back HttpEvent(generic type of type Send, UploadProgress, any Event)  
//
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  console.log(req);
//    const copiedReq = req.clone({headers: req.headers.set('auth', '')}); 
  const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())}); //**
  return next.handle(copiedReq); //with this we send it the copied request to handle 
  // return next.handle(req);
   //we can retry a  request it will be sent through the  interceptors multiple times and it will break the app so better way si to clone which gives exact copy of  incomding request and prvent not changing accidently incoming request
//**we can take copied request but could not add it here. its blocked and also true for clone. but  
//clone can be configured differently , there we can update our request

 // return null;{errors.ts:35 ERROR TypeError: You provided 'null' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.}

  //pass req got to it. let the request continue its journey
}

}

//dont forget to mention in under module provider as angular injects this.