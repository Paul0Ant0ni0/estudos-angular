import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { NotificationService } from 'src/app/services/notification.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.css']
})
export class EditCollaboratorComponent implements OnInit {

  public collaborator!: Collaborator;
  public isLoadUpload: boolean = false; // carregamento da imagem na progress bar

  constructor(
    private notication: NotificationService,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private route: ActivatedRoute,
    private storageService: StorageService) {}

  ngOnInit(): void {
    this.initializeCampos()
  }

  private initializeCampos(): void{
    const id = this.route.snapshot.params["id"];
    this.collaboratorService.findById(id).subscribe(collaborator => {
      this.collaborator = collaborator;
    })
    console.log(id)
  }

  public updateCollaborator(form: NgForm): void {
    if(form.valid) {
      this.collaboratorService.updateCollaborator(this.collaborator).subscribe(response => {
        this.notication.showMessege("Atualizado com sucesso.", "success");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notication.showMessege("Dados inválidos.", "error");
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
      this.collaborator.fotoUrl = fotoUrl; // adicionando a imagem no objeto collaboratror
        
      })
    });
  }

}
