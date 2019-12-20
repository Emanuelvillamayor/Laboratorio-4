import { Injectable } from '@angular/core';
import { HttpBase } from './http-base.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public miHttp: HttpBase, public router: Router) {
  }

  loguear(mail: string, nombre: string, clave: string, perfil: string) {
    const request: Object = {
      mail: mail,
      nombre: nombre,
      clave: clave,
      perfil: perfil
    };
    return this.miHttp.httpPostP('/login', request).then( response => {
      if (response['Estado'] === 'OK') {
        localStorage.setItem('token', response['Token']);
        if (!this.redirectUrl) {
          this.redirectUrl = '/';
        }
        this.router.navigate([this.redirectUrl]);
      }

      return response;
    });
  }

  logout() {
    localStorage.removeItem('token');
  }
}
