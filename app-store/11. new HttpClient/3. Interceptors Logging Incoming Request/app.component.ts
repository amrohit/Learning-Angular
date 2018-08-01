import { Component, OnInit } from '@angular/core';

//install firebase packge first
import * as firebase from 'firebase/app';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyA97Jq_B1cFm4b0JIz8yPZSURyfMm0HrE8",
        authDomain: "ng-http-b3515.firebaseapp.com",
      });
    }

  }
}
