import { Component, OnInit, Input, Output } from '@angular/core';
import { Helado } from '../../clases/helado';
import { HeladosService  } from '../../servicios/heladosService.service';
import { TablaMatComponent } from '../../componentes/tabla-mat/tabla-mat.component';

@Component({
  selector: 'app-listado-helados',
  templateUrl: './listado-helados.component.html',
  styleUrls: ['./listado-helados.component.css']
})

export class ListadoHeladosComponent implements OnInit {

  helado:Helado;
  public listaHelados: any;
  public varLista:any;
  
  constructor(private _servicio:HeladosService) { 

    this._servicio.ServiceTraerHelados().subscribe(data => {   
      this.listaHelados = JSON.parse(data._body);
     
    })
 
  }


  ngOnInit() {
  }




  
}
