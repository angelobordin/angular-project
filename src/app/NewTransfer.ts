import { Component } from "@angular/core";

@Component({
    selector: 'newTransfer',
    templateUrl: './html/newTransfer.html',
    styleUrls: ['./scss/newTransfer.scss']
})

export class newTransfer {
    
    transfer() {
        console.log("Realizando Transferência...")
    }
}