import { Concesionaria } from 'src/app/modals/concesionaria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  con : Concesionaria
  constructor() {
    this.con = JSON.parse(localStorage.getItem("con_logueada"));
  }

  ngOnInit() {
  }

}
