import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { AppState } from "./../app.state";
import { Tutorial } from "./../models/tutorial.model";
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select("tutorial"); //tutorial coming from appmoudle.ts
  }
  //dispatching action
  delTutorial(index) {
this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
  ngOnInit() {}
}
