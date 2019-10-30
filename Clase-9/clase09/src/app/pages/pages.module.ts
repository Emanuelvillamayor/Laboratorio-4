import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, ErrorComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ]
})
export class PagesModule { }
