import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {

  transform(value: boolean): string {
    return value?'Aprobado':'Reprobado';
  }

}
