import { Component } from '@angular/core';

// @Component -> Decorator que precisa importar, informando que a classe terpa as configurações do componente
@Component({
  selector: 'app-header', //Nome para o componente quye irá ser refenciado no html
  templateUrl: './header.component.html', // Modelo (componente) HTML que irá ser renderizado
  styleUrls: ['./header.component.css'] // Lista de arquivos css, que irá estilizar o componente
})
export class HeaderComponent {

  constructor() { }


}
