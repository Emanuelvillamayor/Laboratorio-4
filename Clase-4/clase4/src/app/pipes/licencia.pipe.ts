import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'licencia'
})
export class LicenciaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'Si') {
      return `<span color="red">${value}</span>`;
    } else {
      return `<span color="blue">${value}</span>`;
    }
  }

}
