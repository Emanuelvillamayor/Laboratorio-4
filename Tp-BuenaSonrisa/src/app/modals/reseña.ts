import { Entidad } from './entidad';

export interface Reseña{
    idTurno : string,
    paciente : Entidad,
    especialista : Entidad,
    texto : string;
    
}