import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { HomeComponent } from './core/home/home.component';
import { HelpComponent } from './help/help.component';
// import { AuthModule } from './auth/auth.modules'
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  //dont forget to replace 'identity' with '(blank)' in auth-routing module so it willr replace with # class reference
  { path: 'identity', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'help', component: HelpComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
      //load all the coder codes soon the landing page displayed
    })

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}