import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//Here we have an interface( which is a contract imported by some other class which forces this class to provide some logic) and this interface required one thing from the component which implements it, That component should have canDeactivate method
//The interface is not absolutely required. It just makes the guard more generic.

export interface CanComponentDeactivate {

   //this interface should have a below(canDeactivate) method defined below a simply its type
  //since this is an interface, it wont contain logic, it will only contain information how it should look like
  //This method should not take any arguments but at the end it should only return Observable which will resolve to boolean at the end or promise which will resolve to boolen at the end or just a boolean. This guard share the same structure as CanActivate we did for servers

  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

  }

//not above is just a interface and alone will not do the trick
//Let come to the meet of class, we can say the service itself. so we can name it canDeactivateguard

//CanDeactivate is simply an interface provided by angualar router(so needs to be imported above)
//since it is generic type and it will wrap our own interface CanComponentDeactivate
//So it will force some component or class to implement the CanDeactivate Method
//This setup will make sure that we later can easily connect a component to our CanDeactivate guard here
//Now this guard should have a canDeactivate method which will be called by our angualr router once we try to leave a route.

  export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate> {

    //There this method will have an argument as component on which we are currently on and this component needs to be of type CanComponentDeactivate which means it need to be a component which has this(CanComponentDeactivate) interface you're implemented. Therefore a component which has canDeactive method -> weh have used this method in a component editserver.
  //nextState will be called at the end when we leave the route, nextState is an option argument though, it will have a RouterStateSnapshot

    canDeactivate(component: CanComponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        /*
we call canDeactivate() method on the component we are currently on and this is why i need to implement this interface in this component why i created this interface in the first place because now the angular router can execute canDeactivate in our service and can rely on the fact  that the component we're currently on has to canDeactivate method too. because this is what we actually implment the logic checking whether we are allowed to leave or not because we need this connection between our guard and component.
so this why we can safely call canDeactivate here and now that information we can go back to our app routing module and there on the edit page{path: 'id/edit, compoentnt: EditServerComponent, canDeactive} and we want to add those guard
*/

        return component.canDeactivate();
    }
  }


/*
export class UserEditGuard implements CanDeactivate<UserEditComponent> {

    canDeactivate(component: UserEditComponent): boolean {
        return !component.done ? confirm('Do you want to leave?') : true;
    }

}
*/
