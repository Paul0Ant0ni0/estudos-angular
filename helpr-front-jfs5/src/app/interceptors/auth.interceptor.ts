import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // INTERCEPTA AS REQUISIÇÕES E INSERE O TOKEN DE AUTORIZAÇÃO
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    if(token) {
        // clonado a requisição atual e adicionando a autorização na requisição
      const cloneRequest = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      });
      // informando para a requisição continuar com a nova requisição
      return next.handle(cloneRequest);
    }
    else {
        // caso não tenha nenhum token, irá continuar com a requisição

      return next.handle(request);
    }
  }
}
