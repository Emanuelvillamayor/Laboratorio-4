import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  public listado = [
    {nombre: 'pedro', anagrama: 'poder'},
    {nombre: 'marta', anagrama: 'matar'},
    {nombre: 'teresa', anagrama: 'aretes'},
    {nombre: 'mora ', anagrama: 'roma'},
    {nombre: 'enrique', anagrama: 'quieren'},
    {nombre: 'mariano', anagrama: 'armonia'},
    {nombre: 'eduardo', anagrama: 'deudora'},
    {nombre: 'nicolas', anagrama: 'colinas'},
    {nombre: 'sergio', anagrama: 'riesgo'},
    {nombre: 'alvaro', anagrama: 'valora'},
    {nombre: 'monica', anagrama: 'camino'},
    {nombre: 'ricardo', anagrama: 'criador'},
    {nombre: 'alan', anagrama: 'lana'},
  ];

  constructor() { }
}
