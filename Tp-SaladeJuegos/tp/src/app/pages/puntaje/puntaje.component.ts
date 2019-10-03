import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css']
})
export class PuntajeComponent implements OnInit {

 
  usuarios: UsuarioModel[] = [];
  usuario: UsuarioModel;
  constructor(public usuarioService: AuthService ) { }

  ngOnInit() {
    this.usuarioService.getUsuario()
    .subscribe (resp => {
      // le asigno el array de usuarios de la BD
      this.usuarios = resp;
      this.usuario = this.usuarioService.user;
    });
  }

}
