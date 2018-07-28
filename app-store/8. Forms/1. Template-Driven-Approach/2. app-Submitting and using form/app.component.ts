import { Component, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  //when #f
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
  }
}
