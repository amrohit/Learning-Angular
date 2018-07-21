import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  //unlike routerLink navigate does not know on which router it sits
  //now 2nd argument to naviage method which is javscript object {relativeTo: currentRoute}
  //it will resovle all the relative path here
  onReload() {
    //not working
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
