import { ServerResolver } from './servers/server/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';

import { NgModule } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";

import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-guard.service';


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }]
  }, //also add AuthService and AuthGuard in the providers[] of aap moudle ts
  {
    path: "servers",
    //  canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ":id/edit", component: EditServerComponent,
        canDeactivate: [CanDeactivateGaurd] }
    ]
  },
  // { path: "not-found", component: PageNotFoundComponent },
  // {path: 'something', redirectTo: '/not-found'}
  //should be placed below not top or else every click will be redirecto not-found
  { path: "not-found", component: ErrorPageComponent, data: {message: 'Page not Found!'}}, //passing static data to a route using data property data : {message: 'message name'}
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true }) //Registering our routes so angular knows it
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
