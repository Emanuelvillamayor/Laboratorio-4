import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(estado : string): any {
    let colorEstado : string;
    if(estado == "pendiente"){
       colorEstado = 'background-color : yellow ; color : black';
    }
    else if(estado == "atendido"){
      colorEstado = 'background-color : green ; color : white'; 
    }
    else if(estado == "ausente"){
      colorEstado = 'background-color : red ; color : white'; 
    }
    return colorEstado;
  }

}
