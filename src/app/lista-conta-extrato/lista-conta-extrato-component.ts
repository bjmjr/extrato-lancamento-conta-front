import { Component } from '@angular/core';
import { ListaContaExtratoService } from './lista-conta-extrato-service';
import { ListaContaExtrato } from './lista-conta-extrato';

@Component({
    selector : "extratos-conta",
    templateUrl : "lista-conta-extrato-component.html"
})
export class ListaContaExtratoComponent{

    extratos : ListaContaExtrato[] = [];

    constructor ( private service : ListaContaExtratoService ){}

    ngOnInit() {
        this.service.listFromUser().subscribe(retorno => this.extratos = retorno);
    }

}