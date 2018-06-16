class MedicamentoClass{
    constructor(
        public gramosAlIngerir: number,
        public nombre: string,
        public composicion: string,
        public usadoPara: string,
        public fechaCaducidad: string,
        public numeroPastillas: number,
        public pacienteId: string
    ){};
}