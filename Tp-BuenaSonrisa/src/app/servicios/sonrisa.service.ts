import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import { Entidad } from '../modals/entidad';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Turno } from '../modals/turno';
import { Reseña } from '../modals/reseña';

@Injectable({
  providedIn: 'root'
})
export class SonrisaService {

  entidadRef : AngularFirestoreCollection<Entidad>
  turnoRef : AngularFirestoreCollection<Turno>;
  reseñaRef : AngularFirestoreCollection<Reseña>;
  constructor(private nube : AngularFireStorage , private bd : AngularFirestore , private fireAuth : AngularFireAuth,private router : Router) { 
    this.entidadRef = this.bd.collection("entidades");
    this.turnoRef = this.bd.collection("turnos" ,ref => ref.orderBy("fecha","asc").orderBy("horario","asc"));
    this.reseñaRef = this.bd.collection("reseñas");
    
  }
  subirArchivo(file:any , path : string){
    return this.nube.upload(path,file);
  }
  traerArchivo(path : string){
    return this.nube.ref(path).getDownloadURL();
  }
  async agregarEntidad(obj : Entidad){
    try{
      const result =  await this.fireAuth.auth.createUserWithEmailAndPassword(obj.correo,obj.clave);
      if(result != null){
        this.entidadRef.add(obj);
      }
    }
    catch(e){
      throw e;
    }
    
  }
  async iniciarSesion(obj : Entidad){
     try{
        const result = await this.fireAuth.auth.signInWithEmailAndPassword(obj.correo,obj.clave);
        result.user.getIdToken().then(token =>{
          localStorage.setItem("token" , token);
          this.guardarEntidadLogueada(obj);

        })
     }
     catch(e){
       throw e;
     }
  }
  guardarEntidadLogueada(obj : Entidad){
    this.entidadRef.valueChanges().subscribe(data =>{
      console.log(data);
      data.forEach(element=>{
       if(element.correo == obj.correo){
          localStorage.setItem("entidad_logueada",JSON.stringify(element));
          if(element.perfil == "cliente"){
            this.router.navigate(["/home/turno"]);
          }
          else if(element.perfil == "especialista"){
            this.router.navigate(["/home/atender"]);
          }
          else if(element.perfil == "admin"){
            this.router.navigate(["/registro"]);
          }
       }
      })
 })
}
}
