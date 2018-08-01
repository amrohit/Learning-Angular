import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response =>{
         console.log(response);
         firebase.auth().currentUser.getIdToken()
         .then(
           (token: string) => this.token = token
         )
         this.getToken();
         this.router.navigate(['/home']);
        

      }
      )
      .catch(
      error => console.log(error)
      );
 }

  getToken() {
     firebase.auth().currentUser.getIdToken() 
    .then(
      (token: string) => {
        this.token = token;
      }
      )
      console.log('This is toke');
      console.log(this.token);
        return this.token;
    // this is async activity to check if the token is valid or expired. if expired new token will be issued.
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
      firebase.auth().signOut();
      this.token = null;
      this.router.navigate(['/']);
  }
}