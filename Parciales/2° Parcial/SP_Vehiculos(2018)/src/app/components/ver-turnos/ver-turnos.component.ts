import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from "../../servicios/server.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Sort} from '@angular/material';
import * as jsPDF from "jspdf";

export interface ClienteServ {
  dia: string;
  mail: string;
  hora: string;
  patente: string;
}
@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  tipo;
  mailbuscar="";
  constructor(private http:ServerService,private router:Router) { }
  helper=new JwtHelperService();
  mail="";
  clienteArr:ClienteServ[];
  mostrarArr:ClienteServ[];
  ngOnInit() {
    this.clienteArr=[];
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.tipo=token.tipo == "Cliente";
      this.mail=token.user;
    }
    this.http.TomarTurno().subscribe(data=>{
      console.log(data)
      for (let index = 0; index < data["rta"].length; index++) {
        let hora:string=data["rta"][index].horario;
        let dia:string=data["rta"][index].dia;
        let mail:string=data["rta"][index].mail;
        let patente:string=data["rta"][index].patente;
        this.clienteArr.push({hora: hora,mail: mail ,dia: dia,patente:patente});
        
      }
      this.mostrarArr=this.clienteArr;
    },
    err=>{console.log(err);})
  }

  sortData(sort: Sort) {
    const data = this.clienteArr.slice();
    if (!sort.active || sort.direction === '') {
      this.mostrarArr = data;
      return;
    }

    this.mostrarArr = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'mail': return compare(a.mail, b.mail, isAsc);
        case 'dia': return compare(a.dia, b.dia, isAsc);
        case 'patente': return compare(a.patente, b.patente, isAsc);
        case 'hora': return compare(a.hora, b.hora, isAsc);
        default: return 0;
      }
    });
  }
  Filtrar()
  {
    this.mostrarArr=this.clienteArr;
    if(this.mailbuscar){
      this.mostrarArr=[];
      for (let index = 0; index < this.clienteArr.length; index++) {
        if(this.clienteArr[index].mail&&this.clienteArr[index].mail.includes(this.mailbuscar)){
          this.mostrarArr.push(this.clienteArr[index]);
        }
        
      }
    }

  }
  @ViewChild("content") content:ElementRef;
  downloadPDF(){
    let doc = new jsPDF();
    let spacialElementHandler={
      "#editor":function(element, renderer){
        return true;
      }

    };
    let content= this.content.nativeElement;
    doc.fromHTML(content.innerHTML,20,20,{
      "width": 500,
      "elementHandlers": spacialElementHandler
    });
    doc.save("test.pdf");
  }

}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}