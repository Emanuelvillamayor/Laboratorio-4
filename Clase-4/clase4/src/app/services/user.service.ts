import { Injectable } from '@angular/core';
import { Persona } from 'src/app/clases/persona';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // array en el cual voy a guardar los usuarios
  listado = [];

  constructor() { }

  public ngGetListado() {
     return this.listado;
  }

  public ngSetListado( dato: Persona ) {
    this.listado.push(dato);
  }


}
