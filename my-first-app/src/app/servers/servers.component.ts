import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: `<div class="app-server"></div>
  // <div class="app-server"></div>`,
  templateUrl:'./servers.component.html'
})
export class ServersComponent {

  allowAddServer = false;

  addServerStatus = 'No server added';

  serverName;

  serverCreated = false;

  servers = ['TestServer1', 'TestServer2']

  constructor(){
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.addServerStatus = "server " + this.serverName;
  }

  onUpdate(event: any){
    console.log(event)
    this.serverName = event.target.value;
  }

}
