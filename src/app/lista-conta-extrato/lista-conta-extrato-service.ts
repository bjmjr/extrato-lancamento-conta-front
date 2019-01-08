import { Injectable } from '@angular/core';
import { ListaContaExtrato } from './lista-conta-extrato';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


const API = 'http://localhost:8080/lancamentoContaLegado';

@Injectable({providedIn:'root'})
export class ListaContaExtratoService{
    
    constructor(private http : HttpClient){}

    listFromUser() : Observable<ListaContaExtrato[]>{
        return this.http.get<ListaContaExtrato[]>(`${API}`);
    }

}