
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'mi-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  @Output() cargar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  captcha(captchaResponse: string) {
    if (captchaResponse !== '')  {
      this.cargar.emit(captchaResponse);
      // console.log(`Resolved captcha with response: ${captchaResponse}`);
    }
  }

}
