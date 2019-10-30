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

    // me redirijo hacia el home el cual ya va a tener un GUARD que valide que el usuario sea corrector
   // this.router.navigate(['home']);

  //  console.log(this.userService.isAuthenticated());
  }

  enviar() {
    this.router.navigate(['home']);
  }

  loginPost() {
    this.userService.login().subscribe( arg => {
      if(arg['token'] != null) {
        this.userService.setToken(arg[ 'token' ]);

        this.userService.getToken();
      }
      console.log(arg);
    }, e => { console.log(e); } );
  }
}
