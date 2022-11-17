import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PontosVendas } from '../models/pontos';

@Injectable({
  providedIn: 'root'
})
export class ApiPontosVendasService {

  private readonly baseURL: string = 'http://localhost:3000/pontosdevendas'

  constructor(
    private http: HttpClient
  ) { }


  public listarPontos(): Observable<PontosVendas[]>{

    return this.http.get<PontosVendas[]>(this.baseURL)
  }

  public salvarPonto(pontoVenda: PontosVendas):Observable<PontosVendas>{
    return this.http.post<PontosVendas>(this.baseURL, pontoVenda)
  }

  deletarPontos(idPonto: number){
    return this.http.delete<void>(`${this.baseURL}/${idPonto}`)
  }
}

