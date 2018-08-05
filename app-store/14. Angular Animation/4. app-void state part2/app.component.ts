import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { isNgTemplate } from "../../node_modules/@angular/compiler";
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
      ]),
      transition('* <=> void', [
        animate(2000, style({
          'transform': 'translateX(100px)',
          'opacity': '0'
        }))
      ])
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
  onDelete(item) {
    console.log(item);
    this.list.splice(this.list.indexOf(item), 1);
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
