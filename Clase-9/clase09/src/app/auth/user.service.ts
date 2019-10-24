
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { Options } from 'selenium-webdriver/safari';

// header para pasarle a auto
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

   helper = new JwtHelperService();

  constructor(public http: HttpClient) {}

  private user = new UsuarioModel();

  public isAuthenticated() {

    if (this.user.nombre === 'lucas') {
      return true;
    } else { return false; }

  }

  public getUser() {
    return this.user;
  }

  public setUser(email, pass) {
    this.user.email = email;
    this.user.pass = pass;
  }

  // retorna el "token" si es correcto o sino retorna error "credenciales invalidas"
  login() {
    const  cliente = {cliente: {user: this.user.email, pass: this.user.pass}};
    return this.http.post('http://192.168.2.32:3003/login', cliente);
  }

  getClientes() {
    const  cliente = {cliente: {user: this.user.email, pass: this.user.pass}};
    return this.http.post('http://192.168.2.32:3003/clientes', cliente);
  }

  setToken( token ) {
    localStorage.setItem('token', token);
  }

  getToken() {

    let token = localStorage.getItem('token');

    // utilizo decoder de jwt que importe e instale
    const decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
    console.log('jwt' + decodedToken);
    console.log('token:' + localStorage.getItem('token')) ;

    return token;

  }

  // le pasamos el token que nos devuelve el login y tambien cualquier otro parametro que inventemos
  // nos devuelve "rta:1" si esta correcto o error "acceso prohibido"
  crearAuto() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token': localStorage.getItem('token'),
      })};


      const  cliente = {cliente: {user: this.user.email, pass: this.user.pass}};
      return this.http.post('http://192.168.2.32:3003/login', cliente , httpOptions);

  }

  // nos devuelve todos los objetos de autos si esta correcto el token que le pasamos registrado
  // o sino error "acceso no autorizado"
  getAuto() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token': localStorage.getItem('token'),
      })};


      const  cliente = {cliente: {user: this.user.email, pass: this.user.pass}};
      return this.http.get('http://192.168.2.32:3003/auto',httpOptions);
  }


  // va a tener un objeto user con todos los datos necesarios publicos (nombre,email)
  // despues login que ba a ir a algun lado y devuelve estos datos
  // el guard lo que ahce es ir al userService el cual va a tener un metodo isAuthenticated() y si esta autenticado
  // que me haga disponible al user , tambien tengo un GetUser()
}
