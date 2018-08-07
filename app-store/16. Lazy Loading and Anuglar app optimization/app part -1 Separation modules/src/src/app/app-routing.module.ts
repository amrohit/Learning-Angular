import {  NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  
  {path: 'help', component: HelpComponent}
]

@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)

],
exports: [
RouterModule
]
})
export class AppRoutingModule {

}