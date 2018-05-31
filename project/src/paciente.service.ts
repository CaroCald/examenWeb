import {Component} from "@nestjs/common";

@Component()
export class PacienteService {
    constructor(paciente: PacienteClass) {

    }

    arregloPacientes: PacienteClass[] = [];

    anadirPaciente(pacientes: PacienteClass): PacienteClass[] {
        this.arregloPacientes.push(pacientes);
        return this.arregloPacientes;
    }

    recuperarPacientes() {
        return this.arregloPacientes;
    }

    buscarPaciente() {
    }