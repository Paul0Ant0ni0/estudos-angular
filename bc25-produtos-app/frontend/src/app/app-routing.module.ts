import { NgModule } from "@angular/core";

// Iniciar o roteamento
// Importar o módeulo de roteamento
import { RouterModule, Routes } from "@angular/router";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";

// rota -> componente
// a constante rotas é responsável por armazenar as rotas que existem dentro do site
// cada item no array de rotas é uma rota que foi declarada

const rotas: Routes = [
    {
        // http://localhost:4200/produtos
        path: '', // caminho para acessar a rota (string vazia significa a rota principal)
        redirectTo: 'produtos', // Redireciona o usuário para outra página no momento que ele entrar nessa rota
        pathMatch: 'full'

    },// cada objeto é uma rota
    {
        path: 'produtos',
        component: ListarProdutosComponent // Componente que irá ser exibido na rota produtos
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rotas), // Módulo quer inicia o roteamento e carrega as rotas que estão dentro do array

    ],
    exports: [
        RouterModule // exportando o módulo após as rotas terem sidos carregadas
    ],
    providers: []
})

export class AppRoutingModule {

}