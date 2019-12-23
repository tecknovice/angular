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

  constructor(){
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.addServerStatus = "server " + this.serverName;
  }

  onUpdate(event: any){
    console.log(event)
    this.serverName = event.target.value;
  }

}
