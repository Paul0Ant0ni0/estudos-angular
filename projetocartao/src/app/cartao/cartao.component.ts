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
       this.img = "https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
    }else if(this.numeroCartao.startsWith('4')){
      this.img = "https://logospng.org/wp-content/uploads/visa.jpg"
    }else if(this.numeroCartao.startsWith('3')){
      this.img = "https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png"
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
