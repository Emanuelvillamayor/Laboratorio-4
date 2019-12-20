import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mi-captcha',
  templateUrl: './mi-captcha.component.html',
  styleUrls: ['./mi-captcha.component.css']
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
