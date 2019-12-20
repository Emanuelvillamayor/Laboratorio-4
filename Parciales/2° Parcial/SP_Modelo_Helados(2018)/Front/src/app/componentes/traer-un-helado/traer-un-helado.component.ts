import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeladosService} from '../../servicios/heladosService.service';
import { Helado } from '../../clases/helado';

@Component({
  selector: 'app-traer-un-helado',
  templateUrl: './traer-un-helado.component.html',
  styleUrls: ['./traer-un-helado.component.css']
})
export class TraerUnHeladoComponent implements OnInit {

  unHeladoComponent: Helado;
  listaHeladosComponent: any;
  @Output() heladosEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private _servicio:HeladosService) { }

  
  TraerUnHelado(idHelado)
  { 
    this._servicio.ServiceTraerUnHelado(idHelado).subscribe(data =>{
      this.unHeladoComponent = JSON.parse(data._body);
    });
  }

  
  MostrarHelados()
  {    
    this._servicio.ServiceTraerHelados().subscribe(data => {   
    this.listaHeladosComponent = JSON.parse(data._body)}); 
  }

  ngOnInit() {
  }

}
