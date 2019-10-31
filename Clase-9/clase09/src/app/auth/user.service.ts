
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { Options } from 'selenium-webdriver/safari';

// header para pasarle a auto
import { HttpHeaders } from '@angular/common/http';
import { AutoModel } from '../models/auto.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  helper = new JwtHelperService();

  constructor(public http: HttpClient) {}

  private user = new UsuarioModel();
  private auto = new AutoModel();

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

  public setAuto(marca, tipo, modelo, color) {

    this.auto.marca = marca;
    this.auto.tipo = tipo;
    this.auto.color = color;
    this.auto.modelo = modelo;

  }

  // retorna el "token" si es correcto o sino retorna error "credenciales invalidas"
  login() {
    const  cliente = {cliente: {user: this.user.email, pass: this.user.pass}};
    return this.http.post('http://192.168.0.28:3003/login', this.user.getJson());
  }

  postClientes() {

    return this.http.post('http://192.168.2.32:3003/clientes', this.user.getJson());
  }

  getClientes() {
    return this.http.get('http://192.168.0.28:3003/clientes');
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

      // con esto creamos el "header" en el cual pasaremos el token creado por el usuario logueado
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token': localStorage.getItem('token'), // token
      })};


      const  auto = {auto: {color: this.user.email, año: this.user.pass}};
    //  return this.http.post('http://192.168.0.28:3003/login', auto , httpOptions);
    return this.http.post('http://192.168.0.28:3003/auto', this.auto.getJsonAuto() , httpOptions);

  }

  // nos devuelve todos los objetos de autos si esta correcto el token que le pasamos registrado
  // o sino error "acceso no autorizado"
  getAuto() {
    const httpOptions = {
      
       // con esto creamos el "header" en el cual pasaremos el token creado por el usuario logueado
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token': localStorage.getItem('token'),
      })};


      const  cliente = {cliente: {user: this.user.email, pass: this.user.pass}};
      return this.http.get('http://192.168.0.28:3003/auto',httpOptions);
  }



}
