
import { Component, OnInit } from '@angular/core';
import { RegistroService } from './registro.service';
import { Router } from '@angular/router';
import {Usuario} from '../../modals/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private registro : RegistroService,
    private ruta : Router) { }

  usuario : Usuario = new Usuario();
  error : boolean = false;
  mensajeError : string = "";
  cargando : boolean = false;
  mensaje : boolean = false;
  capcha : boolean = false;
  
  ngOnInit() {
  }

  async registrarUusario()
  {
    if(this.usuario.email == null|| this.usuario.localidad == null || this.usuario.clave == null || this.usuario.razonSocial == null || this.usuario.telefono == null)
    {
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder registrar una nueva cuenta";
    }
    else
    { 
      if(this.capcha)
      {
        if(this.usuario.email == ''|| this.usuario.localidad == '' || this.usuario.clave == ''  || this.usuario.razonSocial == '' || this.usuario.telefono == null)
        {
          this.error = true;
          this.mensajeError = "Error! complete todos los campos para poder registrar una nueva cuenta";
        }
        else
        {
          this.error = false;
          this.cargando = true;
          this.mensajeError = "Cargando usuario... por favor espere";
          let mensajeAlta = await this.registro.AltaUsuario(this.usuario);
          if(mensajeAlta != null)
          {
            this.cargando = false;
            this.mensaje = false;
            this.error = true;
            this.mensajeError = mensajeAlta;
          }
          else
          {
            this.error = false;
            this.cargando = false;
            this.mensaje = true;
            this.mensajeError = "Registro exitoso!";
          }   
        }
        
      }
      else
      {
        this.error = true;
        this.mensajeError = "Error! Complete el recapcha";
      }
    }
  }

  verSalida(e)
  {
    this.capcha = e;
  }

  volver()
  {
    this.ruta.navigate(['/']);
  }
}
