import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.modules'
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

import { AppRoutingModule } from './app-routing.module';
import {  SharedMoudle } from './shared/shared.module'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    SharedMoudle
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
