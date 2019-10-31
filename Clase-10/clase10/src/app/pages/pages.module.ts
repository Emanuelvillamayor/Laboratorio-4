import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ArchivosComponent } from './archivos/archivos.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, ErrorComponent, ArchivosComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ]
})
export class PagesModule { }
