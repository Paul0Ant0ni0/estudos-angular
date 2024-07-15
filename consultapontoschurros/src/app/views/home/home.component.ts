import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidades } from 'src/app/models/cidades';
import { Estados } from 'src/app/models/estados';
import { PontosVendas } from 'src/app/models/pontos';
import { ApiIbgeService } from 'src/app/services/api-ibge.service';
import { ApiPontosVendasService } from 'src/app/services/api-pontos-vendas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consultaForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    dataNasc: ['', [Validators.required]],
    linkedinPortifolio: ['', [Validators.required]],
    cargo: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    cidade: ['', [Validators.required]]
  })

  public estados: Estados[] = []
  public cidades: Cidades[] = []


  public pontosDeVendas: PontosVendas[] = []
  public isDisableCidade: boolean = true
  //public exibir: boolean = false

  constructor(private service: ApiIbgeService, private fb: FormBuilder, servicePonto: ApiPontosVendasService) { }

  ngOnInit(): void {
    this.initializeFieldEstado()
    
  }

  public initializeFieldEstado(): void{
    this.service.listarEstados().subscribe((estados) => {
      this.estados = estados

    })
  }

  public listarCidade(): void{
    const valor = this.consultaForm.get('estado')?.value
    this.service.listarCidades(valor).subscribe((cidades)=> {
      this.cidades = cidades
      this.isDisableCidade = false
    })
  }



  public addPonto(): void{
    this.pontosDeVendas.push(this.consultaForm.value)
    //this.exibir = true

    // const ponto = this.consultaForm.value
    // this.servicePonto.salvarPonto(ponto).subscribe((pontos) => {
    //   this.pontosDeVendas = pontos
    // })

    console.log(this.pontosDeVendas)
  
  }


}
