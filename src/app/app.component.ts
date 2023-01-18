import { TransferenciaService } from './service/TransferenciaService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./scss/app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private service: TransferenciaService) {}

  transferir(dadosTransferencias){
    this.service.addTransferencia(dadosTransferencias);
  }
}
