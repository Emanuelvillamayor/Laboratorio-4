import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../auth/user.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marca: string;
  tipo: string;
  modelo: number;
  color: string;

  imagen: any;

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  cargarAuto() {

    // guardo el path de la imagen que va a estar formado por el nombre de la carpeta(ubicacion) , la marca , el tipo y el color
    let path = 'imagenes/' + this.marca + '_' + this.tipo + '_' + this.color;

    this.userService.setAuto(this.marca, this.tipo, this.modelo, this.color, path);

    this.userService.crearAuto().subscribe( arg => {
      // si esta todo bien voy a subir ahora la imagen a firebase
      if (arg['error'] !== 'Acceso prohibido') {

        //subo imagen a firebase
        this.subirArchivo(this.imagen , path);

        alert('Auto cargado con exito!');

      } else {
        alert('Error al cargar auto!');
      }
      console.log(arg);
    }, e => { console.log(e); } );

  }

  // guardo la imagen en una variable temporal hasta que el usuario complete todos los datos y suba todo
  leerArchivo(archivo: any) {
    this.imagen = archivo.target.files[0];

    console.log(this.imagen);
  }

  subirArchivo(archivo: any , path: string) {
    this.userService.subirArchivo(archivo, path).then( e => {
      if(e.state === 'success') {
        console.log('imagen cargada');
      } else {
        console.log(e);
      }
    });
  }

  traerArchivo(path: string) {
    this.userService.traerArchivo(path).subscribe( data => {
      console.log(data);
    });
  }

  traerAutos() {
    this.userService.getAuto().subscribe ( data => {
     let dato = data['rta'].pipe(
        map(this.userService.crearArregloAutos)
      );
    });
  }

}
