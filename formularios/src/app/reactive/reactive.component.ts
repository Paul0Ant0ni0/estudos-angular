import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive Formes possui estrutura 
   * para representar o formulário dentro do Typescript
   */
  /**
   * FormControl representa um elemento do seu formulário
   */

  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')


  /**
   * FormGroup é uma estrutura do Reactive Forms
   * que permite agruparmos forms controls dentro
   * dela, para que o acesso aos valores seja mais
   * simples
   **/

  /** 
  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl(''),
    endereco: new FormGroup({
      cep: new FormControl(''),
      rua: new FormControl(''),
      complemento: new FormControl(''),
      numero: new FormControl('')
    })
  })
  **/
 /**
  * FormArray -> É utilizado para armazenar form controls, forms groups ou 
  * outros forms array dentro de um array
  * 
  * O FormArray precisa estar dentro de um FormGroup
  */

  dadosForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]], // [''] = new FromControl('')
    email: ['', [Validators.required, Validators.email]],
    senha: [''],
    endereco: this.fb.group({
      cep: [''],
      rua: [''],
      complemento: [''],
      numero: ['']
    }),
    telefones: this.fb.array([
      [''] // Pode utilizar o new FormControl
    ])
  })

  /**
   * Transformar o Abstract Control -> Form Array
   */
  tels = this.dadosForm.get('telefones') as FormArray // Recuperou o campo e transformou em formArray, está pégando a referencia do campo dadosForm.telefones

  /**
   * Form Builder -> Objeto que permite criar FormControls, FormGrups ou FormArrays com uma sitaxe menor
   */
  constructor(
    private fb: FormBuilder //`r Injeção de dependencia 

    
  ) { }

  ngOnInit(): void {
  }

  enviar() {

    /**
     * A propriedade 'value' do FormControl
     * possui o valor que foi digitado dentro
     * do campo do formulário
     */

    
    console.log(this.dadosForm.value)
  }

  adicionarCampoDeTelefone(){
    this.tels.push(new FormControl('')) // Adicionamos no array novo formControls no array
  }

  deletarCampoDeTelefone(i: number){
      this.tels.removeAt(i)
    
    
  }
}
