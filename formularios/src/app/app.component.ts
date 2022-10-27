import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';

  dadosUsuario = {
    nome:  '',
    sobronome: '',
    email: '',
    senha: ''
  }


  enviarForm(evento: any){
    evento.preventDefault() // Anula o comportamento padrão do elemento html
    evento.stopPropagation() // evita que o evento afete outros elementos html

    alert("oi")
  }
}
