import { Injectable } from '@angular/core';

/**
 * ProvidedIn informa onde o servico será fornecido
 * Injectable informa que a classse pode ser utilizada em outro local
 */

/**
 * A ideia de um servico no Angular é encapsular
 * alguma lógica que pode ser utilizada em vários
 * locais da sua aplicação
 */

interface Cliente {
  id: number,
  nome: string,
  sobrenome: string,
  telefone: string,
  email: string,
  cpf: string
}

/***
 * C -> Create
 * R -> Read
 * U -> Update
 * D -> Delete
 */

@Injectable({// Está injetando o service na raiz do projeto/global, está exportando o servbice para o módulo de fdrom automatica 
  providedIn: 'root' // 'root' faz referrenci a oa app.module.ts
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
    
    },
    {
      id: 2,
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      
    },
    {
      id: 3,
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
    }
  ]


  constructor() { }

  listarCliente(): Cliente[]{
    // toda a logica para acessar a api e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined {
      /**
       * O metodo find dos arrays serve para procurar algum valor dentro do array
       */

      /**
       * É necessario que se passe um parametro no métdod find() uma função.
       * Essa função será utilizada denttro do metodo para procurar um valor.
       * A função que será passada DEVE sempre retornar um valor booleano
       */
      const clienteEcontrado = this.clientes.find((c) => { // O parametro c é um parametro do array Cliente
        return c.id == id
      })

      return clienteEcontrado
    
  }
}
