import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  // Injetar um objeto que permite o roteamento dentro da página de forma automática
  constructor(
    private produtosService: ProdutosApiService,
    private snackbar: MatSnackBar, // Compoenente de mensagens do Material
    private router: Router // Objeto que permite fazer o rotemanto dentro do arquivo Typescript

    ) { }


  produtoForm: FormGroup = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    foto: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    
  }

  salvarProduto(){
    // Recuperar os dados do formulário
    const produto: Produto = this.produtoForm.value // Value retorna um objeto com as informações do formGroup

    this.produtosService.criarProduto(produto).subscribe(
      (prod) => {
        console.log(prod)
        this.snackbar.open(`Produto salvo com sucesso`, 'X', {
          duration: 5000, // tempo de duração que o snackbar aparecerá
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
        this.router.navigateByUrl('/produtos')// redirecionado o usuário para a página produto
         // Desafio: substituir o alert pelo ssnackbar do material
         // Desafio: salvar o produto, redirecioná-lo para a página de listagem de produtos automáticamente
      }
    )
  }

}
