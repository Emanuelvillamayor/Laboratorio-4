import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router : Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if((JSON.parse(localStorage.getItem("entidad_logueada"))).perfil == "admin"){
      return true;
    }
    else if((JSON.parse(localStorage.getItem("entidad_logueada"))).perfil == "cliente"){
       this.router.navigate(["/home/turno"]);
    }
    else if((JSON.parse(localStorage.getItem("entidad_logueada"))).perfil == "especialista"){
      this.router.navigate(["/home/atender"]);
   }
    else{
      this.router.navigate(["/login"]);
    }
    
      
  }
  
}
