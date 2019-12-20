import { ClientesComponent } from './../Components/principal/clientes/clientes.component';
import { ServiciosComponent } from './../Components/principal/servicios/servicios.component';
import { PrincipalComponent } from './../Components/principal/principal.component';
import { LoginComponent } from './../Components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Common/auth.guard';
import { EstadisticasComponent } from '../Components/principal/estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', redirectTo: 'Principal', pathMatch: 'full' },
  { path: 'Principal', component: PrincipalComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Cliente', 'Vendedor', 'Administrador']},
    children: [
      { path: '', redirectTo: 'Compras', pathMatch: 'full' },
      {
        path: 'Compras',
        component: ServiciosComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Cliente', 'Vendedor', 'Administrador'] }
      },
      {
        path: 'Productos',
        component: ClientesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Vendedor', 'Administrador'] }
      },
      {
        path: 'Estadisticas',
        component: EstadisticasComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      },
    ]
  },
  {
    path: 'Login', component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ],
  declarations: [
  ]
})
export class AppRoutingModule { }
