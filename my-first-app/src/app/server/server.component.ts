import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  template: `<p>{{'Server'}} with Id {{serverId}} is {{getStatus()}} </p>`,
  styles: [`
    p {
      color: green;
    }
  `]
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = "off";

  getStatus(){
    return this.serverStatus;
  }

}
