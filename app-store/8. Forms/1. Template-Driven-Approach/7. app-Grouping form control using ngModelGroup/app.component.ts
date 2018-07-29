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

  suggestUserName() {
    const suggestedName = "Superuser";
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
