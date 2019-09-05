import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/clases/persona';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nombre = 'manu';
  email = 'manu@gmail.com';
  opcionSexo = 'M';
  sueldo = 0;
  edad = 0;
  opcionLic = 'No';
  fecha: Date;



  persona: Persona;


  // creo el ouput el cual emite un evento hacia una clase padre
  @Output() cargar = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngCargar() {
    // instancia un objeto "Persona" cargandole los datos ingresados por los "inputs"
    this.persona = new Persona(this.nombre, this.email, this.opcionSexo, this.sueldo, this.edad, this.opcionLic, this.fecha);

    // envio  ese evento hacia mi clase padre el cual lo va a recibir con una funcion desde el lado de "saludar.ts"
    this.cargar.emit(this.persona);
  }

// muestro que al cambiar el seleccionado en el "select" cambia el option
  ngCapturar(e) {
    console.log(e);
  }

}
