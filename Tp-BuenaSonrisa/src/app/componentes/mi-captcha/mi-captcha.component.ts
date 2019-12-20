import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mi-captcha',
  templateUrl: './mi-captcha.component.html',
  styleUrls: ['./mi-captcha.component.scss']
})
export class MiCaptchaComponent implements OnInit {

  @Output()verificar = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  resolved(event){
    this.verificar.emit(event);
  }

}
