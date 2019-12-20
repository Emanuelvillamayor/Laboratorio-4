import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {

  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();
  autos;
  agrego="";
  dia;
  horario;
  mail="";
  tipo="";
  patente;
  Cargar(){
    if(!this.FechaValidar()){
      this.agrego="Fecha Invalida";
      return 0;
    }
    if(!this.horario){
      this.agrego="Agregar Horario";
      return 0;
    }
    if(!this.patente){
      this.agrego="Agregar Horario";
      return 0;
    }
    this.http.AgregarTurno(this.dia,this.horario,this.patente,this.mail).subscribe(data=>{
      console.log(data);
      this.agrego="Agrego";
    },
    err=>{console.log(err);
    this.agrego="Error"})

  }
  Tipo(event){
    this.tipo=event;
    if(this.tipo=="Admin"){
      this.router.navigate(["/verTurno"]);
    }
  }

  Mail(event){
    console.log(event)
    this.mail=event;
  }

  ngOnInit() {
  /*  this.http.GetAutos().subscribe(data=>{
      console.log(data);
      this.autos=data;
    },
    err=>{console.log(err);
    this.agrego="Error"})
*/
    this.agrego=""
  }
  FechaValidar(){
    let d = new Date();
    let d2 = new Date (this.dia);
    console.log(d.getDate() < d2.getDate())
    if(d.getDate() < d2.getDate()&& d.getFullYear() < d2.getFullYear() && d.getMonth() < d2.getMonth()){
      return false;
    }
    return true;
  }

}
