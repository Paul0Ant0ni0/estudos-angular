import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  public cliente: Cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '', 
    senha: ''
  }

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
  }

  private initilizeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.clienteService.findById(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }


  // Editar um cliente e redireciona-lo para a relação
  public update(form: NgForm): void{
    if(form.valid){
      this.clienteService.update(this.cliente).subscribe(() => {
        alert("Cliente editado com sucesso.");
        this.router.navigate(['/clientes']);
      })
    }else{
      alert("Dados inválidos");
    }
   
  }

}
