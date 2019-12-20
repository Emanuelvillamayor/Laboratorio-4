import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { AutosComponent } from './componentes/autos/autos.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { DescargaComponent } from './componentes/descarga/descarga.component';
import { GrillaComponent } from './componenentes/grilla/grilla.component';
import { FiltoComponent } from './componentes/filto/filto.component';
import { FiltrarGrillaComponent } from './componentes/filtrar-grilla/filtrar-grilla.component';
import { CambioImgPipe } from './pipes/cambio-img.pipe';
import { MiCaptchaComponent } from './componentes/mi-captcha/mi-captcha.component';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    CabeceraComponent,
    AutosComponent,
    DescargaComponent,
    GrillaComponent,
    FiltoComponent,
    FiltrarGrillaComponent,
    CambioImgPipe,
    MiCaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
