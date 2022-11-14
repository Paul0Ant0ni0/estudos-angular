import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  public formularioFrutas: FormGroup;

  constructor(
    private formBuilder: FormBuilder // Instancia para construir o formulário
  ) { 
    this.formularioFrutas = formBuilder.group({
      nome: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      preco: ['', [Validators.required, Validators.min(0)]]
    })
   }


  public heroi: any = {
    nome: '',
    idade: NaN,
    poder: ''
  }

  public cadastrarFrutas(): void {
    if(this.formularioFrutas.valid){ // validando os dados do formulárop
      alert('Cadastrado!')
    }else {
      alert('Formulário inválido')
    }
  }
}
