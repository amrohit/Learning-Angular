import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer1', content: 'This is a simple test server'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    console.log(blueprintData);
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst() {
this.serverElements[0].name = "Changed!";
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
