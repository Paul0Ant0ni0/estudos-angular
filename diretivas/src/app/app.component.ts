import { Component, Output } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';

  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''

  
  produtos: Produto[] = []

  adicionarProduto(evento: any): void {
    /**
     * preventDefault() faz com o comportamento
     * padrão de um elemento HTML seja anulado 
     */

    evento.preventDefault()

    /**
     * stopPropagation() evita com que a emissão
     * do evento afete outros elementos HTML
     */
    evento.stopPropagation()

    this.produtos.push({
      nome: this.nome,
      imagem: this.imagem,
      preco: this.preco,
      estoque: this.estoque,
      descricao: this.descricao,


    })
    

    this.nome = ''
    this.imagem = ''
    this.preco = 0
    this.estoque = 0
    this.descricao = ''

  }


  deletarProduto(p: Produto):void{
    const index = this.produtos.indexOf(p)
    this.produtos.splice(index, 1)
   
  }


}
