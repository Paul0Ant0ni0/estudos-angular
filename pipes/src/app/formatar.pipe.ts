import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatar'
})
export class FormatarPipe implements PipeTransform {

  transform(value: string): string {
    let resultado =  value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return resultado
  }

}
