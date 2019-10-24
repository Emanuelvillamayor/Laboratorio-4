import { AuthGuard } from './auth/auth.guard';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule  } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
   // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // JwtModule.forRoot({
    //   config: {
    //    // tokenGetter: tokenGetter,
    //     tokenGetter,
    //     whitelistedDomains: ['example.com'],
    //     blacklistedRoutes: ['example.com/examplebadroute/']
    //   }
    // }),
    PagesModule  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
