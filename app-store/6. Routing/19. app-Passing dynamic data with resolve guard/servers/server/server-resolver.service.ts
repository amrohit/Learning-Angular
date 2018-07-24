import { ServersService } from './../servers.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {  Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

//defining interface and outsourcing the own file
export interface Server {

  id: number;
  name: string;
  status: string;

}
@Injectable()

//This resolver will give us the data in the advance before loading the route
//also add it app module providers and atlast routing  mdoule with resolve:  {server: ServerResolver}
export class ServerResolver implements Resolve<Server> {

  constructor(private serversService: ServersService ) {}
  //this below resovle method will be called by angular while the linked route is loaded and will give back in resolve: {server: recevied data via resolver}
  resolve(route: ActivatedRouteSnapshot, status: RouterStateSnapshot) : Observable<Server> | Promise<Server> | Server
  {
  return this.serversService.getServer(+route.params['id']);


  }

}
