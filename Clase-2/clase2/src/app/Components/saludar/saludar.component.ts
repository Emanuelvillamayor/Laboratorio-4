
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';


@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

   listado = [];
   // persona = new Persona("h","b");
   persona: Persona;

  constructor() { }

  ngOnInit() {
  }

  ngProcesarCarga(datos: Persona) {
    // this.persona = new Persona(datos.nombre, datos.email);
    this.persona = datos;

    console.log(this.persona);

    this.listado.push(this.persona);
    // console.log(this.listado);
  }


}
