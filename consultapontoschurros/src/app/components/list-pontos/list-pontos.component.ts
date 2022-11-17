import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PontosVendas } from 'src/app/models/pontos';
import { ApiPontosVendasService } from 'src/app/services/api-pontos-vendas.service';

@Component({
  selector: 'app-list-pontos',
  templateUrl: './list-pontos.component.html',
  styleUrls: ['./list-pontos.component.css']
})
export class ListPontosComponent implements OnInit {


  @Input()
  public pontosDeVendas!: PontosVendas[]

  @Input()
  public exibir!: boolean


  constructor(
    private servicePonto: ApiPontosVendasService
  ) { }

  ngOnInit(): void {
    //  this.servicePonto.listarPontos().subscribe((pontos) => {
    //    this.pontosDeVendas = pontos
    //  })
    
    
  }


  

  

}
