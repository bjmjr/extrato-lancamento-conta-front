import { NgModule } from '@angular/core';
import { ListaContaExtratoComponent } from './lista-conta-extrato-component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations : [ ListaContaExtratoComponent ],
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports : [ ListaContaExtratoComponent ]
})
export class ListaContaExtratoModule {}