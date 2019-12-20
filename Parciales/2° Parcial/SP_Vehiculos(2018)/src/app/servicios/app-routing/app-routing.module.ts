import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import { LoginComponent} from "../../components/user/login/login.component";
import { SignupComponent} from "../../components/user/signup/signup.component";
import { SalirComponent} from "../../salir/salir.component";
import { AutoComponent } from "../../components/auto/auto.component";
import { SacarTurnoComponent } from "../../components/sacar-turno/sacar-turno.component";
import { VerTurnosComponent } from "../../components/ver-turnos/ver-turnos.component";
import { CambiarComponent } from "../../components/user/cambiar/cambiar.component";
import { CambiarAdminComponent } from "../../components/user/cambiar-admin/cambiar-admin.component";
import { ConeccionService } from "../coneccion.service";
 
const rutas : Routes =[
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"salir",component:SalirComponent},
  {path:"cargar",component:AutoComponent,canActivate:[ConeccionService]},
  {path:"sacarTurno",component:SacarTurnoComponent,canActivate:[ConeccionService]},
  {path:"verTurno",component:VerTurnosComponent,canActivate:[ConeccionService]},
  {path:"cli",component:CambiarComponent},
  {path:"admin",component:CambiarAdminComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
