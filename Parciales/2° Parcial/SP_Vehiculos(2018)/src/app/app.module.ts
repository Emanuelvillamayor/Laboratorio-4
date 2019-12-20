import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//animationes de Angular materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialsModule} from "./materials";
import { SignupComponent,FaltaCamposComponent } from './components/user/signup/signup.component';
import { LoginComponent,MailErrorComponent, NoPassComponent } from './components/user/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MathComponent } from './components/juegos/math/math.component';
import { AppRoutingModule } from "./servicios/app-routing/app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from "./servicios/server.service";
import { ConeccionService } from "./servicios/coneccion.service";
import { TatetiComponent,XComponent,OComponent } from './components/juegos/tateti/tateti.component';
import { PalabrasComponent } from './components/juegos/palabras/palabras.component';
import { InicioComponent } from './inicio/inicio.component';
import { PuntuacionesComponent } from './puntuaciones/puntuaciones.component';
import { SalirComponent } from './salir/salir.component';
import { AutoComponent } from './components/auto/auto.component';
import { SacarTurnoComponent } from './components/sacar-turno/sacar-turno.component';
import { VerTurnosComponent } from './components/ver-turnos/ver-turnos.component';
import { DatosUsuarioComponent } from './components/user/datos-usuario/datos-usuario.component';
import { NombreComponent } from './components/user/nombre/nombre.component';
import { CambiarComponent } from './components/user/cambiar/cambiar.component';
import { CambiarAdminComponent } from './components/user/cambiar-admin/cambiar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    MathComponent,
    MailErrorComponent,
    NoPassComponent,
    FaltaCamposComponent,
    TatetiComponent,
    XComponent,
    OComponent,
    PalabrasComponent,
    InicioComponent,
    PuntuacionesComponent,
    SalirComponent,
    AutoComponent,
    SacarTurnoComponent,
    VerTurnosComponent,
    DatosUsuarioComponent,
    NombreComponent,
    CambiarComponent,
    CambiarAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServerService,ConeccionService],
  bootstrap: [AppComponent],
  entryComponents: [
    MailErrorComponent,
    NoPassComponent,
    FaltaCamposComponent,
    XComponent,
    OComponent
]
})
export class AppModule { }
