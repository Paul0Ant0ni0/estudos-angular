import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moviedb } from '../interfaces/TheMovie-api';

@Injectable({
  providedIn: 'root'
})
export class MoviedbApiService {
  private readonly base_URL_MOVIE = 'https://api.themoviedb.org/3/search/movie?'
  private readonly base_URL: string = 'https://api.themoviedb.org/3/movie/now_playing?'
  private readonly chave: string = 'api_key=80c7145277a51fb696cd02258800721b&language=pt-BR&?'

  constructor(
    private http: HttpClient

  ) { }

  buscarFilmes(){

    return this.http.get<Moviedb>(`${this.base_URL}${this.chave}`)
  }

  buscarFilme(filme: string){
    const format = filme.replace(/ /g, '%20');

    return this.http.get<Moviedb>(`${this.base_URL_MOVIE}${this.chave}&query=${format}`)
  }
}
