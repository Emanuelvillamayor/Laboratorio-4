import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludarComponent } from './Components/saludar/saludar.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './Components/form/form.component';
import { DatosComponent } from './Components/datos/datos.component';
import { FilaComponent } from './Components/fila/fila.component';
import { LicenciaPipe } from './pipes/licencia.pipe';
import { SexoPipe } from './pipes/sexo.pipe';

// importamos el SERVICIO  a mano
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    FormComponent,
    DatosComponent,
    FilaComponent,
    LicenciaPipe,
    SexoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ UserService], // los servicios van dentro de los "providers"
  bootstrap: [AppComponent]
})
export class AppModule { }
