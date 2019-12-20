import { Component, OnInit , Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filto',
  templateUrl: './filto.component.html',
  styleUrls: ['./filto.component.css']
})
export class FiltoComponent implements OnInit {

  @Output() cambio = new EventEmitter<any>();
  perfil : string = 'auto';
  constructor() { }

  ngOnInit() {
   this.cambio.emit(this.perfil);
  }
  cambioPerfil(){
    console.log("hoal");
    console.log(this.perfil);
    this.cambio.emit(this.perfil);
  }
}
