import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes agregados manualmente
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { PagesModule } from './pages/pages.module';
import { PuntajeComponent } from './pages/puntaje/puntaje.component';
import { AdivinamonedaComponent } from './pages/adivinamoneda/adivinamoneda.component';
import { AnagramaComponent } from './pages/anagrama/anagrama.component';


const routes: Routes = [
  {
    path: '',
    redirectTo : 'inicio',
    // component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'tateti',
        component: TatetiComponent,
      },
      {
        path: 'descripcion',
        component: DescripcionComponent,
      },
      {
        path: 'puntaje',
        component: PuntajeComponent,
      },
      {
        path: 'adivinamoneda',
        component: AdivinamonedaComponent,
      },
      {
        path: 'anagrama',
        component: AnagramaComponent,
      }
    ]
  },
  {
    path: 'tateti',
    component: TatetiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
