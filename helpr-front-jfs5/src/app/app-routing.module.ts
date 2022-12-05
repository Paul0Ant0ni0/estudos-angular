import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) // carregando o módulo que carrega todas as rotas de login
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [
      AuthGuard // Bloqueando a rota Home, exceto, se o usuário estiver autenticado
    ]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
