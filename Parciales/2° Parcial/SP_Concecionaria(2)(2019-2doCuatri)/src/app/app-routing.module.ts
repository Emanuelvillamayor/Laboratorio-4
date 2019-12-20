import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [
  {path : "registro" , component : RegistroComponent},
  {path : "login" , component :LoginComponent},
  {path : "home" , component : HomeComponent , canActivate : [AuthGuard]},
  {path: "" , redirectTo : "login" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
