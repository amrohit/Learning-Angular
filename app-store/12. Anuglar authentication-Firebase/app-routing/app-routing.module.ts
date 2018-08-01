import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '.././app.component';
import { HelloComponent } from '.././hello.component';
import { SigninComponent } from '.././signin/signin.component';
import { SignupComponent } from '.././signup/signup.component';
import { HomeComponent } from '.././home/home.component';

import { AuthGuard } from '.././auth-guard.service';
import { WelcomeComponent } from '.././welcome/welcome.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
   {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
]

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
 exports: [RouterModule]
})
export class AppRoutingModule { }