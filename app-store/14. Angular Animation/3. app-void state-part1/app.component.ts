import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
//after angular 4 these above imports belonged to @angular/core

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          // 'background-color' or backgroundColor (dont mix it one another)
          "background-color": "red",
          transform: "translateX(0)"
        })
      ),
      state(
        "highlighted",
        style({
          "background-color": "blue",
          transform: "translateX(100px)"
        })
      ),

      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
      transition("normal <=> highlighted", animate(300))
    ]),
    trigger("wildState", [
      state(
        "normal",
        style({
          // 'background-color' or backgroundColor (dont mix it one another)
          "background-color": "red",
          transform: "translateX(0) scale(1)"
        })
      ),
      state(
        "highlighted",
        style({
          "background-color": "blue",
          transform: "translateX(100px) scale(1)"
        })
      ),
      state(
        "shrunken",
        style({
          "background-color": "green",
          transform: "translateX(0px) scale(0.5)"
        })
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(800)),
      transition("shrunken <=> *", [
        style({
          "background-color": "orange" //starting phase
        }),
        animate(
          1000,
          style({
            "border-radius": "50px" //middle
          })
        ),
        animate(500) //ending phase transition
      ]) //this array define different phases in transitions
    ]),
    trigger("list1", [
      state(
        "in",
        style({
          opacity: 1,
          "background-color": "red",
          transform: "translateX(0)"
        })
      ),
      transition("void <=> *", [
        style({
          opacity: 0,
          transform: "translateX(-100px)"
        }),
        animate(300)
      ]) //animate not existent to any state
      /*void is reserve state and built in state, a specefic case where an element has not been added yet, we cant use it we overwrite it (it is for the n element which was not added at the begninig )*/
    ])
  ]
})
export class AppComponent {
  state = "normal";
  wildState = "normal";

  list = ["Milk", "Sugar", "Bread"];

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state == "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");

    this.wildState == "normal"
      ? (this.wildState = "highlighted")
      : (this.wildState = "normal");
  }

  onShrink() {
    this.wildState = "shrunken";
  }
}
