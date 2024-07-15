import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { Collaborator } from '../models/collaborator';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(
    private firestore: AngularFirestore,
    private notification: NotificationService
   ) { }


  public createCollaborator(collaborator: Collaborator): Observable<any> {
   
    const promise = this.firestore.firestore.collection('collaboreators').add(collaborator); // Criando uma coleção/pasta de colaboradores e adiconando um colaborador
  
    return from(promise).pipe(
      catchError(error => {

        this.notification.showMessege("Erro ao cadastrar!", "error")
        console.error(error);

        return EMPTY;
      })
    );
  }


  public findAll(): Observable<any> {
    const promise = this.firestore.collection("collaboreators").get();
    return from(promise).pipe(
      map((response: any) => { // QuerySnapShot | Retornando um um Collaboratos[]
        return response.docs.map((doc: any) => { // docs -> tem todos os registros
          const collaborator: Collaborator = doc.data() as Collaborator; // Retornando os dados e convertendo em colarador
          collaborator.id = doc.id; // estraindo o id do documento, pois, o documento é uma parte externa da coleção
          return collaborator;
        })
      }),
      catchError(error => {
        this.notification.showMessege("Error ao buscar os dados", "error");
        console.error(error);

        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<any>{
    const promise = this.firestore.collection("collaboreators").doc(id).get(); // recuperando os dados do usuário com o id

    return from(promise).pipe(
      map(doc => {
        const collaborator : Collaborator = doc.data() as Collaborator; 
        collaborator.id = doc.id;
        return collaborator;
      }),
      catchError(error => {
        this.notification.showMessege("Erro ao buscar pelo id", "error");
        console.error(error);

        return EMPTY;
      })
    )
  }

  public deleteCollaborator(id: string): Observable<any> {
    const promise = this.firestore.collection("collaboreators").doc(id).delete();

    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessege("Erro ao excluir!", "error");
        console.error(error);

        return EMPTY;
      })
    );
  }

  public updateCollaborator(collaborator: Collaborator): Observable<any> {
    const promise = this.firestore.collection("collaboreators").doc(collaborator.id).update(collaborator);

    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessege("Erro ao atualizar!", "error");
        console.error(error);

        return EMPTY;
      })
    );
  }
}
