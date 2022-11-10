import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListarProdutosComponent } from './pages/listar-produtos/listar-produtos.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    ProdutoComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
