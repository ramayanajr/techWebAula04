// Nome
// Vestimenta
// Poder
// Categoria
// Classificação

export class Personagem {
    private nome: string
    private vestimentaNome: string
    private vestimentaPoder: number
    private classe: string
    
    constructor(nome: string, vestimentaNome: string, vestimentaPoder: number, classe: string) {
        this.nome = nome
        this.vestimentaNome = vestimentaNome
        this.vestimentaPoder = vestimentaPoder
        this.classe = classe
    }

    getPoder() {
        return this.vestimentaPoder
    }

    ataque(rival: Personagem) {
        return rival.getPoder() - this.vestimentaPoder;
    }
}