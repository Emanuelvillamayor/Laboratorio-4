import { UserService } from './../../auth/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  nombre;
  password;

  constructor(private userService:  UserService, public router: Router) { }

  ngOnInit() {
  }

  ngCargar() {

    // voy al metodo que carga el objeto user del servicio
    this.userService.setUser(this.email, this.password);

  
    this.loginPost();
  }

    // mando los datos al servicio para validar que el usuario este logueado
    // si esta logueado , al recibir el token  lo guardo en  el localstorage
    // si no esta logueado muestro msj de error
  loginPost() {
    this.userService.login().subscribe( arg => {
      if (arg['token'] != null) {
        this.userService.setToken(arg[ 'token' ]);
        // console.log(arg);

        // si existe el token , nos dirije al home
        this.router.navigate(['home']);
      }
      
    }, e => { console.log(e); } );
  }
}
