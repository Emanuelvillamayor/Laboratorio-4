import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TatetiComponent } from './tateti/tateti.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PuntajeComponent } from './puntaje/puntaje.component';
import { AdivinamonedaComponent } from './adivinamoneda/adivinamoneda.component';
import { AnagramaComponent } from './anagrama/anagrama.component';

@NgModule({
  declarations: [InicioComponent, HomeComponent, TatetiComponent, DescripcionComponent, PuntajeComponent, AdivinamonedaComponent, AnagramaComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, MatGridListModule
  ]
})
export class PagesModule { }
