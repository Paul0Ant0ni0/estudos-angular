import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcNotaComponent } from './views/calc-nota/calc-nota.component';
import { FilmsListComponent } from './views/films-list/films-list.component';
import { FormsComponent } from './views/forms/forms.component';
import { HomeComponent } from './views/home/home.component';
// Configurações de rotas da aplicação | Módulo roteamento principal
const routes: Routes = [ // Mapeamento das rotas
  {
    path: '', // rota/caminho
    component: HomeComponent // classe que define o componente
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'calcNota',
    component: CalcNotaComponent
  },
  {
    path: 'filmes',
    component: FilmsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
