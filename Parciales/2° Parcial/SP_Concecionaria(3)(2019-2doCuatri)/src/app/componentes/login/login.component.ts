import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas : Router,
    private loginServi : LoginService) { }


  correo : string = "";
  clave : string = "";
  error : boolean = false;
  mensajeError : string = "";
  cargando : boolean = false;
  capcha : boolean = false;
  

  async ingresar()
  {
    if(this.correo == "" || this.clave == "")
    {
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder ingresar"
    }
    else{
      if(this.capcha){
        this.error = false;
        this.cargando = true;
        let respuesta = await this.loginServi.ingresar(this.correo,this.clave);
        switch (respuesta) {
        case "The email address is badly formatted.":
            this.error = true;
            this.cargando = false;
          this.mensajeError = "Error! El correo electronico tiene un formato incorrecto.";
          break;
        case "The password is invalid or the user does not have a password.":
            this.error = true;
            this.cargando = false;
          this.mensajeError = "Error! La contraseña es incorrecta";
          break;
        case "There is no user record corresponding to this identifier. The user may have been deleted.":
          this.error = true;
          this.cargando = false;
          this.mensajeError = "Error! la cuenta con la que intenta ingresar no existe";
          break;
          default:
            let promesa = await this.loginServi.traerUsuario(this.correo).subscribe(
              respuesta =>{ 
                this.error = false;
                this.cargando = false;
                console.log(respuesta);
                localStorage.setItem("RazonSocial",respuesta['0']['razonSocial']);
                localStorage.setItem("localidad",respuesta['0']['localidad']);
                console.log(localStorage.getItem('localidad'));
                this.rutas.navigate(["/cliente-menu"]);
                promesa.unsubscribe();
                
              }
              )
              break;
            }
      }
      else{
        this.error = true;
        this.mensajeError = "Error! Complete el recapcha";
      }
    }
          // console.log(this.correo + this.clave);
  }

  registro()
  {
    this.rutas.navigate(['/registro']);
  }

  completarInput(cuenta)
  {
    this.clave = '123456';
    switch (cuenta) {
      case 'c1':
        this.correo = 'concesionarias@uno.com';
        break;
      case 'c2':
        this.correo = 'concesionarias@dos.com';
        break;
      case 'c3':
        this.correo = 'concesionarias@tres.com';
        break;
    }
  }

  verSalida(e)
  {
    this.capcha = e;
  }

  ngOnInit() {
    this.loginServi.cerrarSesion();
  }

}
