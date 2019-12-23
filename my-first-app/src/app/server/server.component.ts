import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-server',
  template: `<p [ngStyle]="{'background-color' : getColor()}"
  [ngClass]="{online:serverStatus=='on'}">
  {{'Server'}} with Id {{serverId}} is {{getStatus()}} 
  </p>`,
  styles: [`
    p {
      color: green;
    }
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string;

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'on' : 'off';
  }

  getStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'on' ? 'green' :'red';
  }
}
