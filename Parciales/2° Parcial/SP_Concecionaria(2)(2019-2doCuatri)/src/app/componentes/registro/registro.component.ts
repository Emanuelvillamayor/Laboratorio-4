import { AutoService } from './../../servicios/auto.service';
import { Component, OnInit } from '@angular/core';
import { Concesionaria } from 'src/app/modals/concesionaria';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   con : Concesionaria  =  {email : "" , clave : "" , tel : 0 , localidad : "" , razonSocial : "" }
  constructor(private miServicio : AutoService) { }
  tipo = "password";
  ngOnInit() {
  }
  registrar(){
    this.miServicio.agregarConcesionaria(this.con);
  }
  clave(tipo : string){
    this.tipo = tipo;
  }

}
