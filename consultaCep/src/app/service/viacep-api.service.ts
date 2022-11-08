import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CEP } from '../interface/ViaCep';

@Injectable({
  providedIn: 'root'
})
export class ViacepApiService {
  private readonly baseURL: string = 'https://viacep.com.br/ws/'

  constructor(
    private http: HttpClient
  ) { }

  buscarCep(cep: string){

    return this.http.get<CEP>(`${this.baseURL}${cep}/json`)
  }
}
