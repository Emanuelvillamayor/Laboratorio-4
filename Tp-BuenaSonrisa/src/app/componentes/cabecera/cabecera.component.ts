import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/modals/entidad';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  entidad : Entidad;
  constructor() {
    this.entidad = JSON.parse(localStorage.getItem("entidad_logueada"));
   }

  ngOnInit() {
  }

}
