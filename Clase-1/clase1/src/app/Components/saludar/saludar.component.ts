import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  // este atributo desde html lo accedemos con "interpolacion {{}}"
 name = 'Ema';

 //estos dos atributos estan declarados tambien en html de manera bidireccional los cuales se van
 //a refrescar automaticamente
 nombre = ' ';
 email = ' ' ;
 enviar =true;

 //estos atributos los accedemos desde html con corchetes [] ya que son para PROPIEDADES
 src = "https://www.feelcats.com/blog/wp-content/uploads/2019/03/gatitos.jpg";
 width = '150';
 height = '200';
  constructor() { }

  ngOnInit() {
  }

  manejadora() {
    //lo que hacemos es que cada vez que entre cambie su comportamiento para que en uno muestre
    //y en otro cargue cada vez que se ingrese
    this.enviar = !this.enviar;

  }
}
