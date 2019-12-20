import { HttpBase } from './http-base.service';
import { Observable } from 'rxjs';
import { Zapato } from './../Model/Zapato';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZapatoService {

  constructor(public miHttp: HttpBase) {
  }

  public Listar(): Observable<Zapato[]> {
    return this.miHttp.httpGetO<Zapato[]>('/Zapatos/');
  }

  // public ListarPorCliente(idCliente: number): Observable<Zapato[]> {
  //   return this.Listar().pipe(
  //     map(response => {
  //       return response.filter( element => {
  //         console.log(idCliente);
  //         console.log(element.idCliente);
  //         return element.idCliente === idCliente;
  //       });
  //     }));
  // }

  public Registrar(codigo: number, local: number, nombre: string, precio: number, genero: string, fechaIngreso: Date, imagen): Promise<Object> {
    const request: Object = {
      codigo: codigo,
      local: local,
      nombre: nombre,
      precio: precio,
      genero: genero,
      fechaIngreso: fechaIngreso,
      imagen: imagen
    };
    return this.miHttp.httpPostP('/Zapatos/', request);
  }
}
