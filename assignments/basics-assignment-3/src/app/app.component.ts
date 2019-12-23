import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetail = false
  log = []
  onClick(){
    this.showDetail = !this.showDetail
    this.log.push(new Date())
  }
}
