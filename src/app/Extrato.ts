import { TransferenciaService } from './service/TransferenciaService';
import { Component, OnInit, Input } from "@angular/core";
import { Transferencia } from './models/Transferencia';

@Component({
    selector: 'extrato',
    templateUrl: './html/extrato.html',
    styleUrls: ['./scss/extrato.scss']
})
export class ExtratoComponent implements OnInit {
    dadosTransferencias: any[] = [];

    constructor(private service: TransferenciaService) {}

    ngOnInit(): void {
        this.service.getTransferenciasList().subscribe((list: Transferencia[]) => {
            console.table(list);
            this.dadosTransferencias = list;
        });
    }
}
