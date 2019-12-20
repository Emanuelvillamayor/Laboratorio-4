import { Entidad } from './entidad';

export interface Turno{
    paciente : Entidad,
    horario : string,
    fecha : string,
    especialista : Entidad
    estado : string
    id? : string
    encuesta : boolean;
}