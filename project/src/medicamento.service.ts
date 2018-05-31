import {Component} from "@nestjs/common";
@Component()
export class MedicamentoService{

    constructor(medicamentoService: MedicamentoService){

    }
    arregloMedicamento: MedicamentoService[]=[];
    crearMedicamento(medicamento: MedicamentoService): MedicamentoService[]{
        this.arregloMedicamento.push(medicamento);
        return this.arregloMedicamento;
    }






}