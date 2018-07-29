import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() {}
//we will not configure our form in the tempalate instead we will do it here in our login and we will synchorize with html using [formGroup]="signupForm" and  formControlName="string"

//validation like require will not work as we are not working with template driven approach. in reactive approach we will do it in the next parameter of FormContorl() it takes more than one arguments

  ngOnInit() {
    this.signupForm = new FormGroup({
      //contorls are the key value pair in the object we passed tot the overall FormGroup. we are using 'string' so during minification our this property name should be be kept.

      //We are just passing the reference of a static built in required method aviable by validator to this method so we are not using required() like this.  Anuglar will execute this method when input of this form changes. So it should have reference of what it should execute at this point of time. we can also pass array of validator

      //having FormGroup inside a FormGroup to keep similar input which takes javascript object, nested forms and also update synchronization in the html form using FormGroupName="userData"
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,  [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male')
    });
  }
  onSubmit() {
  console.log(this.signupForm);
  }
}
