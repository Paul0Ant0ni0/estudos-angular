import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private notification: NotificationService){}

  canActivate( // Validando se o usuário vai ter acesso a rota =
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.firebaseAuth // Serviço do firebase
    .authState // Irá retornar um  Obervable que contém as informações do estado atual do usuário
      .pipe( // Fazendo a conversão dos dados para boolean
        map(user => {
          if(user){
            return true;
          }else {
            this.notification.showMessege("Acesso restrito! Faça login!", "error")
            this.router.navigate(["/login"]);
            return false;
          }
          
        })
      )


  }
  
}
