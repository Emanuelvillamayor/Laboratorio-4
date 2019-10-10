
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (public http: HttpClient) {}

  private user = new UsuarioModel();

  public isAuthenticated() {

    if (this.user.nombre === 'lucas') {
      return true;
    } else { return false; }

  }

  public getUser() {
    return this.user;
  }

  public setUser(email, nombre) {
    this.user.email = email;
    this.user.nombre = nombre;
  }

  login() {
    let  cliente = {cliente:{user:this.user.nombre,pass:this.user.email}};
    return this.http.post('http://192.168.2.85:3003/login', cliente);
  }


  // va a tener un objeto user con todos los datos necesarios publicos (nombre,email)
  // despues login que ba a ir a algun lado y devuelve estos datos
  // el guard lo que ahce es ir al userService el cual va a tener un metodo isAuthenticated() y si esta autenticado
  // que me haga disponible al user , tambien tengo un GetUser()
}
