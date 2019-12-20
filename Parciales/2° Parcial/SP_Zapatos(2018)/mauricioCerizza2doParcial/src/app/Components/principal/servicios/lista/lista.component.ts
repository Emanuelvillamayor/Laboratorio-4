import { Zapato } from './../../../../Model/Zapato';
import { Component, OnInit, Input } from '@angular/core';
import { ZapatoService } from './../../../../Services/zapato.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  listaZapatos: Zapato[];

  constructor(private zapatoService: ZapatoService) {
    this.cargarLista();
   }

  ngOnInit() {
  }

  cargarLista() {
    this.zapatoService.Listar().subscribe( response => {
      this.listaZapatos = response;
    });
  }

}
