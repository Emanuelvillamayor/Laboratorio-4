import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/clases/persona';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nombre: string;
  email: string;
  // persona: any[];


  persona: Persona;


  // creo el ouput el cual emite un evento hacia una clase padre
  @Output() cargar = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngCargar() {
    // instancia un objeto "Persona" cargandole los datos ingresados por los "inputs"
    this.persona = new Persona(this.nombre, this.email);

    console.log(this.persona);

    // envio  ese evento hacia mi clase padre el cual lo va a recibir con una funcion desde el lado de "saludar.ts"
    this.cargar.emit(this.persona);
  }

}
/*
export class Persona {
nombre: string;
email: string;

public constructor(nombre: string, email: string) {
    this.nombre = nombre;
    this.email = email;

  }
}*/
