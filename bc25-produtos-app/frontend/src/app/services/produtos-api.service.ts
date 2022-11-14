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

  criarProduto(prod: Produto){ // prod possui as informações do produto que será salvo

    //http://localhost:3000/produtos
    return this.http.post<Produto>(this.base_URL, prod) // O método post irá retornar um Porduto com o id
  }

  deletarPorId(id: number){
      //http://localhost:3000/produtos/id

    return this.http.delete<void>(`${this.base_URL}/${id}`)
  }
}
