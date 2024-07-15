import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { NotificationService } from 'src/app/services/notification.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-collaborator',
  templateUrl: './new-collaborator.component.html',
  styleUrls: ['./new-collaborator.component.css']
})
export class NewCollaboratorComponent implements OnInit {

  public formCollaborator: FormGroup;

  private fotoUrl: string = '';
  public isLoadUpload: boolean = false; // carregamento da imagem na progress bar

  constructor(
    fb: FormBuilder,
    private notication: NotificationService,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private storageService: StorageService) {
    this.formCollaborator = fb.group({
      nome: ['', [Validators.required, Validators.maxLength(70)]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      setor: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      remuneracao: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }

  public createCollaborator(): void {
    if (this.formCollaborator.valid) {
      const collaborator: Collaborator = this.formCollaborator.value;
      collaborator.fotoUrl = this.fotoUrl; // adiconando a foto, pois, está como não obrigatório na interface
      //Enviar para o banco de dados
      this.collaboratorService.createCollaborator(collaborator).subscribe(response => {
        this.notication.showMessege("Cadastrado com sucesso", "success");
        this.router.navigate(['/dashboard'])
      });
    } else {
      this.notication.showMessege("Dados inválidos", "error");
    }

  }


  public uploadFile(event: any): void {
    this.isLoadUpload = true;
    const file: File = event.target.files[0]; // Capturando o arquivo no capo
    // FAZER O UPLOAD DO ARQUIVO PARA O FIREBASE
    this.storageService.uploadFoto(file).subscribe(uploadResult  => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL(); // Retorna uma promesa
      promiseFileUrl.then((fotoUrl: string) => { // estraindo os dados da promise com o mtétodo then
      this.fotoUrl = fotoUrl;
        
      })
    });
  }

}
