import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * StringInterpolation: utilizar valores uqe properiedades
   * possuem para mostra-los para os usuários
   */
  /**
   * PropertyBinding: utilizar valores da propriedade 
   * atribui-los a atributos HTML
   */

  /**
   * Event binding: utilizado para ouvir eventos da DOM
   * dentro do Angular
   */

  /**
   * Two Way Data Binding
   */
  title = 'Angular é muito bom';
  n1: number = 0
  n2: number = 0
  tipoInput: string = 'text'

  somar(x: number, y: number) {

    return x + y
  }

  mudarTipoDoInput():void{
    if(this.tipoInput == 'password'){
      this.tipoInput = 'text'
    }else{
      this.tipoInput = 'password'
    }
  }

}
