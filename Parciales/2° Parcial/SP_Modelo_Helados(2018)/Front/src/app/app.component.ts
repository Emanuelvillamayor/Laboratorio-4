import { Component } from '@angular/core';
import { HeladosService } from './servicios/heladosService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjerciciosClase';

  constructor(private servicio:HeladosService){

  }

  ngOnInit() {
    //this.servicio.traerJugadores().subscribe(data=>{console.log(JSON.parse(data._body).filter(function(pais){return pais.name == 'Brazil';}));})

    /*
    this.servicio.traerJugadores().subscribe(
        data=>{console.log(JSON.parse(data._body)
          );})

    this.servicio.traerHelados().subscribe(
        data=>{console.log(JSON.parse(data._body)
          );})
*/
// title = 'Practica primer parcial';
// tipo = 'gato'

// mascotas:Array<mascota>;

// constructor() { 

//   this.mascotas = new Array<mascota>();

// }

// ngOnInit() {

// }

// mostrar($event){

//     this.mascotas = $event;

// }

  
        }
  funcionComponent() 
  {
    console.info("Funcion component emitter APP");
  }


}
