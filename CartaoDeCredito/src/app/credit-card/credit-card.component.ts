import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
/**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */
  
  @Input()
  dadosCartao: CartaoDeCredito = {
    ano: '2040',
    mes: '06',
    cvc: '123',
    nome: 'Mc Daleste',
    numero: '1234 5678 5865 9250'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
