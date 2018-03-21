import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  servers = [];
  isDisplayed = 'block';
  clicks = [];
  counter = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'The server is created! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    //console.log(event.target);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onButtonClick() {
    this.clicks.push(this.counter);
    this.counter++;
    this.isDisplayed === 'none' ? this.isDisplayed = 'block' : this.isDisplayed = 'none';
  }

  getBackgroundColor(click) {
    return click >= 5 ? 'blue' : 'white';
  }
}
