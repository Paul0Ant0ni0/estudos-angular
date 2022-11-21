import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth'
import { Observable, from, EMPTY } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { NotificationService } from './notification.service';



@Injectable({
  providedIn: 'root'
})

// Servicço resposnavel por favor autenticação
export class AuthService {
  

  constructor(private firebaseAuth: AngularFireAuth, private notification: NotificationService) { }

  // NECESSÁRIO ATIVAR O PROVEDOR NO FIREBASE CONSOLE
  public authenticateByGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider(); // Provedor de autenticação, que é o google
    const promise = this.firebaseAuth.signInWithPopup(provider); // Método de autenticação por popup. Retorna uma promise

    return from(promise).pipe(
      // Opérador para tratamento do erro
      catchError(error => {
        // resposta para o ususário
        this.notification.showMessege('Ocorreu um erro', 'erro')
        // resposta para o dev
        console.error(error);
        // Retornando um Observable vazia
        return EMPTY;
      })
    ); // Convertendo a promise em Observable
  }

  public authenticateByEmailAndPassword(user: User): Observable<any> {
    // const email = user.email
    // const senha = user.senha
    const { email, senha } = user;
    const promise = this.firebaseAuth.signInWithEmailAndPassword(email, senha);

    return from(promise).pipe(
      catchError(error => {
        if(error.code == "auth/user-not-found"){ // site com tipo de erros -> https://firebase.google.com/docs/auth/admin/errors
          this.notification.showMessege(`Usuário não cadastrado`, 'error');
        }else if(error.code == "auth/wrong-password"){
          this.notification.showMessege(`Senha inválida`, 'error');
        }else{
          this.notification.showMessege(`Erro ao autenticar`, 'error');
          console.error(error);
        }
        return EMPTY;
      })
    );
  }

  public createUserEmailAndPassword(user: User): Observable<any> {
    const { email, senha } = user
    const promise = this.firebaseAuth.createUserWithEmailAndPassword(email, senha);

    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessege(`Erro ao cadastrar usuário`, 'error');
        console.error(error);
        return EMPTY;
      })
    );
  }

  public logout(): Observable<void> {
    const promise = this.firebaseAuth.signOut();
    return from (promise)
  }


}
