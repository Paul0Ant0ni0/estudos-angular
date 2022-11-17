import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidades } from '../models/cidades';
import { Estados } from '../models/estados';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeService {

  private readonly baseURL_Estados: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  constructor(
    private http: HttpClient
  ) { }

  public listarEstados(): Observable<Estados[]>{
    
    return this.http.get<Estados[]>(this.baseURL_Estados)
  }

  public listarCidades(idMunicipio: number): Observable<Cidades[]>{
    
    return this.http.get<Cidades[]>(`${this.baseURL_Estados}/${idMunicipio}/municipios`)
  }
}

