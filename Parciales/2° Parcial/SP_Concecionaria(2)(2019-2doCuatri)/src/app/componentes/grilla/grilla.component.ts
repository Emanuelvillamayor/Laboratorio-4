import { Component, OnInit, Input } from '@angular/core';
import { AutoService } from 'src/app/servicios/auto.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  autos = []
  usuarios = [];
  @Input() perfil : string;
  constructor(private miServicio : AutoService) { }

  ngOnInit() {
    this.miServicio.autoRef.valueChanges().subscribe(data =>{
      this.autos = data;
    })
  }

}
