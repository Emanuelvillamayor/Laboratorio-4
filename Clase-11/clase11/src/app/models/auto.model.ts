

export class AutoModel {
    marca: string;
    modelo: number;
    color:string;
    tipo:string
  
    getJsonAuto() {
     const auto = {auto: {marca: this.marca, modelo: this.modelo, color: this.color, tipo: this.tipo}};
     return auto;
    }
  
  }