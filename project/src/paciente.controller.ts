import {Body, Controller, Get, Post} from "@nestjs/common";
import {PacienteService} from "./paciente.service";

@Controller('Usuario')
export class PacienteController {
    constructor(private _pacienteService: PacienteService){
    }
    @Get()
    mostrarTodos(){
        return this._pacienteService.arregloPacientes;
    }

    @Post()
    crearPacientes(@Body() bodyParams){
        const paciente = new PacienteClass(bodyParams.nombre, bodyParams.apellido, bodyParams.fechaNacimiento, bodyParams.hijos, bodyParams.tieneSeguro);
        return this._pacienteService.crearPaciente(paciente);*/

    }
    @Get('Usuario/:id')
    obtenerUno(){


    }

}