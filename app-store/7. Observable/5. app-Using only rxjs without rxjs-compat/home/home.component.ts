import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from "rxjs";
//import "rxjs/Rx"; //for unlocking observable operator
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  customObsSubscription2: Subscription;
//http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html

  constructor() { }

  ngOnInit() {

    //Creating simple observer
    //since we are not using rxjs-compat we have to tweak use of map, here we will apply pipe and we will do with any operator we will use (pipe allows us to pipe multiple opertaor) import interval from rxjs and omit Observable
    const myNumbers = interval(1000)
    .pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => console.log(number)
    );

    //Creating our own observable
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next("first package"), 2000);

      setTimeout(() => observer.next("second package"), 4000);

      setTimeout(() => observer.error("this does not work"), 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },

      (error: string) => {
        console.log(error);
      },

      () => {
        console.log("Completed");
      }
    ); /* output:
  first package second packag this does not work */


    const myObservable2 = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next("first package"), 2000);

      setTimeout(() => observer.next("second package"), 4000);

      setTimeout(() => observer.complete(), 6000);

      setTimeout(() => observer.next("third package"), 8000);
    });

    this.customObsSubscription2 = myObservable2.subscribe(
      (data: string) => {
        console.log(data);
      },

      (error: string) => {
        console.log(error);
      },

      () => {
        console.log("Completed");
      }
    ); /* output:
  first package second packag completed (here we dont get 3rd package since its completed)*/

    //we have to unsubscribe this observable since it will always emit data even we change our component and component getting destoryed in background and this result in memory leak

  }

  //destorying subscription ( Cleaning observables )
  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
    this.customObsSubscription2.unsubscribe();
  }

}
