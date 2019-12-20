import { AutoService } from './../../servicios/auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  entidad = {correo : "" , clave : ""};
  constructor(private miServicio : AutoService) { }
   tipo = "password";
  ngOnInit() {
    localStorage.removeItem("token");
  }
  iniciarSesion(){
    this.miServicio.traerConcesionaria().valueChanges().subscribe(data =>{
      data.forEach(element =>{
        if(element.email == this.entidad.correo ){
          this.miServicio.iniciarSesion(element);
        }
      })
    })
  }
  cargar(tipo : string){
    if(tipo == "c1"){
      this.entidad.correo = "concesionaria1@gmail.com";
      this.entidad.clave = "1qazxsw2";
    }
    else if(tipo == "c2"){
      this.entidad.correo = "concesionaria2@gmail.com";
      this.entidad.clave = "1qazxsw2";
    }
    else if(tipo == "c3"){
      this.entidad.correo = "concesionaria3@gmail.com";
      this.entidad.clave = "1qazxsw2";
    }
  }
  clave(tipo : string){
    this.tipo = tipo;
  }

}
