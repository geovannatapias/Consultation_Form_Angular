import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipality, State } from './brasil.models';

@Injectable({
  providedIn: 'root'
})
export class BrazilapiService {
 private baseURl: string = 'https://brasilapi.com.br/api'
  constructor(private http: HttpClient) { }

  listUfs() : Observable<State[]> {
    const path = '/ibge/uf/v1'
    return this.http.get<State[]>(this.baseURl + path);
  }
  listMunicipalities(uf: string) : Observable<Municipality[]> {
    const path = '/ibge/municipios/v1/' + uf
    return this.http.get<Municipality[]>(this.baseURl + path);
  }
}
