export class Helado {
  
  public id_Helado: number;
	public sabor: string;
 	public tipo: string;
  public kilos: number;
  public rutadefoto: string;

  constructor(sabor:string, tipo:string, kilos:number) {
    this.sabor = sabor;
    this.tipo = tipo;
    this.kilos = kilos;
  }


}
