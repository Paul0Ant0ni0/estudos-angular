import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimentos'
})
export class ComprimentosPipe implements PipeTransform {

  /**
   * 
   * Pegar um array qualquer e retonar a quantidade de elmentos
   * dentro dele
   * 
   * value: parãmetro responsável por pegar o valor que será transformado
   * args
   * 
   * O parametro 'value' no método tranform é obrigatório
   * 
   * Mas, caso queira passar outros parâmetros, isso é possivel 
   */

  transform(value: any[]): number {
    return value.length;
  }

}
