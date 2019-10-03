import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// este archivo lo creamos nosotros desde enviroments
import { firebaseConfig } from '../environments/environment';

import { AngularFireModule} from '@angular/fire';

// modulo de autenticacion de angular
import { AngularFireAuthModule} from '@angular/fire/auth';

// importo modulo que contiene las demas paginas
import { PagesModule } from './pages/pages.module';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    MatGridListModule,
    HttpClientModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
