import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  private readonly base_URL = 'http://localhost:3000/produtos'

  constructor(
    private http: HttpClient
  ) { }

  // Listar informações -> GET

  listarProdutos(){

    return this.http.get<Produto[]>(this.base_URL)
  }
}
