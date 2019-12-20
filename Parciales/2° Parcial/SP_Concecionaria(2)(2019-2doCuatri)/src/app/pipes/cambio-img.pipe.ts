import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioImg'
})
export class CambioImgPipe implements PipeTransform {

  transform(value : string , value2? : any , va): any {
    if(value == "auto"){
      value = "https://st2.depositphotos.com/1007566/11947/v/950/depositphotos_119477760-stock-illustration-car-side-auto-vehicle-icon.jpg";
    }
    else if(value == "camion"){
      value = "https://st2.depositphotos.com/2780081/11431/v/950/depositphotos_114310428-stock-illustration-semi-trailer-truck.jpg"
    }
    else if(value == "camioneta"){
      value = "https://st2.depositphotos.com/5777248/9088/v/950/depositphotos_90886224-stock-illustration-pickup-cartoon-car-illustration.jpg";
    }
    return value;
  }

}
