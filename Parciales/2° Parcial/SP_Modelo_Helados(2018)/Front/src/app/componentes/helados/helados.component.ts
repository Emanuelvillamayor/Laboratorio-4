import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeladosService } from '../../servicios/heladosService.service';
import { Helado } from '../../clases/helado';
//import { InputGroup  } from 'primeng/inputtext';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  // listaHelados: any;

  helado : any;

  resultado : any;

  mostrarHelados: boolean = false;

  

  @Output() heladosEmitter: EventEmitter<any> = new EventEmitter();

  // @Input() listaHelados: any;

  @Input() unHelado: Helado;

  constructor(private _servicio:HeladosService) {
    
    // this._servicio.ServiceTraerHelados().subscribe(data => {   
    //   this.listaHelados = JSON.parse(data._body);
    // })
    
  }


  ngOnInit() {}

  AltaHelado(){
    this.helado = new Helado('Mascarpoe','Crema',1);
    console.log(this.helado);
    this._servicio.ServiceAltaHelado(this.helado)
    .subscribe()
    ;
  
  }

  MostrarUnHelado(idHelado){
    
    this.heladosEmitter.emit(idHelado); 
  }

  // MostrarHeladosComponent()
  // {
  //   this.heladosEmitter.emit()
  // }

}

