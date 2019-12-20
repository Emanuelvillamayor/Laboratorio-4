

export class AutoModel {
    marca: string;
    modelo: number;
    color:string;
    tipo:string
    pathImagen?:string;
  
    getJsonAuto() {
     const auto = {auto: {marca: this.marca, modelo: this.modelo, color: this.color, tipo: this.tipo, path: this.pathImagen}};
     return auto;
    }
  
  }