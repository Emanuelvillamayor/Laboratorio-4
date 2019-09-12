
import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/clases/persona';
import { UserService } from '../../services/user.service'; // importamos el servicio a mano


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {



  @Input() mostrar: boolean;

  // obtengo el listado de nuestro servicio que anteriormente cargamos desde "saludar.ts"
  listado = this.user.ngGetListado();

  constructor( private user: UserService) { }

  ngOnInit() {

  }



}
