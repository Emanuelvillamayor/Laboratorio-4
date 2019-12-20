import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  nombre = "";
  tipo = "";
  mail = "";
  constructor() { }
  
  public Nombre(event){
    this.nombre=event;
  }

  public Mail(event){
    this.mail=event;
  }

  public Tipo(event){
    this.tipo=event;
  }


  ngOnInit() {
  }

}
