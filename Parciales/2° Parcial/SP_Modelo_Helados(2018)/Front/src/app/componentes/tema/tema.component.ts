import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CuestionarioComponent } from '../cuestionario/cuestionario.component';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  /*  CODIGO FUNCIONANDO
  constructor() { }

  public tema="temadeinicio";
  public contador = 0;

  funcionContador(){
   this.contador++;
  }


  ngOnInit() {
  }

  */

 
 @Output() temaEmiter: EventEmitter<any> = new EventEmitter();
 
 constructor() { }

 public temaEnTema="temadeinicio";
 public contador = 0;

 funcionContador(){
  this.contador++;

  this.temaEmiter.emit();
  
}


 ngOnInit() {
 }




}
