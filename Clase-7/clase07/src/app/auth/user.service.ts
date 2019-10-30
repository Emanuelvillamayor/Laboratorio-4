
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (public http: HttpClient) {}

  private user = new UsuarioModel();
  private helper = new JwtHelperService();

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


  // en este metodo me devuelve un TOKEN si el usuario es correcto o sino ERROR
  login() {

    // creo un JSON de cliente , ya que al pasarlo por POST se transforma solo en string
    let  cliente = {cliente:{user:this.user.nombre,pass:this.user.email}};
    return this.http.post('http://192.168.2.85:3003/login', cliente);
  }

  // este metdo me devuelve un JSON con datos en 1 si esta todo bien y sino ERROR
  register() {

    // creo un JSON de cliente , ya que al pasarlo por POST se transforma solo en string
    let  cliente = {cliente:{user:this.user.nombre,pass:this.user.email}};
    return this.http.post('http://192.168.2.85:3003/clientes', cliente);    
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  decodeToken() {
    return this.helper.decodeToken(localStorage.getItem("token"));
  }


}
