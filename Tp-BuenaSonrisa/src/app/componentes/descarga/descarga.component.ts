import { Component, OnInit, Input } from '@angular/core';
import { Turno } from 'src/app/modals/turno';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
  styleUrls: ['./descarga.component.scss']
})
export class DescargaComponent implements OnInit {
  
  @Input()idHtml : string;
  @Input()dataTurnos : Array<Turno>;
  options;
  data = [];
  constructor() { }

  ngOnInit() {
    console.log(this.dataTurnos);
    this.dataTurnos.forEach(turno =>{
      let obj = {
        fecha : turno.fecha,
        horario : turno.horario,
        especialista : turno.especialista.nombre + " " + turno.especialista.apellido,
        paciente : turno.paciente.nombre + " " + turno.paciente.apellido,
        estado : turno.estado
      }
      this.data.push(obj);
    })
    this.options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      headers: ['Fecha', 'Horario' , 'Especialista', 'Paciente' , 'Estado'],
      useBom: true,
      removeNewLines: false,
      keys: []
    };
  }
  descargar(){
    console.log("ID Tabla:" + this.idHtml);
    let doc = new jsPDF('l', 'pt');
    doc.autoTable({html : "#" + this.idHtml});
    doc.save('table.pdf');
  }

}
