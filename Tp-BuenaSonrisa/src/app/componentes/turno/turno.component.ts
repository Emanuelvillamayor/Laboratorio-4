import { Component, OnInit } from '@angular/core';
import { SonrisaService } from 'src/app/servicios/sonrisa.service';
import { Entidad } from 'src/app/modals/entidad';
import { Turno } from 'src/app/modals/turno';
@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss']
})
export class TurnoComponent implements OnInit {
  
  horarioInicio : string = "08:00";
  horarioFin : string = "19:00"; 
  fechaInicial : string;
  fechaFinal : string;
  objTurno = {} as Turno;
  turnos = [];
  especialistas = [];
  especialistasDisp = [];
  espSelect : string = "";
  disabled : boolean = false;
  pedirT : boolean = false;
  mostrarMsj : boolean = false;
  mostrarBoton : boolean = true;
  msj: string;
  constructor(private sonrisaService : SonrisaService) {
      let date = new Date();

      this.fechaInicial = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDay()+1);
      console.log(this.fechaInicial);
      this.fechaFinal = date.getFullYear() + "-12-31";
      console.log(this.fechaFinal);
   }

  ngOnInit() {
      this.sonrisaService.entidadRef.valueChanges().subscribe(data =>{
        data.forEach(entidad =>{
          if(entidad.perfil == "especialista"){
            this.especialistas.push(entidad);
          }
        })
      })
      this.sonrisaService.turnoRef.valueChanges().subscribe(data =>{
        this.turnos = data;
      })
  }
  sinDomingos(){
  }
  verificarFecha(){
    this.especialistasDisp = [];
    // console.log(this.objTurno);
    let fecha = new Date(this.objTurno.fecha);
    let flag = 0;
    console.log("Dia: " + fecha.getDay())
    if(fecha.getDay() == 5){
      this.horarioFin = "14:00";
    }
    else{
      this.horarioFin = "19:00";
    }
    if(this.objTurno.horario && this.objTurno.fecha != undefined)
    this.especialistas.forEach(esp =>{

      this.turnos.forEach(turno =>{
        //Si la fecha y el horario ingresado son del mismo valor que la fecha y horario de un turno, y ademas el paciente es igual al que intenta realizar el turno
        //este no podra volver a pedir un turno 
        //Si la fecha y el horario ingresado no coincide con uno de los turnos, el paciente podra realizar un turno con cualquiera de los especialistas disponibles.
        //Si la fecha y el horario coincide con uno de los turnos, y ademas el paciente que intenta realizar el turno, no tiene ningun turno previamente, se chequeara la disponibilidad
        //del especialista, es decir, que si ese especialista aparece en ese turno de misma fecha y horario, este no estara disponible.
        if(this.objTurno.fecha == turno.fecha && this.objTurno.horario == turno.horario && (JSON.parse(localStorage.getItem("entidad_logueada")).correo == turno.paciente.correo || esp.correo == turno.especialista.correo)){
           flag = 1;
           this.disabled = true;
        }
         
      })
      if(flag == 0){
        console.log("Especialista sin turno asignado en esa fecha y horario, esta libre");
        this.especialistasDisp.push(esp);
        this.disabled = false;
        
      }
      flag = 0;
     
    })
    if(this.especialistasDisp.length > 0){
      this.disabled = false;
    }
    // console.log(this.especialistasDisp);
       
      
    
  }
  registrarTurno(){
    let fecha = new Date(this.objTurno.fecha + " " + this.objTurno.horario);
    let diaIngresado = fecha.getUTCDate();
    let mesIngresado = fecha.getMonth() + 1;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let diaActual = fechaActual.getUTCDate();
    let anioActual = fechaActual.getFullYear();
    console.log(fecha.getFullYear() + "-" + mesIngresado + "-" + diaIngresado + " N°Dia:" + fecha.getDay());
    console.log(anioActual + "-" + mesActual + "-" + diaActual);
    if(this.objTurno.horario && this.objTurno.fecha != undefined  && this.espSelect != ""){
      if(fecha.getDay() != 0 && diaIngresado >= diaActual && mesIngresado >= mesActual && anioActual == fecha.getFullYear()){
        this.objTurno.paciente = JSON.parse(localStorage.getItem("entidad_logueada"));
        this.objTurno.estado = "pendiente";
        this.objTurno.encuesta = false;
        this.agregarEsp(this.espSelect);
        this.sonrisaService.turnoRef.add(this.objTurno);

        //Limpio
        this.objTurno.horario = undefined;
        this.objTurno.fecha = undefined;
        this.especialistasDisp = [];
      }
      else if(fecha.getDay() != 0 && (diaIngresado < diaActual || fecha.getMonth() < mesActual || fecha.getFullYear() < anioActual)){
         console.log("Fecha inválida");
         this.msj = "Fecha inválida, elija un fecha que este dentro del año actual y que no sea pasada";
         this.mostrarMsj = true;
         this.mostrarBoton = false;
         setTimeout(()=>{
          this.mostrarMsj = false;
          this.mostrarBoton = true;
         },3000)
      }
      else{
        console.log("No se puede realizar un turno los domingos");
        this.msj = "No se puede realizar un turno los domingos";
        this.mostrarMsj = true;
        this.mostrarBoton = false;
        setTimeout(()=>{
          this.mostrarMsj = false;
          this.mostrarBoton = true;
        },3000)
      }
      
    }
    else{
      console.log("Por favor complete los datos");
      this.msj = "Por favor complete todos los campos para que pueda realizar un turno";
        this.mostrarMsj = true;
        this.mostrarBoton = false;
        setTimeout(()=>{
          this.mostrarMsj = false;
          this.mostrarBoton = true;
        },3000)
    }
    

    
  }
  agregarEsp(espCorreo : string){
    console.log(espCorreo);
    this.especialistas.forEach(esp =>{
      if(espCorreo == esp.correo){
        this.objTurno.especialista = esp;
      }
    })
  }
  pedirTurno(){
    this.pedirT = true;
  }

}
