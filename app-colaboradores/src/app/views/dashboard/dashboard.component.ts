import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/components/details/details.component';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from 'src/app/services/collaborator.service';
import { NotificationService } from 'src/app/services/notification.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  public dataSource: Collaborator[] = [];

  public readonly img: string = '/assets/images/img.null.png';

  constructor(
    private collaboratorService: CollaboratorService,
    private notification: NotificationService,
    private dialog: MatDialog,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(): void {
    // CAPTURAR OS DADOS DO FIRESTORE E PRENCHER O VETOR DE COLABORADOPES
    this.collaboratorService.findAll().subscribe(collborators => {
      this.dataSource = collborators
    });
  }

  public deleteCollaborator(id: string, link: string): void {
    this.collaboratorService.deleteCollaborator(id).subscribe(response => {
      this.deleteFoto(link)
      this.notification.showMessege("Deletado com sucesso!", "success");
     
      this.initializeTable()

    });
  }

  public deleteFoto(link: string): void {
    this.storageService.deleteFoto(link).subscribe(response => {
    })
  }

  public openDetails(collaborator: Collaborator): void {
    // ABRIR CAIXA DE DIÁLOGO COM INFORMAÇÕES DO COLABORADOR
    this.dialog.open(DetailsComponent, {// Caixa de dialogo, necessessáio passar o componente é o dados de configurações
      height: 'auto',
      data: collaborator
    })
  }

}
