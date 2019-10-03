import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject, isRejected } from 'q';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new UsuarioModel();


  private url = 'https://tplab-f3767.firebaseio.com';

  constructor(private AFauth: AngularFireAuth, public http: HttpClient) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {

      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(us => {
        resolve(us);
      }).catch(err => rejected(err));
    });
  }

  desloguearse() {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.signOut().then(res => {
      }).catch(err => reject(err));
    });
  }

  getUsuario() {
    return this.http.get(`${this.url}/usuarios.json`)
    .pipe(
      // map( resp => this.crearArregloUsuario(resp) )
      // el codigo anterior puedo resumirlo asi :
      map(this.crearArregloUsuario)
    );
  }

    // filtro el get para transformarlo en arreglo
    private crearArregloUsuario(usuariosObj: object) {
      const usuarios: UsuarioModel [] = [];
  
     // console.log( usuariosObj );
  
      if ( usuariosObj === null) { return []; }
  
      Object.keys(usuariosObj).forEach( key => {
  
        const usuario: UsuarioModel = usuariosObj[key];
  

        usuarios.push(usuario);
      });
  
      return usuarios;
    }

    actualizarUsuario(usuario: UsuarioModel) {
      return this.http.put(`${this.url}/usuarios/${usuario.id}.json`, usuario);
  
    }
}
