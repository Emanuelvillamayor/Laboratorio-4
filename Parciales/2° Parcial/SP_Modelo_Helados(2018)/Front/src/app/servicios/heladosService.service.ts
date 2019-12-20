import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';

import { URLSearchParams } from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  metodo: string;

  constructor(public miHttp: MiHttpService) {

  }
 
  public ServiceTraerHelados():Observable<any> {
    return this.miHttp.httpGet("TraerTodosLosHelados", {})
      .pipe(data => { return data; });

  }

  public ServiceAltaHelado(helado):Observable<any> {
    return this.miHttp.httpPost("altaHelado",helado)
        .pipe(data =>{ return data;}); 

  }

  public ServiceTraerUnHelado(idHelado):Observable<any> {
    return this.miHttp.httpGet("TraerUnHelado/"+idHelado, {})
      .pipe(data => { return data; });
  }

  public ServiceDeleteUnHelado(idHelado):Observable<any> {
   
    /*
    return this.miHttp.httpPost("borrarHelado",idHelado)
    .then((data)=>{return data})
    .catch((data)=>{return data})
    */
    
    
  
    return this.miHttp.httpPost("borrarHelado/"+idHelado, {})
      .pipe(data => { return data; });
  }

}
