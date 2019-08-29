
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  @Input() datos: Persona;


  constructor() { }

  ngOnInit() {

  }

}
