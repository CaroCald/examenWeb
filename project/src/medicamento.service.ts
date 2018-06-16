import { Injectable} from "@nestjs/common";
@Injectable()
export class MedicamentoService{

    constructor(medicamentoService: MedicamentoService){

    }
    arregloMedicamento: MedicamentoClass[]=[];
    crearMedicamento(medicamento: MedicamentoClass): MedicamentoClass[]{
        this.arregloMedicamento.push(medicamento);
        return this.arregloMedicamento;
    }

    buscarPaciente(id) {
        const usuarios= this.arregloMedicamento.map(medicamento=>{
            const idBuscada=medicamento.pacienteId;
            return idBuscada;
        });
    }







}