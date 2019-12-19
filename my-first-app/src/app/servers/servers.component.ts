import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: `<div class="app-server"></div>
  // <div class="app-server"></div>`,
  templateUrl:'./servers.component.html'
})
export class ServersComponent {

  allowAddServer = false;

  constructor(){
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }
}
