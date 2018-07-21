import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    //Params is here observable (easily allow to handle async tasks)
 this.paramsSubscription =  this.route.params
    .subscribe( //we will get updated params as an argument
      (params: Params) => {
  //params always be an object like snapshot which will holds the parameters we defined in the route as a properties
  //so function body of this arrow function will be executed whenever param changes
  //This will update our user object whenever parameter change
  //thats why we have callback we passed an anonymous function in the subscribe method
  //this code will not executed when ngOnit runs through. This subscription is will be set up. but only if parameter changes we will exchange our user object
      this.user.id = params['id'];
      this.user.name = params['name'];

      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }


}

//The subscription will not destroyed when component gets destroyed
//It stays in memory
