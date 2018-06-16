import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PacienteController} from "./paciente.controller";
import {PacienteService} from "./paciente.service";
import {MedicamentoService} from "./medicamento.service";

@Module({
  imports: [],
  controllers: [AppController, PacienteController],
  providers: [AppService, PacienteService, MedicamentoService],
})
export class AppModule {}
