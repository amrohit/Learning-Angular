import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppModule: Routes = [

  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(AppModule)],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
