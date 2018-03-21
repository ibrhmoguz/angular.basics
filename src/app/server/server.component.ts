import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    status = "offline";
    operatingSystem = "Windows";

    getServerOS() {
        return this.operatingSystem;
    }
}