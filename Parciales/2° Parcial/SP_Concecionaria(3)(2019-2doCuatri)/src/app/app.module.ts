import { ClienteMenuModule } from './componentes/cliente-menu/cliente-menu.module';
import { LoginModule } from './componentes/login/login.module';
import { RegistroModule } from './componentes/registro/registro.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistroModule,
    LoginModule,
    ClienteMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
