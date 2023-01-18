import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transferencia } from "../models/Transferencia";

@Injectable({
    providedIn: 'root'
})
export class TransferenciaService {
    private transferenciaList: any[];
    private url = 'http://localhost:3000/transferencias';

    constructor(private httpClient: HttpClient) {
        this.transferenciaList = [];
    }

    // get transferencias() {
    //     return this.transferenciaList;
    // };

    getTransferenciasList(): Observable<Transferencia[]> {
        const result = this.httpClient.get<Transferencia[]>(this.url);
        return result;
    };

    addTransferencia(transferencia: any): Observable<Transferencia> {
        transferencia.data = new Date();
        return this.httpClient.post<Transferencia>(this.url, transferencia);
    }
}