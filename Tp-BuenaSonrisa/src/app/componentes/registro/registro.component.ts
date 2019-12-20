import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/modals/entidad';
import { SonrisaService } from 'src/app/servicios/sonrisa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  entidad = {} as Entidad;
  disabled : boolean = true;
  tipo : string = "password";
  msj : string = "";
  mostrarMsj : boolean = false;
  mostrarBoton : boolean = true;;
  constructor(private sonrisaService : SonrisaService , private router : Router) { 
    this.entidad.foto = "../../../assets/user.png";
    this.entidad.perfil = "admin";
  }

  ngOnInit() {
  }
  async registrar(){
    
    if(this.validarEntidad()){
      try{
        await this.sonrisaService.agregarEntidad(this.entidad);
        this.mostrarBoton = false;
        setTimeout(() =>{
           this.router.navigate(["/login"]);
        },4000)

      }
      catch(e){
        console.log(e.message);
        if(e.message == "The email address is badly formatted."){
          this.mostrarMsj = true;
          this.msj = "Por favor, ingrese un formato de email válido";
          setTimeout(()=>{
            this.mostrarMsj = false;
          },3000);
         }
         else if(e.message == "Password should be at least 6 characters"){
          this.mostrarMsj = true;
          this.msj = "Por favor, ingrese una contraseña de minimo 6 caracteres";
          setTimeout(()=>{
            this.mostrarMsj = false;
          },3000);
         }
         else if(e.message = "The email address is already in use by another account."){
          this.mostrarMsj = true;
          this.msj = "Correo electrónico ya registrado, utilce otro por favor";
          setTimeout(()=>{
            this.mostrarMsj = false;
          },3000);
         }
      }
      
    }
    else{
      this.mostrarMsj = true;
        this.msj = "Por favor, complete todos los campos";
        setTimeout(()=>{
          this.mostrarMsj = false;
        },3000)
    }
    
  }
  actualizarFoto(event){
    console.log(event.target.files[0])
    if(this.validarEntidad()){
    let path = "perfiles/" + this.entidad.perfil + "_" + this.entidad.correo;
    this.sonrisaService.subirArchivo(event.target.files[0] , path).then( data =>{
      console.log(data)
      if(data.state == "success"){
        console.log("Archivo subido: " + path)
        this.sonrisaService.traerArchivo(path).subscribe(data =>{
          this.entidad.foto = data;
          console.log(this.entidad.foto);;
        })
      }
    })
   }
   else{
    (<HTMLInputElement>document.getElementById("myFile")).value = "";
    this.mostrarMsj = true;
        this.msj = "Por favor, complete todos los campos y seleccione nuevamente una foto";
        setTimeout(()=>{
          this.mostrarMsj = false;
        },3000)
   }
  }
  clave(tipo : string){
    this.tipo = tipo;
  }
  validarEntidad(){
    if(this.entidad.apellido && this.entidad.nombre && this.entidad.correo && this.entidad.clave != null){
      if(this.entidad.apellido && this.entidad.nombre && this.entidad.correo && this.entidad.clave && this.entidad.foto != ""){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  verificar(event){
    console.log(event);
    if(event !== null){
     this.disabled = false;
    }
    else{
      console.log("Ya no es valido");
      this.disabled = true;
    }
  }

}
