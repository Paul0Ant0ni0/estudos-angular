import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubRepos } from './interfaces/GithubRepos';
import { GithuUser } from './interfaces/GithubUser';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithuUser // ! -> faz com que uma propriedade da classe possa fizar vazia, temporariamente, está recebendo undefined

  gRepos!: GithubRepos


  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService

  ) {}


  procurar(){
    const username = this.githubForm.get('username')?.value // recuperando o nome de usuário que deve ser procurado
    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      }
    )
    this.githubService.procurarRepositorios(username).subscribe(
      (repos) => {
        console.log(repos.id)
        this.gRepos = repos
      }
    )

  
  }
}
