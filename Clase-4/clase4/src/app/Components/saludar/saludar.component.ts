
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { UserService } from '../../services/user.service'; // importamos el servicio


@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

   mostrar: boolean;

  constructor(private user: UserService) { } // injecto el servicio

  ngOnInit() {
  }

  ngProcesarCarga(datos: Persona) {

    this.mostrar = true;

    //  guardo el usuario dentro de el "Listado" de nuestro servicio
    this.user.ngSetListado(datos);

  }




}
