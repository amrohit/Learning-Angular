import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    //by adding + infront of var we can convert string to number
    const id = +this.route.snapshot.params['id']; // '2' to 2
    this.server = this.serversService.getServer(id);
    console.log(this.server);
    //now to react changes after, use params and subscribe it
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
        console.log(this.server);
      }
    );
  }

}
