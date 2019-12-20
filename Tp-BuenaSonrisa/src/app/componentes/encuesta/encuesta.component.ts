import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SonrisaService } from 'src/app/servicios/sonrisa.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  valor : number = 1;
  valor2 : number = 1;
  texto : string
  botonDes : boolean = true;
  id : string;
  constructor(private route : ActivatedRoute , private sonrisaService : SonrisaService, private router : Router) { 
    this.id =  this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }
  verificarDesc(){
    console.log(this.texto);
    if(this.texto == undefined || this.texto == ""){
       this.botonDes = true;
    }
    else{
      this.botonDes = false;
    }
  }
  enviarEncuesta(){
    this.sonrisaService.turnoRef.doc(this.id).valueChanges().subscribe(data =>{
       console.log(data);
       data['encuesta'] = true;
       this.sonrisaService.turnoRef.doc(this.id).update(data);
       this.router.navigate(["/home/turno"]);
    })
  }
  

}
