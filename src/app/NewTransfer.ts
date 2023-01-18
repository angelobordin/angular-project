import { Transferencia } from './models/Transferencia';
import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from './service/TransferenciaService';
import { Router } from '@angular/router';
@Component({
    selector: 'newTransfer',
    templateUrl: './html/newTransfer.html',
    styleUrls: ['./scss/newTransfer.scss']
})
export class NewTransferComponent {
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    constructor(private service: TransferenciaService, private route: Router) {}

    transfer() {
        console.log("Realizando Nova Transferência...")
        const newTransferencia: Transferencia = { valor: this.valor, destino: this.destino.toString() };
        
        this.service.addTransferencia(newTransferencia).subscribe((result) => {
            console.log(result);
            this.cleanInputs();
            this.route.navigateByUrl('extrato');
        }, (err) => {
            console.error(err);
        });

        this.cleanInputs();
    };

    cleanInputs() {
        this.valor = null;
        this.destino = null;
    }
}
