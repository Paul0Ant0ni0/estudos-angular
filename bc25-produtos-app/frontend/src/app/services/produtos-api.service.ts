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

  listarProdutoId(idProduto: number){
    // http://localhost:3000/produtos/idProduto
    return this.http.get<Produto>(`${this.base_URL}/${idProduto}`)// fazendo a requisição para recuperar o produto por id
  }

  deletarProduto(idProduto: number){
    return this.http.delete<Produto>(`${this.base_URL}/${idProduto}`)
  }

  salvarProduto(produto: Produto){

    const prod = JSON.stringify(produto)

    return this.http.post<Produto>(`${this.base_URL}`,`${prod}`)
  }
}
