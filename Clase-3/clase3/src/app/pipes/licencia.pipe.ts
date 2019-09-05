import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'licencia'
})
export class LicenciaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'Si') {
      return '<label color="red">value</label>';
    } else {
      return 'chau';
    }
    return value;
  }

}
