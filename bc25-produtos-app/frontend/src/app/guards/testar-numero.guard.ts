import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate { // Utilizado para proteger a rota no momento da entrada 
  // retornar true -> pode serguir
  // retornar falso -> não pode seguir
  constructor(
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot, // Objeto que permite recuperar os parâmetros passados para a rota
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // Saber o id informado é um número ou não
      // se for um número -> pode seguir (true)
      // se não for um número -> não pode seguir (false)

      // recuperar o parâmetro que guarda o valor do id
    const idProduto =  route.paramMap.get('idProduto') as string
    if(isNaN(Number(idProduto))){ // o número é um NaN 
      return this.router.navigateByUrl('**')
    }else{
      return true
    }

    
  }
  
}
