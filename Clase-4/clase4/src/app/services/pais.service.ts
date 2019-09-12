import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  // para hacer conexiones http
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(public http: HttpClient) { }

   // metodo que me va a retornar una consulta desde http a una pagina
   public listaPaisesGet() {
    return this.http.get('https://restcountries.eu/rest/v2/all');

    /* Ejemplo 1 utilizando ".toPromise()" no recomendable

    this.http.get('https://restcountries.eu/rest/v2/all').toPromise()
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
    */

    /* Ejemplo 2 utilizando ".subscribe()" recomendable

    return this.http.get('https://restcountries.eu/rest/v2/all');
    .subscribe(data => {
      console.log(data)
    });
    */
 }

}

