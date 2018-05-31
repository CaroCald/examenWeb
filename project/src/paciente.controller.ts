import {Body, Controller, Get, Post} from "@nestjs/common";
import {PacienteService} from "./paciente.service";

@Controller('Usuario')
export class PacienteController {

    constructor(private pacienteService: PacienteService){

    }
    @Get()
    listarTodos(){
        return this.pacienteService.recuperarPacientes();
    }

    @Post()
    crearUsuarios(@Body() bodyParams){
        const paciente = new PacienteClass(bodyParams.nombre, bodyParams.apellido, bodyParams.fechaNacimiento, bodyParams.hijos, bodyParams.tieneSeguro);
        return this.pacienteService.anadirPaciente(paciente);

    }
    @Get('Usuario/:id')
    obtenerUno(){


    }

}