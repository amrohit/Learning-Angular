import { ActivatedRoute, Params, Router, Data } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    /*
    //by adding + infront of var we can convert string to number
    const id = +this.route.snapshot.params["id"]; // '2' to 2
    this.server = this.serversService.getServer(id);
    console.log(this.server);
    //now to react changes after, use params and subscribe it
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
      console.log(this.server);
    });

    */
    //now using resovler instead of above method ( it makes even easy with async tasks )
    //here we can listen to any changes and we are setting a observable because the server can chagne while we are already on the page so we used above router Params(imported from router) to get dynamic data here we need to import Data from angualr/router
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      )

  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    //queryParamsHandling takes a string as value as merge or preserve to keep old one or merge with new one
  }

}
