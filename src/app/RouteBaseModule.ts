import { NewTransferComponent } from './NewTransfer';
import { ExtratoComponent } from './Extrato';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'extrato', pathMatch: 'full' },
    { path: 'extrato', component: ExtratoComponent },
    { path: 'novaTransferencia', component: NewTransferComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteBaseModule{}