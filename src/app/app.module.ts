import { RouteBaseModule } from './RouteBaseModule';
import { NewTransferComponent } from './NewTransfer';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './Extrato';
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NewTransferComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouteBaseModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
