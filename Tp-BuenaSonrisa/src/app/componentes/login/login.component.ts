import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/modals/entidad';
import { SonrisaService } from 'src/app/servicios/sonrisa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  entidad = {} as Entidad;
  mostrarBoton : boolean = true;
  mostrarMsj : boolean = false;
  msj : string = "";
  tipo : string = "password";
  constructor(private sonrisaService : SonrisaService) {
    this.entidad.foto = "../../../assets/user.png"
   }

  ngOnInit() {
    localStorage.removeItem("token");
    localStorage.removeItem("entidad_logueada");
  }
  async iniciarSesion(){
    if(this.entidad.correo && this.entidad.clave != null){
      if(this.entidad.correo && this.entidad.clave != ""){
          try{
            this.mostrarBoton = false;
            await this.sonrisaService.iniciarSesion(this.entidad);
            // setTimeout(()=>{
            //   this.mostrarBoton = 
            // },3000)
          }
          catch(e){
            this.mostrarBoton = true;
             console.log(e);
             if(e.message == "The email address is badly formatted."){
              this.mostrarMsj = true;
              this.msj = "Por favor, ingrese un formato de email válido";
              setTimeout(()=>{
                this.mostrarMsj = false;
              },3000);
             }
             else if(e.message == "The password is invalid or the user does not have a password."){
              this.mostrarMsj = true;
              this.msj = "Contraseña incorrecta";
              setTimeout(()=>{
                this.mostrarMsj = false;
              },3000);
             }
             else if(e.message == "The email address is already in use by another account."){
              this.mostrarMsj = true;
              this.msj = "Correo electrónico ya registrado, utilce otro por favor";
              setTimeout(()=>{
                this.mostrarMsj = false;
              },3000);
             }
             else if(e.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
              this.mostrarMsj = true;
              this.msj = "Datos incorrectos, esta usted registrado?";
              setTimeout(()=>{
                this.mostrarMsj = false;
              },3000);
             }
          }
      }
      else{
        this.msj = "Por favor complete todos los campos.";
       this.mostrarMsj = true;
       setTimeout(() =>{
         this.mostrarMsj = false;
       },3000);
      }
    }
    else{
       this.msj = "Por favor complete todos los campos.";
       this.mostrarMsj = true;
       setTimeout(() =>{
         this.mostrarMsj = false;
       },3000);
    }
  }
  clave(tipo : string){
     this.tipo = tipo;
  }

}
