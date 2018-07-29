import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Kumar", "Babu"];

  constructor() { }
  //we will not configure our form in the tempalate instead we will do it here in our login and we will synchorize with html using [formGroup]="signupForm" and  formControlName="string"

  //validation like require will not work as we are not working with template driven approach. in reactive approach we will do it in the next parameter of FormContorl() it takes more than one arguments

  ngOnInit() {
    this.signupForm = new FormGroup({
      //contorls are the key value pair in the object we passed tot the overall FormGroup. we are using 'string' so during minification our this property name should be be kept.

      //We are just passing the reference of a static built in required method aviable by validator to this method so we are not using required() like this.  Anuglar will execute this method when input of this form changes. So it should have reference of what it should execute at this point of time. we can also pass array of validator

      //having FormGroup inside a FormGroup to keep similar input which takes javascript object, nested forms and also update synchronization in the html form using FormGroupName="userData"
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        )
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });

    //we have two  form state we can listen to or can track
    //we have two observable we can listen too(valueChanges)
    //everykey stroke every value will be printed
    this.signupForm.valueChanges.subscribe(value => console.log(value));

    //status change PENDING INVALID VALID
    this.signupForm.statusChanges.subscribe(status => console.log(status));

    //to update entire control
    this.signupForm.setValue({
      'userData': {
        'username': 'Rohit',
        'email': 'xyz@xyz.com'
      },
      'gender': 'male',
      'hobbies': []
    });
//to set value in hobbies array we can do ['hobby1', 'hobby2'] istead
(<FormArray>this.signupForm.get('hobbies')).controls.push(new FormControl('Football'));

      //or
      this.setHobbies(['cricket', 'chess']);

    //to update sepecific
    this.signupForm.patchValue({
      'userData': {
        'username': 'Kumar'
      }
    });
  }

  private setHobbies(hobbies) {
    for (const hobby of hobbies) {
      (<FormArray>this.signupForm.get('hobbies')).controls.push(new FormControl(hobby, Validators.required));
    }
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const contorl = new FormControl(null, Validators.required);
    //casting as FormArray type
    (<FormArray>this.signupForm.get("hobbies")).push(contorl);
    //after this code synchorize this controller with html using formArrayName="" on html form
  }

  //A validator is just a function which get executed by angular when it checks the validity of form control and it checks whenever we change the form control
  //should get type control(in this case FormControl) and also need return something javascript object {nameIsForbidden: true}
  //this is just typescript syntax to say that here key s should be interpreted as string [s: string]
  //if you pass this validator directly to the validator array of control we wil get error "TypeError: Cannot read property 'forbiddenUsernames' of undefined". it means this forbiddenNames function is not getting called by our inside class, angular will call it when it checks the validity so at this point of time (this.forbiddenUsernames) this will not refer to our class. to fix this we need to bind this at the validtor array->this.forbiddenNames.bind(this) so it will come to know what this exactly means. simple concept in javascript

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    // if (this.forbiddenUsernames.indexOf(control.value)) { -1 interpeted true
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    //it should be pass nothing or null, return null incase of validation is successfull
    return null;
  }

  //Asnyc validator (ng-pending for 1500 ng-valid/ng-invalid)
  //we will not add it in normal array of validator, but another one as reserve for async validtor and jsut pass as reference no need to bind even as not using this in below function
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          //validation fails
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
