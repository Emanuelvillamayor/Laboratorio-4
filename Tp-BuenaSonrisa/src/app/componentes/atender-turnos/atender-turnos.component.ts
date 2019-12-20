import { Component, OnInit} from '@angular/core';
import { SonrisaService } from 'src/app/servicios/sonrisa.service';
import { map } from 'rxjs/operators';
import { Turno } from 'src/app/modals/turno';
import {Reseña} from 'src/app/modals/reseña';
@Component({
  selector: 'app-atender-turnos',
  templateUrl: './atender-turnos.component.html',
  styleUrls: ['./atender-turnos.component.scss']
})
export class AtenderTurnosComponent implements OnInit {
  
  turnos = []
  turnosRef;
  primerTurno : Turno;
  mostrarTabla : boolean = false;
  texto : string;
  dismiss : string;
  botonResenia : boolean = true;
  constructor(private sonrisaService : SonrisaService) { }

  ngOnInit() {
    this.turnosRef = this.sonrisaService.turnoRef.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Turno;
        data.id = a.payload.doc.id;
        return data;

      })
    }));
    this.turnosRef.subscribe(data =>{
      this.turnos = [];
      data.forEach(element =>{
        if(element.especialista.correo == (JSON.parse(localStorage.getItem("entidad_logueada"))).correo && element.estado == "pendiente"){
          this.turnos.push(element);
        }
      })
      console.log(this.turnos);
      if(this.turnos.length != 0){
        this.primerTurno = this.turnos[0];
        this.mostrarTabla = true;
      }else{
        this.mostrarTabla = false;
      }
    })

  }
  atender(){
    this.primerTurno.estado = "atendido";
    this.sonrisaService.turnoRef.doc(this.primerTurno.id).update(this.primerTurno);
  }
  ausente(){
    this.primerTurno.estado = "ausente";
    this.sonrisaService.turnoRef.doc(this.primerTurno.id).update(this.primerTurno);
  }
  enviarResenia(){
    console.log("Estoy por eviar la reseña");
    let reseña  : Reseña = {
        idTurno : this.primerTurno.id,
        especialista : this.primerTurno.especialista,
        paciente : this.primerTurno.paciente,
        texto : this.texto
  
  
      }
      this.sonrisaService.reseñaRef.add(reseña);
      this.atender();
      this.texto = "";
  }
  verificarResenia(){
    console.log(this.texto);
    if(this.texto == undefined || this.texto == ""){
       this.botonResenia = true;
    }
    else{
      this.botonResenia = false;
    }
  }

}
