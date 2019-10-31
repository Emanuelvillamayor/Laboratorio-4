import { ArchivosComponent } from './pages/archivos/archivos.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'home',
    // redirectTo : 'home',
     component: HomeComponent,
   // pathMatch: 'full'
   // implemeto el guard para esta ruta en particular
  // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    // redirectTo : 'home',
    component: LoginComponent,
  },
  {
    path: 'error',
    // redirectTo : 'home',
    component: ErrorComponent,
  },
  {
    path: 'archivos',
    // redirectTo : 'home',
    component: ArchivosComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
