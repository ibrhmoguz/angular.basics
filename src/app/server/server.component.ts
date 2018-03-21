import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    status = "offline";
    operatingSystem = "Windows";

    constructor() {
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerOS() {
        return this.operatingSystem;
    }

    getBackgroundColor() {
        return this.status == 'online' ? 'green' : 'red';
    }

    getForeColor(){
        return this.status == 'online' ? 'white' : 'black';
    }
}