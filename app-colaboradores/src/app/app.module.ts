import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MaterialModule } from './shared/material/material.module';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './views/login/login.component';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NewCollaboratorComponent } from './views/new-collaborator/new-collaborator.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { EditCollaboratorComponent } from './views/edit-collaborator/edit-collaborator.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DetailsComponent } from './components/details/details.component';
import { AvatarPipe } from './pipes/avatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    NewCollaboratorComponent,
    EditCollaboratorComponent,
    DetailsComponent,
    AvatarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa o projeto firebase
    AngularFireAuthModule, // Módulo de autenticação do firebase
    ReactiveFormsModule,
    AngularFirestoreModule, // Módulo de banco de dados do firestore
    AngularFireStorageModule, // Banco de arnazebamebti de arquivos
    FormsModule // Forms Temnplate Driver
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
