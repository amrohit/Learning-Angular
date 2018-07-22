import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute , Params} from "@angular/router";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.snapshot.params['id']);

    //we dont need to unsubscribe observalbe for these two below , angular will handle it like params(this.route.params) in user.compoenent.ts
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
  }
}
