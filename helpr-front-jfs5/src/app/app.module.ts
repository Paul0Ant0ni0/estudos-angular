import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule // Módulo para fazer a autenticação que será utilizado pelo service.
    
  ],
  providers: [ // configurando novos serviços dentro do módulo, sendo assim, alterando o compórtamento padrão
    {
      provide: HTTP_INTERCEPTORS, // serviço que configura dentro do projeto, que modifica a especificações gerais
      useClass: AuthInterceptor, // a classe que fizemos para interceptar as requisições
      multi: true // interceptar multiplas requisições
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
