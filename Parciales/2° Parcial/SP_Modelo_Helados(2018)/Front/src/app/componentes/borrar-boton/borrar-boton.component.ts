import { Component, OnInit, Input } from '@angular/core';
import { HeladosService } from '../../servicios/heladosService.service';

@Component({
  selector: 'app-borrar-boton',
  templateUrl: './borrar-boton.component.html',
  styleUrls: ['./borrar-boton.component.css']
})
export class BorrarBotonComponent implements OnInit {

  constructor(private _servicio:HeladosService) { }

  @Input () id:number;
  
  ngOnInit() {
  }

  BorrarHelado(){
    
    console.log(this.id);
    
    this._servicio.ServiceDeleteUnHelado(this.id)
    .subscribe();
    
  } 



}
