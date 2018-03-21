import { Component } from "@angular/core";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html'
})
export class ClientComponent {
    userName = '';
    isButtonDisabled = true;

    onUserNameReset() {
        this.userName = '';
    }

    onInputChange(event) {
        var inputValue = (<HTMLInputElement>event.target).value;
        //console.log(inputValue);
        if (inputValue == '')
            this.isButtonDisabled = true;
        else
            this.isButtonDisabled = false;
    }
}