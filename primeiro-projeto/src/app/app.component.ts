import { Component } from '@angular/core';

/**
 * templateUrl serve para informar ao componente
 * qual arquivo html ele deve mostrar quando o mesmo ser utilizado
 * 
 * 'styleUrls' serve para informar os caminhos dos arquivos css
 * que o componente utilizará
 * 
 * 'selector' serve para informar como aquele componente poderá
 * ser chamado dentro do projeto Angular dentro de outros aqruivos
 * HTML de outros componentes.
 *  
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';
}
