import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(
    private httpClient: HttpClient
  ) { 
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  add(body: Transferencia) {
    this.hidratar(body);

    return this.httpClient.post<Transferencia>(this.url, body);
  }

  private hidratar (body: Transferencia) {
    body.data = new Date();
  }
}
