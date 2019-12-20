import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteMenuGuard implements CanActivate {

  constructor(private rutas : Router)
  {

  }


  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    let token = localStorage.getItem('token')
    if( token != null){
      return true;
    }
    else{
      this.rutas.navigate(['/']);
      return false;
    }
  }
  
}
