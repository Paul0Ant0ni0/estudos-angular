import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //Essa propriedade habilita para receber valores externos no componente
  @Input()
  banner: string = "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"

  @Input()
  titulo: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

  @Input()
  userName: string = "Larrisa Ribeiro"

  @Input()
  userFoto: string = "https://images.unsplash.com/photo-1598155523122-3842334d2c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"


  @Input()
  corBtn: string = "#E7AC24"
  constructor() { }

  ngOnInit(): void {
  }

}
