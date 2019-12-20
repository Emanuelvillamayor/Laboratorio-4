import { Auto } from './../modals/auto';
import { Injectable } from '@angular/core';
import {AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Concesionaria } from '../modals/concesionaria';
import { Router } from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage'
@Injectable({
  providedIn: 'root'
})
export class AutoService {

  concesionariaRef : AngularFirestoreCollection<Concesionaria>
  autoRef : AngularFirestoreCollection<Auto>
  constructor(private bd : AngularFirestore , private auth : AngularFireAuth , private router : Router , private nube : AngularFireStorage) {
    this.concesionariaRef = this.bd.collection("concesionaria");
    this.autoRef = this.bd.collection("autos");
  }
  traerConcesionaria(){
    return this.concesionariaRef;
  }
  async agregarConcesionaria(obj : Concesionaria){
    try{
      let resultado = await this.auth.auth.createUserWithEmailAndPassword(obj.email,obj.clave);
      console.log(resultado);
      this.concesionariaRef.add(obj);
   }
   catch(e){
      console.log(e);
   }


  }
  async iniciarSesion(obj:Concesionaria){
    try{
       let result = await this.auth.auth.signInWithEmailAndPassword(obj.email,obj.clave);
       result.user.getIdToken().then(data =>{
          localStorage.setItem("token" , data);
          localStorage.setItem("con_logueada", JSON.stringify(obj));
          this.router.navigate(["/home"]);
       })
    }
    catch(e){
       console.log(e);
    }
 }
 agregarAuto(obj : Auto){
   this.autoRef.add(obj);
 }
 subirArchivo(file : any,path : string){
  return this.nube.upload(path,file);
}
traerArchivo(path : string){
  return this.nube.ref(path).getDownloadURL();
}

}
