import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(fecha : string): any {
    
      let obj = new Date(fecha);
      let nuevoFormato = this.agregarCero(obj.getUTCDate()) + "/" + this.agregarCero((obj.getUTCMonth() + 1)) + "/" + obj.getFullYear();
      return nuevoFormato;
    
    
  }
  agregarCero(numero : number){
    let retorno : string = String(numero);
    if(numero < 10){
        retorno = "0" + numero;
    }
     return retorno;
   }

}
