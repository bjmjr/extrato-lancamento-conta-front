import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContaExtratoModule } from './lista-conta-extrato/lista-conta-extrato-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListaContaExtratoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
