import { Component, OnInit } from '@angular/core';
import { PalabrasService } from './palabras.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  constructor(public palabrasService: PalabrasService) { }

  ngOnInit() {
    console.log(this.palabrasService.listado);
  }

}
