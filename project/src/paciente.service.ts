import { Injectable} from "@nestjs/common";
@Injectable()
export class PacienteService {

    arregloPacientes: Paciente[] = [];

    crearPaciente(pacientes: Paciente): Paciente[] {
        this.arregloPacientes.push(pacientes);
        return this.arregloPacientes;
    }

    listarTodos() {
        return this.arregloPacientes;
    }



}

export class Paciente {


    constructor(
        public nombre:string,
        public apellido:string,
        public fechaNacimeinto: string,
        public hijos: number,
        public tieneSeguro: boolean
    ){



}

}