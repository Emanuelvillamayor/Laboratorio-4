import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../auth/user.service';
import { RecaptchaModule } from 'ng-recaptcha';
import {QRCodeComponent} from 'angular2-qrcode';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // directives: [QRCodeComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marca: string;
  tipo: string;
  modelo: number;
  color: string;

  captcha: string;
  cadenaQR = 'asd';


  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  cargarAuto() {
    console.log('entra');return;

    this.userService.setAuto(this.marca, this.tipo, this.modelo, this.color);

    this.userService.crearAuto().subscribe( arg => {
      if (arg['error'] !== 'Acceso prohibido') {

        alert('Auto cargado con exito!');

        // si existe el token , nos dirije al home
       // this.router.navigate(['home']);
      } else {
        alert('Error al cargar auto!');
      }
      console.log(arg);
    }, e => { console.log(e); } );

  }

  subirArchivo(archivo: any) {
    this.userService.subirArchivo(archivo.target.files[0]);
  }

  // recibo la info del captcha
  ngProcesarCarga(rta) {
    this.captcha = rta;
  }

  // valido que esten todos los inputs cargados y que el captcha sea correcto
  checkEmptyInputs() {
    if (this.marca && this.tipo && this.color && this.modelo && this.captcha) {

      this.cadenaQR = this.generarCadenaQR();
      return false;
    } else {
      return true;
    }
  }

  generarCadenaQR() {
    console.log('cadena');
    let cadena = {marca: this.marca, modelo: this.modelo, color: this.color, tipo: this.tipo};
    return JSON.stringify(cadena);
  }
}
