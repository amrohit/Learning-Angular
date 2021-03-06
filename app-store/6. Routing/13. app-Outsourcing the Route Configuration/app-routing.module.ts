import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent , children: [
    { path: ':id/:name', component: UserComponent },
  ]},
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ]},
  { path: 'not-found', component: PageNotFoundComponent},
  // {path: 'something', redirectTo: '/not-found'}
  //should be placed below not top or else every click will be redirecto not-found
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
imports: [
  RouterModule.forRoot(appRoutes) //Registering our routes so angular knows it
],
exports: [RouterModule]
})

export class AppRoutingModule {

}
