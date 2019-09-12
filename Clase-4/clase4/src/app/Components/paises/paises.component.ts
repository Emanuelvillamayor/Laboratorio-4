
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service'; // importamos el servicio a mano
@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  arrayPaises;

  // bandera para mostrar o no listado al darle click al boton
  mostrarLista: boolean;

  // bandera para que se cargue una vez la lista
  flag: boolean = false;

  constructor(private paisservice: PaisService) { }

  ngOnInit() {
   // this.listaPaisesSubscribe();
  }

  // llamo al metodo que esta en mi servicio y le hago el "subscribe " para obtener los datos,
  // en este caso obtenemos un array de paises
  listaPaisesSubscribe() {
    this.paisservice.listaPaisesGet().subscribe(data => {

      // con esto reseteo el array para que no se cree varias veces
      this.arrayPaises = null;

      this.arrayPaises = data;

      console.log(this.arrayPaises);

    });
  }

  // cargo lista al precionar erl boton y la muestro , si se vuelve a precionar , la oculto
  ngCargarLista() {
    // mostramos o no el div
    this.mostrarLista = !this.mostrarLista;

    // regulamos que se cargue una sola vez la lista
    if (this.flag === false) {
      this.listaPaisesSubscribe();
      this.flag = true;
    }
  }
}
