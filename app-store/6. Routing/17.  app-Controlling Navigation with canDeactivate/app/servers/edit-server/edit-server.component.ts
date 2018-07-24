import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Component, OnInit } from "@angular/core";
import { ServersService } from "../servers.service";
import { ActivatedRoute , Params, Router} from "@angular/router";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";

  allowEdit = false;
  changesSaved = false;


  constructor(private serversService: ServersService, private route: ActivatedRoute,
  private router: Router) {}

  ngOnInit() {

     //first approach to access queryParams and fragment (only run or update at time of compoenent is created) Changing the query parameter from the page you are currently On will not work.

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.snapshot.params['id']);

    //we dont need to unsubscribe observalbe for these two below , angular will handle it like params(this.route.params) in user.compoenent.ts

       //second appraoch to the above one with most reactive approach
    //Here just like we have ActivatedRoute's property( Params to access params but also have queryParams to access query paramas) which are also observable and need to subscribe it ?allowEdit=1

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] == 1 ? true : false;
        console.log(this.allowEdit);
      }
    );
    this.route.fragment.subscribe();
    //with + operator we convert str to int(to avoid error unknow property)
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {

    if(!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to save the changes?');
    } else {
      return true;
    }

  }

}
