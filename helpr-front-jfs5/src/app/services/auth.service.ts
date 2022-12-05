import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Credenciais } from '../models/credenciais';
import { Token } from '../models/token';
import { catchError, tap } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root' // SÓ APP.MODULE CONTROLA ESSE SERVIÇO, SENDO NECESSÁRIO IMPORTAR OS RECURSOS NO APP.MODULE
})
export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService(); // Criando uma instancia da classe JwtHelperService 


  constructor(
    private http: HttpClient,
  ) { }



  // 1º CAPTURAR AS CREDENCIAIS 
  // 2º REQUISITAR O TOKEN DE AUTORIZAÇÃO
  // 3º AUTENTICAR

  public authenticate(credenciais: Credenciais): Observable<Token> {

    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
      tap(token => { // tap() = causa um efeito colateral na requisição
        localStorage.setItem("token", token.accessToken);
      }),
      catchError(error => {
        alert("Erro ao autenticar!");
        console.error(error)
        return EMPTY;
      })
    );

  }

  
  public isAutheticate(): boolean{
    let flag: boolean = false;
    const token = localStorage.getItem("token");
    if(token){
      // VERIFICAR SE O TOKEN ESTA EXPIRADO
      flag = !this.jwt.isTokenExpired(token);

    }




    return flag;
  }

}
