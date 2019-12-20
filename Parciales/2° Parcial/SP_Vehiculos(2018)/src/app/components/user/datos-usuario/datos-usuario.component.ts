import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import {JwtHelperService} from "@auth0/angular-jwt";
@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {
  helper=new JwtHelperService();
  nombre="";
  mail="";
  tipo="";
  token = localStorage.getItem("Token");

  @Output() send_nombre = new EventEmitter<string>();
  @Output() send_mail = new EventEmitter<string>();
  @Output() send_tipo = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.timeWhatch(),1000);  
  }

  Datos(){
  this.token = localStorage.getItem("Token");
  if(this.token /*&& !this.helper.isTokenExpired(this.token)*/){

    let usuario=this.helper.decodeToken(this.token);
    this.nombre =usuario.nombre;
    this.tipo =usuario.tipo;
    this.mail =usuario.user;
  }
  else{
    this.nombre ="";
    this.tipo ="";
    this.mail ="";
  }
  this.send_mail.emit(this.mail);
  this.send_nombre.emit(this.nombre);
  this.send_tipo.emit(this.tipo);
  }

  timeWhatch() {
    this.Datos();
    setTimeout(()=>this.timeWhatch(),1000);
    
  }
}
