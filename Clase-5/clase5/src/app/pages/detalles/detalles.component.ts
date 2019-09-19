
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// importo servicio
 import { FirebaseService } from './../../servicios/firebase.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  valorChildren: string;
  constructor(private route: ActivatedRoute, public servicio: FirebaseService) {
    // obtengo el valor que paso desde clientes a su "children"
    this.valorChildren = this.route.snapshot.paramMap.get('id');

    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

}
