import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  @ViewChild("f") sigunForm: NgForm;

  defaultQuestion: string = "pet";

  answer: string = '';

  genders: string[] = ["male", "female"];
  defaultGender = this.genders[0];

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.sigunForm.setValue({
    // userData: {
    //   username: suggestedName,
    //   email: ''
    // },
    // secret: 'pet',
    // questionAns: '',
    // gender: 'male'
    // }); this will replace the entered data
    this.sigunForm.form.patchValue({
    userData: {
      username: suggestedName
    }
    }); // will not overwrite any data
    //also available this.sigunForm.form.setValue
  }


  //when #f (ElementRef is not correct, it is type of HTMLFormElement)
  // onSubmit(form: ElementRef) {
  //   //console.log('Submitted!' + form);
  //   console.log("Submitted!");
  //   console.log(form);
  // }

  //when #f="ngForm" to get access to form
  onSubmit(form: NgForm) {
    //console.log('Submitted!' + form);
    console.log("Submitted!");
    console.log(form);
    console.log(this.sigunForm);
  }
}
