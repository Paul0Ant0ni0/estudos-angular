import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacao-entre-componentes';


  mostrarMsg(){
    setTimeout(() => alert("O upload foi concluido com sucesso"), 5000)
  }
}
