export class Curriculo {
    id: number;
    nome: string;
    contato: string;
    area: string;
    cargaHoraria: string;
    salario: string;

    constructor(id: string,
        nome: string,
        contato: string,
        area: string,
        cargaHoraria: string,
        salario: string) {

        this.nome = nome;
        this.contato = contato;
        this.area = area;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }
}