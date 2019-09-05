import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  // casteo para que desde html no me aparezca app-fila que contenga los td sino que pase los td directos
  // de la otra forma puede llegar a causar error en tablas muy grandes
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  // recibo el objeto especifico de tipo "Persona"
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
