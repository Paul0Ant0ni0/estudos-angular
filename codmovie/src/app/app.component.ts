import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Moviedb } from './interfaces/TheMovie-api';
import { MoviedbApiService } from './service/moviedb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codmovie';
  
  movieForm: FormGroup = this.fb.group({
    movie: ['', [ Validators.required ]]
  })


  filmes!: Moviedb
  
  constructor(
    private moviedbService: MoviedbApiService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder

  ){

  }

  ngOnInit(){
    this.buscarFilmes()
  }

  buscarFilme(){
    const filme = this.movieForm.get('movie')?.value

    this.moviedbService.buscarFilme(filme).subscribe(
      (filme) => {
        this.filmes = filme
        console.log(filme)
      }, 
      (erro) => {
  
        if(erro instanceof HttpErrorResponse){
            if(erro.status == 404){
              alert('Erro na requisição HTTP')
            }
        }
      }
    
    )


  }

  buscarFilmes(){
    this.moviedbService.buscarFilmes().subscribe(
      (filmes) => {
        this.filmes = filmes
       
      }, 
      
      (erro) => {
        //HttpErrorResponse
        // precisa saber se o meu erro vem dessa classe
        if(erro instanceof HttpErrorResponse){
            if(erro.status == 404){
              alert('Erro na requisição HTTP') // abrindo o snackbar na tela 
            }
        }
      }
    )
  }



}
