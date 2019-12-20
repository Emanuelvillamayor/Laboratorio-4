import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {environment} from './../environments/environment'
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { HomeComponent } from './componentes/home/home.component';
import { TurnoComponent } from './componentes/turno/turno.component';
import { MisTurnosComponent } from './componentes/mis-turnos/mis-turnos.component';
import { AtenderTurnosComponent } from './componentes/atender-turnos/atender-turnos.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { EstadosPipe } from './pipes/estados/estados.pipe';
import { DescargaComponent } from './componentes/descarga/descarga.component'
import { Angular2CsvModule } from 'angular2-csv';
import { FechaPipe } from './pipes/fecha/fecha.pipe';
import { RecaptchaModule } from 'ng-recaptcha';
import { MiCaptchaComponent } from './componentes/mi-captcha/mi-captcha.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    TurnoComponent,
    MisTurnosComponent,
    AtenderTurnosComponent,
    EncuestaComponent,
    CabeceraComponent,
    EstadosPipe,
    DescargaComponent,
    FechaPipe,
    MiCaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    Angular2CsvModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
