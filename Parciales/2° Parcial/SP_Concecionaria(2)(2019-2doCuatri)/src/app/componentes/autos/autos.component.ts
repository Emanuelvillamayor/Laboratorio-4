import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/modals/auto';
import { AutoService } from 'src/app/servicios/auto.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  auto : Auto = {marca : "" , modelo : "" , km : 0 , anio : 0 , foto : "" , tipo : "auto" , concesionaria : ""};
  disabled : boolean = true;
  autos = [];
  constructor(private miServicio : AutoService) {
     this.auto.concesionaria = JSON.parse(localStorage.getItem("con_logueada")).razonSocial
  }

  ngOnInit() {
    this.miServicio.autoRef.valueChanges().subscribe(data =>{
      this.autos = [];
      console.log(data);
      data.forEach(element =>{
        if(element.concesionaria == JSON.parse(localStorage.getItem("con_logueada")).razonSocial){
          console.log(element);
          this.autos.push(element);
        }
      })
    })
  }
  agregarAuto(){
    let path = "autos/" + this.auto.marca + "_" + this.auto.modelo;
    this.miServicio.traerArchivo(path).subscribe(data =>{
      this.auto.foto = data;
      this.miServicio.agregarAuto(this.auto);
    })
  }
  subirArchivo(event){

    // this.mostrar = true;
    // this.exito = false;
    let path = "autos/" + this.auto.marca + "_" + this.auto.modelo;
    this.miServicio.subirArchivo(event.target.files[0],path).then(data =>{
      if(data.state == "success"){
          // this.disabled = false;
          // this.mostrar = false;
          // this.exito = true;
          // this.bloquear = false;
      }

    });
  }
  verificar(event){
    console.log(event);
    if(event !== null){
     this.disabled = false;
    }
    else{
      console.log("Ya no es valido");
      this.disabled = true;
    }
  }

}
