import { ServerService } from './server.service';
import { Component } from '@angular/core';
import { Response }  from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  appName = this.serverService.getAppName();

  constructor(private serverService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
    .subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log('Error is ' + error);
    }); //lets send the request by subscribing to observable
    //no need to subscribe, angualr will do since its only one request
  }

  onGet() {
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => {

        console.log(servers);
        this.servers = servers;

      },
      (error) => {
        console.log(error);
      }
    )
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
