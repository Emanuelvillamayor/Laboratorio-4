import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {Observable} from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

//import { HttpClientModule }    from '@angular/common/http';

import { MiHttpService } from './servicios/mi-http.service';
import { HeladosService } from './servicios/heladosService.service';
import { TemaComponent } from './componentes/tema/tema.component';
import { CuestionarioComponent } from './componentes/cuestionario/cuestionario.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeladosComponent } from './componentes/helados/helados.component';
import { TraerUnHeladoComponent } from './componentes/traer-un-helado/traer-un-helado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListadoHeladosComponent } from './componentes/listado-helados/listado-helados.component';  
import { MatTableModule } from '@angular/material/table';  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TablaMatComponent } from './componentes/tabla-mat/tabla-mat.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BorrarBotonComponent } from './componentes/borrar-boton/borrar-boton.component';

const miRuteo = [{path:'pruebaRuteo', component:TemaComponent},
                 {path:'pruebaParcial', component:HeladosComponent},
                 {path:'' , component:AppComponent}
                ]

@NgModule({
  declarations: [
    AppComponent,
    TemaComponent,
    CuestionarioComponent,
    PreguntaComponent,
    HeladosComponent,
    TraerUnHeladoComponent,
    PrincipalComponent,
    ListadoHeladosComponent,
    TablaMatComponent,
    BorrarBotonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(miRuteo)

    //HttpClientModule
    
  ],
  providers: [
    MiHttpService,
    HeladosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
