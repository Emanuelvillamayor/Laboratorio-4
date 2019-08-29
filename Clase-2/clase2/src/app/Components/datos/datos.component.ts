
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  // en este input voy a leer lo que me envia la clase padre desde su "saludar.ts" mediante la variable "listado"
  // lo cual guarda un array de objetos de tipo "Persona";
  @Input() datos: Persona;


  constructor() { }

  ngOnInit() {

  }

}
