import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CEP } from './interface/ViaCep';
import { ViacepApiService } from './service/viacep-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consultaCep';

  cepForm: FormGroup = this.fb.group({
    cep: ['', [ Validators.required ]]
  })

  cep!: CEP

  constructor(
    private fb: FormBuilder,
    private viacepService: ViacepApiService,
    private snackbar: MatSnackBar
  ){}


  buscar(){

    const cep = this.cepForm.get('cep')?.value

    this.viacepService.buscarCep(cep).subscribe(
      (cep) => {
        this.cep = cep
      },
      (erro) => {
        //HttpErrorResponse
        // precisa saber se o meu erro vem dessa classe
        if(erro instanceof HttpErrorResponse){
            if(erro.status == 404){
              this.snackbar.open(`Cep ${cep} não encontrado :'(`, 'X') // abrindo o snackbar na tela 
            }
        }
      }
    )

  }

  
}
