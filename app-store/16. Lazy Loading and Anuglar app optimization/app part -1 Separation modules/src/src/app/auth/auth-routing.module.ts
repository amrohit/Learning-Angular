import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  {
    path: 'identity', component: AuthComponent,
    children: [
       { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
]

@NgModule({
imports: [
  RouterModule.forChild(authRoutes)
],
exports: [
  RouterModule
]
})

export class AuthRoutingModule {

}