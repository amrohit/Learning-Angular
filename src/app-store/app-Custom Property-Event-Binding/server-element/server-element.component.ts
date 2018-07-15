import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //by default all the properties are accessbile only under its own component
  //we import and add decorator -> @input(),
  //so we are exposing this property to the world
  //any parent / component hosting or implementing  our server component through the selector can bind the property in that component
  //we can assign the alias to access with different name of property outside
 @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
