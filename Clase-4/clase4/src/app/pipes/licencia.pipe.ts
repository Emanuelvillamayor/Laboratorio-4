import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'licencia'
})
export class LicenciaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'Si') {
      value = value.replace(value, '<font color = "green">SI</font>');
    } else {
      value = value.replace(value, '<font color = "red">NO</font>');
    }

    return value;
  }

}
