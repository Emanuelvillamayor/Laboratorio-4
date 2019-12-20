import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mi-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  // en este input voy a leer lo que me envia la clase padre desde su "home.ts" mediante la variable "cadenaQR"
  // lo cual guarda una cadena llamada "cadenaQR" tambien
  @Input() cadenaQR: string;
  constructor() { }

  ngOnInit() {
  }

}
