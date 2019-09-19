import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ErrorComponent } from './error/error.component';
import { DetallesComponent } from './detalles/detalles.component';
import { Routes, RouterModule } from '@angular/router'; // importamos manualmente


@NgModule({
  declarations: [HomeComponent, ClientesComponent, ErrorComponent, DetallesComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class PagesModule { }
