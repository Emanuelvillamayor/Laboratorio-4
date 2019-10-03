import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../servicios/auth.service';
import { timer } from 'rxjs';
@Component({
  selector: 'app-adivinamoneda',
  templateUrl: './adivinamoneda.component.html',
  styleUrls: ['./adivinamoneda.component.css']
})
export class AdivinamonedaComponent implements OnInit {

  imagenIzquierda = '../../../assets/imagenes/puñoizq.png';
  imagenDerecha = '../../../assets/imagenes/puñoder.png';

  contadorPierde = 0;
  contadorGana = 0;

  mostrarAlert = false;
  mensajeAlert = '';

  disableIzq = false;
  disableDer = false;

  usuario: UsuarioModel;

  nombre = '';

  constructor(public usuarioService: AuthService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.user;
    this.nombre = this.usuarioService.user.nombre;
  }

  OnClickIzquierda() {
    // random entre 1 y 2
  let  random = Math.floor(Math.random() * 2) + 1;

  if (random === 1) {
    this.mostrarAlerta(`Has adivinado (ganas)${this.usuario.nombre}!`);
    this.imagenIzquierda = '../../../assets/imagenes/abiertaizqmoneda.png';
    this.imagenDerecha = '../../../assets/imagenes/abiertader.png';
    this.usuario.puntajemoneda = this.usuario.puntajemoneda + 1;
    this.usuario.puntaje = this.usuario.puntaje + 1;

    this.actualizarUsuario();
    this.contadorGana ++;
  } else {
    this.mostrarAlerta(`No has adivinado (pierdes) ${this.usuario.nombre}!`);
    this.imagenIzquierda = '../../../assets/imagenes/abiertaizq.png';
    this.imagenDerecha = '../../../assets/imagenes/abiertadermoneda.png';
    this.contadorPierde ++;
  }
  this.disableIzq = true;
  this.disableDer = true;

  timer(2000).subscribe(() => {
    this.reseteoImagenes();
    this.disableIzq = false;
    this.disableDer = false;
  });

  }

  OnClickDerecha() {
        // random entre 1 y 2
  let  random = Math.floor(Math.random() * 2) + 1;

  if (random === 1) {
    this.mostrarAlerta(`Has adivinado (ganas) ${this.usuario.nombre}!`);
    this.imagenIzquierda = '../../../assets/imagenes/abiertaizq.png';
    this.imagenDerecha = '../../../assets/imagenes/abiertadermoneda.png';
    this.usuario.puntajemoneda = this.usuario.puntajemoneda + 1;
    this.usuario.puntaje = this.usuario.puntaje + 1;

    this.actualizarUsuario();
    this.contadorGana ++;
  } else {
    this.mostrarAlerta(`No has adivinado (pierdes) ${this.usuario.nombre}!`);
    this.imagenIzquierda = '../../../assets/imagenes/abiertaizqmoneda.png';
    this.imagenDerecha = '../../../assets/imagenes/abiertader.png';
    this.contadorPierde ++;
  }
  this.disableIzq = true;
  this.disableDer = true;

  timer(2000).subscribe(() => {
    this.reseteoImagenes();
    this.disableIzq = false;
    this.disableDer = false;
  });
  }

    // muestro el alert
    mostrarAlerta(err) {
      this.mostrarAlert = true;
      this.mensajeAlert = err;
    }
  
    // cuando doy click al icono de "x" para cerrarlo 
    noMostrarAlert() {
      this.mostrarAlert = false;
    }

    reseteoImagenes() {
      this.imagenIzquierda = '../../../assets/imagenes/puñoizq.png';
      this.imagenDerecha = '../../../assets/imagenes/puñoder.png';
    }

    actualizarUsuario() {
      this.usuarioService.actualizarUsuario(this.usuario)
      .subscribe ( resp => {
      });
    }

    
}
