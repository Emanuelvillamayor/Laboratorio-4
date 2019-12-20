import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClinteService } from './clinte.service';
import { LoginService } from '../login/login.service';
import { Auto } from '../../modals/auto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente-menu',
  templateUrl: './cliente-menu.component.html',
  styleUrls: ['./cliente-menu.component.css']
})
export class ClienteMenuComponent implements OnInit {

  auto : Auto = new Auto();
  autos : Auto[];
  autosTodos : Auto[];

  autosLocalidad : Auto[];
  autosConcesio : Auto[];
  autosTipo: Auto[];

  usuarioActual;
  razonSocial;
  localidad;
  error : boolean;
  mensajeError : string;
  cargando: boolean;
  mensaje: boolean;
  filtro : string = 'n';

  listaDeTipos : string[] = [];
  listaDeLocalidades : string[] = [];
  listaDeConcesionarias : string[] = [];

  suscrive : any;
  constructor(private cliente : ClinteService, private login : LoginService) { }

  ngOnInit() {
  this.razonSocial = localStorage.getItem('RazonSocial');
  this.localidad = localStorage.getItem('localidad');
   this.usuarioActual = this.login.emailAcutual();
   this.auto.usuario = this.usuarioActual;
   this.auto.localidad = this.localidad;
   this.auto.foto = "";
   this.suscrive = this.cliente.traerMisAutos().subscribe(
      autos =>{
        this.autos = autos;
        // console.log(this.autos);
      }
   )

   this.cliente.traerAutos().subscribe(
    autos =>{
      this.autosTodos = autos;
      // console.log(this.autos);
    }
 )
  }

  ngOnDestroy() {
    console.log("destroi");
    localStorage.clear();
    this.suscrive.unsubscribe();
    this.autos = [];
  }

  cambiarFiltro(tipo)
  {
    switch (tipo) {
      case 'v':
        this.filtro = 'v';
        this.listaTiposFiltrar();
        break;
        case 'l':
          this.filtro = 'l';
          this.listaLocalidadesFiltrar();
          break
    case 'c':
      this.filtro = 'c';
      this.listaConcesionariasFiltrar();
      break;
    }
  }

  filtrarPorParametroLocalidad(e)
  {
    console.log(e.path[0].value);
    let local = e.path[0].value;
    this.autosLocalidad = this.autosTodos.filter(dato => dato.localidad === local);
  }

  filtrarPorParametroTipo(e)
  {
    console.log(e.path[0].value);
    let tipo = e.path[0].value;
    this.autosTipo = this.autosTodos.filter(dato => dato.tipo === tipo);
  }

  filtrarPorParametroConcesio(e)
  {
    console.log(e.path[0].value);
    let conce = e.path[0].value;
    this.autosConcesio = this.autosTodos.filter(dato => dato.usuario === conce);
  }

  

  async listaLocalidadesFiltrar()
  {
    await this.autosTodos.forEach(
      auto=>(
        this.listaDeLocalidades.push(auto.localidad)
      )
    )
      this.listaDeLocalidades = this.listaDeLocalidades.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
      // console.log(this.listaDeLocalidades);
  }

  async listaTiposFiltrar()
  {
    await this.autosTodos.forEach(
      auto=>(
        this.listaDeTipos.push(auto.tipo)
      )
    )
      this.listaDeTipos = this.listaDeTipos.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
      // console.log(this.listaDeLocalidades);
  }

  async listaConcesionariasFiltrar()
  {
    await this.autosTodos.forEach(
      auto=>(
        this.listaDeConcesionarias.push(auto.usuario)
      )
    )
      this.listaDeConcesionarias = this.listaDeConcesionarias.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
      // console.log(this.listaDeConcesionarias);
  }

  async AltaAutoCliente()
  {
    if(this.auto.anio == null || this.auto.kilometros == null || this.auto.marca == null || this.auto.modelo == null || this.auto.tipo == null)
    { 
      this.error = true;
      this.mensajeError = "Error! complete todos los campos para poder registrar un auto";
    }
    else{
      this.error = false;
      this.cargando = true;
      this.mensajeError = "Cargando auto... por favor espere";
      await this.cliente.altaAuto(this.auto);
      this.error = false;
      this.cargando = false;
      this.mensaje = true;
      this.mensajeError = "Registro exitoso!";
     
    }
  }

  getDatosTabla()
  {
    let tabla = document.getElementById('tabla');
    // console.log('tabla en cliente' + tabla);
    return tabla;
  }

  downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

  exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    this.downloadCSV(csv.join("n"), filename);
}



}
