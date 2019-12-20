import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { CaptchaComponent } from './captcha/captcha.component';
import { QRCodeModule } from 'angular2-qrcode';
import { QrComponent } from './qr/qr.component';
@NgModule({
  declarations: [HomeComponent, LoginComponent, ErrorComponent, ArchivosComponent, CaptchaComponent, QrComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,RecaptchaModule, QRCodeModule
  ]
})
export class PagesModule { }
