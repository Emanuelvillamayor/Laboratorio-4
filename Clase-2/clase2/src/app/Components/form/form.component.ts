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



  @Output() cargar = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngCargar() {
    this.persona = new Persona(this.nombre, this.email);

    console.log(this.persona);

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
