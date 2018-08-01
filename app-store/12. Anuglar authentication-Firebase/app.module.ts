import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule   } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { ServerService } from './server.service';
import { HeaderComponent } from './header/header.component'

import { AuthGuard } from './auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, SigninComponent, SignupComponent, HomeComponent, HeaderComponent, WelcomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, ServerService, AuthGuard]
})
export class AppModule { }
