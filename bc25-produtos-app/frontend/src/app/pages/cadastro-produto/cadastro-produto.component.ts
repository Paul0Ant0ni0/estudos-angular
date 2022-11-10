import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor(
    private rota: ActivatedRoute,
    private produtosService: ProdutosApiService

    ) { }

  produto!: Produto

  produtoForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    foto: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    
  }

  salvarProduto(){
    this.produtosService.salvarProduto(this.produto).subscribe(
      (prod) => {
        this.produtoForm.setValue({
          nome: '',
          descricao: '',
          preco: '',
          foto: ''
        })
      }
    )
  }

}
