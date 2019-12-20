import { Component, OnInit } from '@angular/core';
import { SonrisaService } from 'src/app/servicios/sonrisa.service';
import { Turno } from 'src/app/modals/turno';
import { Reseña } from 'src/app/modals/reseña';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent implements OnInit {

  misTurnos = [];
  resenia : Reseña;
  mostrarModal : boolean = false;
  mostrarDescarga : boolean = false;;
  constructor(private sonrisaService : SonrisaService , private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit() {
    this.sonrisaService.turnoRef.valueChanges().subscribe(data =>{
      console.log(data);
      this.misTurnos = [];
      data.forEach(turno =>{
         if(turno.paciente.correo == JSON.parse(localStorage.getItem("entidad_logueada")).correo){
           this.misTurnos.push(turno);
         }
       })
       if(this.misTurnos.length > 0){
          this.mostrarDescarga = true;
       }
    })
  }
  verResenia(item : Turno){
     this.sonrisaService.reseñaRef.valueChanges().subscribe(data =>{
        data.forEach(resenia =>{
           if(item.id == resenia.idTurno){
              this.resenia = resenia;
           }
        })
        console.log(this.resenia);
        this.mostrarModal = true;
     })
    console.log("Hola");
  }

}
