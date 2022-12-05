import { Component, OnInit } from '@angular/core';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  public dataSource: Chamado[] = [] 

  constructor(
    private chamadoService: ChamadoService
  ) { }

  ngOnInit(): void {

    this.initializeTable();
  }

  public initializeTable(): void{
    this.chamadoService.findAll().subscribe( chamados => {
      this.dataSource = chamados;
    });
  }
}
