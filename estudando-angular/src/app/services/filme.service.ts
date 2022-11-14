import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private readonly baseURL: string = 'http://localhost:3000/films'

  constructor(
  private http: HttpClient
  ) { }


  public getAll(): Observable<Filme[]>{


    return this.http.get<Filme[]>(this.baseURL)
  }
}
