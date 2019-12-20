import { Component, OnInit,NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {JwtHelperService} from "@auth0/angular-jwt";


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule,MatMenuModule, MatToolbarModule, MatIconModule],
})

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  helper=new JwtHelperService();
  nombre="";
  tipo="";
  
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("Token")){
      let token = this.helper.decodeToken(localStorage.getItem("Token"));
      this.nombre =token.nombre;
      this.tipo =token.tipo;
    }
  }

}
