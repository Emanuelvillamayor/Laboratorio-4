import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'tp';
  email: string;
  password: string;

  mostrarAlert = false;
  mensajeAlert = '';

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

   // si no se completan ambos inputs se mantiene desactivado el boton de enviar
   checkEmptyInputs() {
    if (this.email && this.password) {
      return false;
    } else {
      // this.mostrar = true;
      return true;
    }
  }

  OnSubmitLogin() {
    this.authService.login(this.email, this.password).then(res => {
      this.authService.user.email = this.email;
      
      this.router.navigate(['/home/descripcion']);
      
    // }).catch(err => alert('Los datos son incorrectos o no existe el usuario') );
  }).catch(err => this.ngValidarError(err.code));
  }

    //  valida errores que se dan desde firebase al loguearse
  ngValidarError( err ) {
    console.log(err);
    switch (err) {
        case 'auth/argument-error':
          err = 'Debe completar todos los campos';
          break;
        case 'auth/invalid-email':
            err = 'Formato de email no correcto';
            break;
        case 'auth/user-not-found':
            err = 'Usuario no valido';
            break;
        case 'auth/wrong-password':
              err = 'Contraseña incorrecta';
              break;
        default:
          err = 'ERROR';
          break;
      }

    this.mostrarAlerta(err);
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

}
