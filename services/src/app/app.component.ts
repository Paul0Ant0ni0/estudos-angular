import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  clientes: any


  /**
   * Fazenod a injeção de dependencias dentro componente
   * SEMOPRE INJETAR AS DENPENDENCIAS NO CONSTRUTOR DA CLASSE
   */
  constructor(
    public cService: ClientesService 
  ){}

  /**
   * Ciclo de vida é executado quando o seu componente
   * é renderizado na tela
   */
  ngOnInit(): void{

    const clientes = this.cService.listarCliente()
    this.clientes = clientes

  }
}
