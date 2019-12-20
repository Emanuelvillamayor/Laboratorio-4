import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  /*CODIGO FUNCIONANDO
  
  @Input()
  tema: string;
  @Input()
  cuestionario: string;
  
  @Output() emiterPregunta:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  funcionContador()
  {
    this.emiterPregunta.emit();
  }

  */

 @Input() temaEnPregunta: string;
 @Input() cuestionarioEnPregunta: string;
 
 @Output() emiterPregunta:EventEmitter<any> = new EventEmitter();

 constructor() { }

 ngOnInit() {
 }

 funcionContador()
 {
   this.emiterPregunta.emit();
 }




}
