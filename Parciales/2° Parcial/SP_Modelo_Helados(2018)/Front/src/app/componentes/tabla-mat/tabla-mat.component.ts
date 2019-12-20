import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeladosService } from '../../servicios/heladosService.service';


export interface PeriodicElement {
  id: string;
  sabor: string;
  tipo: string;
  kgrestantes: number;
  funciones : string;
}

@Component({
  selector: 'app-tabla-mat',
  templateUrl: './tabla-mat.component.html',
  styleUrls: ['./tabla-mat.component.css']
})

export class TablaMatComponent implements OnInit {

  @Input('matColumnDef') name: string;
  @Input() sticky: boolean;
  @Input() stickyEnd: boolean;
  @Input() listado:any;

  @Output() heladosEmitter: EventEmitter<any> = new EventEmitter();

  cssClassFriendlyName: string;
  displayedColumns: string[] = ['id', 'sabor', 'tipo', 'kgrestantes','foto', 'funciones'];
  dataSource:any;
 

  
  constructor() 
  {
    this.heladosEmitter.emit();
   }

  ngOnInit() {

  }

  ngOnChanges() 
  {
    console.log("LISTADO", this.listado);
    this.dataSource = this.listado;
  }

  MuestroSeleccion(Idseleccionado:number)
  {
    console.info("Muestro valor seleccionado",Idseleccionado);
  }

}

