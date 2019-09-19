import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {
    const things = db.collection('users').valueChanges();
   // things.subscribe(console.log);
  }
}
