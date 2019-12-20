import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { TurnoComponent } from './componentes/turno/turno.component';
import { ClienteGuard } from './guards/cliente/cliente.guard';
import { AtenderTurnosComponent } from './componentes/atender-turnos/atender-turnos.component';
import { EspecialistaGuard } from './guards/especialista/especialista.guard';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { AdminGuard } from './guards/admin/admin.guard';


const routes: Routes = [
  {path : "registro" , component : RegistroComponent,canActivate : [AuthGuard,AdminGuard] },
  {path : "" , redirectTo : "login" , pathMatch : "full"},
  {path: "login" , component : LoginComponent},
  {path : "home" , component : HomeComponent , canActivate : [AuthGuard],children : [
    {path : "turno" , component : TurnoComponent , canActivate : [ClienteGuard]},
    {path : "atender" , component : AtenderTurnosComponent , canActivate : [EspecialistaGuard]},
    {path : "encuesta/:id" , component : EncuestaComponent , canActivate : [ClienteGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
