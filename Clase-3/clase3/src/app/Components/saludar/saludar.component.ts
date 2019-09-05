
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';


@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

   listado = [];
   mostrar: boolean;

   // persona: Persona;

  constructor() { }

  ngOnInit() {
  }

  // En la variable "datos" vamos a recibir lo que nos envio el "Output" desde "form.ts" (claseHija)
  // en este caso eso seria un objeto de tipo persona
  ngProcesarCarga(datos: Persona) {
    /* v1 Creamos un atributo propio de tipo "Persona" y luego se lo asignamos a la variable datos
    this.persona = datos;
    this.listado.push(this.persona);*/

    /*v2 Directamente nuestro atributo "datos" se lo asignamos al array ya que "datos" viene asignado como persona desde la funcion*/
    this.listado.push(datos);
    this.mostrar = true;
    console.log(this.listado);

  }


}
