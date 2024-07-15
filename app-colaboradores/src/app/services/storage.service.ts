import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {  Observable, from, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage,
    private notication: NotificationService) { }


  public uploadFoto(photo: File): Observable<any> {
    const promise = this.storage.upload(`fotos/${Date.now()}`, photo);// nomedaPasta/nomeDoarquivo, arquivo
    return from(promise).pipe(
      catchError(error => {
        this.notication.showMessege("Erro no envio do arquivo.", "error");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public deleteFoto(photo: string): Observable<any>{
    const promise = this.storage.refFromURL(photo).delete();

    return from(promise).pipe(
      catchError(error => {
        this.notication.showMessege("Erro detelar o arquivo.", "error");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
