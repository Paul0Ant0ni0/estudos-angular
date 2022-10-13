/**
 * Módulo principal do site
 * Serve para informar qual o componente porincipal do site e registrar coisas do site
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({// Decorator que informa que uma determinada classe será um módulo
  /**
   * declasions serve para registrar
   * componentes, pipes, diretivas e outras estruturas
   */
  declarations: [
    AppComponent,
    ProdutoComponent,
    
  ],
  /**
   * imports serve para registrar módulos dentro
   * de outros módulos
   * 
   * SERVE EXCLUSIVAMENTE PARA OUTROS MÓDULOS
   */
  imports: [
    BrowserModule
  ],
  /**
   * providers serve para registrar servicos e interceptatores
   * HTTP
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
