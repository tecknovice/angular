import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import io from "socket.io-client";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  messageForm;
  socket;
  messages: Array<string> = [];
  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      message: ''
    });
  }
  ngOnInit() {
    this.socket = io("http://localhost:3000");
    this.socket.on("message",  (msg) => {
      this.messages.push(msg);
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
  onSubmit(data) {
    this.socket.emit('message', data.message);
    this.messageForm.reset();
  }
}
