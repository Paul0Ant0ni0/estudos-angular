import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  nomeCartao: String = 'Clara Mendonça'
  numeroCartao: String = '000.000.000.000'

  mm: String = '08'
  aa: String = '26'
  cvc: String = '000'
  nomeDigitado: String = ''

  img = ''

  constructor() { }

  alterarImg(){
    
    if(this.numeroCartao.startsWith('0')){
       this.img = "../../assets/img/mastercard.svg"
    }else if(this.numeroCartao.startsWith('4')){
      this.img = "../../assets/img/visa.svg"
    }else if(this.numeroCartao.startsWith('3')){
      this.img = "../../assets/img/elo.svg"
    }

  }

  limparCarmpos(){
    this.nomeCartao = ''
    this.numeroCartao = ''
    this.aa = ''
    this.mm = ''
    this.cvc = ''
    
  }

  trocarNome(){
    this.nomeCartao = this.nomeDigitado
  }
  
  ngOnInit(): void {
  }

}
