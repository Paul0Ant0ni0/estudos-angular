import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    // 123.123.123-12

    // O método replace() subtritui elemetos de uma string
    // //-> duas barras são limitaçõa da regx
    // () significa um grupo na expressão regular
    // [] significa um range; Ex: 0...9
    // {} significa a quantidade de vezes
    // '' está recriando uma nova string
    // $ é utilizado para referenciar o os grupos; Ex: $1
    const cpfFormatado = value.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
    return cpfFormatado
  }

}
