//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  
  /* CODIGO FUNCIONANDO.
  @Input()
  
  tema: string;

  @Output() emiterCuestionario:EventEmitter<any> = new EventEmitter();

  public cuestionario="cuestionariodeinicio";

  constructor() { }

  ngOnInit() {
  }

  funcionCuestionario()
  {
    this.emiterCuestionario.emit();
  }
  */

 @Input() temaEnCuestionario: string;

 @Output() emiterCuestionario:EventEmitter<any> = new EventEmitter();

 public cuestionarioEnCuestionario="cuestionariodeinicio";

 constructor() { }

 ngOnInit() {
 }

 funcionCuestionario()
 {
   this.emiterCuestionario.emit();
 }



}
