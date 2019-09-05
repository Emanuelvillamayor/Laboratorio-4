export class Persona {
nombre: string;
email: string;
sexo: string;
sueldo: number;
edad: number;
licencia: string;
fecha: Date;

public constructor(nombre: string, email: string, sex: string, sueldo: number, edad: number, licencia: string, fecha: Date) {
    this.nombre = nombre;
    this.email = email;
    this.sexo = sex;
    this.sueldo = sueldo;
    this.edad = edad;
    this.licencia = licencia;
    this.fecha = fecha;
}
}
