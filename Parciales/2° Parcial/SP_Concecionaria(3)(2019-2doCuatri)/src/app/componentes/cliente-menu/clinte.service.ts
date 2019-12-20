import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../modals/usuario';
import { Auto } from '../../modals/auto';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ClinteService {

  colecion: AngularFirestoreCollection<Auto>
  micolecion: AngularFirestoreCollection<Auto>
  constructor(private angularFirestore: AngularFirestore, private login : LoginService) {
    this.colecion = this.angularFirestore.collection<Auto>("autos");
    // console.log("MAIL ACTAUAL" + emailActual);
    // this.micolecion = this.angularFirestore.collection<Auto>("autos", ref => ref.where("usuario","==",this.login.emailAcutual()));
   }


  async altaAuto(auto : Auto)
  {
    this.colecion.add({...auto});
  }

  traerAutos()
  {
    return this.colecion.valueChanges();
  }

  traerMisAutos()
  {
    return this.angularFirestore.collection<Auto>("autos", ref => ref.where("usuario","==",this.login.emailAcutual())).valueChanges();
 
  }


  // datosCliente()
  // {
  //   //console.log(localStorage.getItem('tipo'));
  // }

}
