import { ClienteMenuGuard } from './componentes/cliente-menu/cliente-menu.guard';
import { ClienteMenuComponent } from './componentes/cliente-menu/cliente-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'cliente-menu',component:ClienteMenuComponent, canActivate : [ClienteMenuGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
