import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../auth/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marca: string;
  tipo: string;
  modelo: number;
  color: string;

  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  cargarAuto() {

    this.userService.setAuto(this.marca, this.tipo, this.modelo, this.color);

    this.userService.crearAuto().subscribe( arg => {
      if (arg['error'] !== 'Acceso prohibido') {
        
        alert('Auto cargado con exito!');

        // si existe el token , nos dirije al home
       // this.router.navigate(['home']);
      } else {
        alert('Error al cargar auto!');
      }
      console.log(arg);
    }, e => { console.log(e); } );

  }

  

}
