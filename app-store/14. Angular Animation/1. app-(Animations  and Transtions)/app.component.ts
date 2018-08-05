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
      //if we want to use same timing for above transition then use this
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
      transition('shrunken <=> *', animate(500)) //wildcard (means any state)
      //if we want to use same timing for above transition then use this
      //transition('normal <=> highlighted', animate(300)),
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
    this.wildState = 'shrunken';
  }
}
