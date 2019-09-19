

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes agregados manualmente
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
const routes: Routes = [
  {
    path: '',
    redirectTo : 'home',
    // component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    children: [
      {
        path: 'detalles/:id',
        component: DetallesComponent,
      }
    ]
  },
  // {
  //   path: 'detalles/:id',
  //   component: DetallesComponent,
  // },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'detalles',
    component: DetallesComponent,
  },
  {
    path: '**',
    redirectTo : 'error',
    // component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
