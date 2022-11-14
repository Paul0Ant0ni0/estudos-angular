import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  altImg: string = 'https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png'

  produto!: Produto

  produtoNaoEncontrado: boolean = false

  produtoForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    foto: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required])
  })

  constructor(
    private rota: ActivatedRoute, // permite acessar as informações {parâmetros} da rota que está ativa no momento
    private produtosService: ProdutosApiService,
    private snackbar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit(): void { // Executado quando o componente é renderizado
    // paramMap é um metodo que possui acesso a todos os parametros da rota
    // .get() funciona para recuperar o parametro da rota atual
    const idProduto = this.rota.snapshot.paramMap.get('idProduto') as string // convertendo o retorno para string

    this.produtosService.listarProdutoId(parseInt(idProduto)).subscribe(
      (prod) => {
        this.produto = prod
        this.produtoForm.setValue({
          descricao: prod.descricao,
          nome: prod.nome,
          preco: prod.preco,
          foto: prod.foto
        })
      },

      (erro) => {
      
        if (erro instanceof HttpErrorResponse) {
          if (erro.status == 404) {
            // REnderiza a página de erro 404
            this.produtoNaoEncontrado = true
            this.snackbar.open(`Produto não encontrado 😭`, 'X', {
              duration: 2000
            }) // abrindo o snackbar na tela 
          }
        }
      }

    )

  }

  deletar(){
    this.produtosService.deletarPorId(this.produto.id as number).subscribe(
      () => {
        this.snackbar.open(`Produto deletado com sucesso 🥳`, 'X', {
          duration: 2000
        })
        this.router.navigateByUrl('/produtos')
      }
    )
  }

}
