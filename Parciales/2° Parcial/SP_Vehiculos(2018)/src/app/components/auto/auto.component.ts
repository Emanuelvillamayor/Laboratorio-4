import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  tipo="Auto";
  patente="";
  marca="";
  color="";
  kilometros:Number;
  usuario="";
  agrego="";
  autos=[]
  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();

  

  Cargar(){
    console.log(this);
    if(!this.marca||!this.patente||!this.color){
      return 0;
    }
    this.http.AgregarAuto(this.patente,this.marca,this.color,this.kilometros,this.tipo,this.usuario).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/cargar"]);
      this.ngOnInit();
      this.agrego="Agrego";
    },
    err=>{console.log(err);
    this.agrego="Error"})

      console.log(this);
  }

  ngOnInit() {
    this.http.GetAutos().subscribe(data=>{
      console.log(data);
    })
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.usuario=token.user
    }
    this.agrego=""
    this.patente="";
    this.marca="";
    this.color="";
    this.kilometros=0;
    this.tipo="auto";

  }

}
