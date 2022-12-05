import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  public dataSource: Cliente[] = [] // dataSource -> são os dados que serão renderizados na tabela

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.initializeTable();

  }


  private initializeTable(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.dataSource = clientes;
    })
  }


  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja exluir o cliente?");
    if (ok) {
      this.clienteService.delete(id).subscribe(() => {
        alert("Cliente excluido.");
        this.initializeTable();
      })
    }
  }


}
