"use strict";
// Nome
// Vestimenta
// Poder
// Categoria
// Classificação
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, vestimentaNome, vestimentaPoder, classe) {
        this.nome = nome;
        this.vestimentaNome = vestimentaNome;
        this.vestimentaPoder = vestimentaPoder;
        this.classe = classe;
    }
    getPoder() {
        return this.vestimentaPoder;
    }
    ataque(rival) {
        return rival.getPoder() - this.vestimentaPoder;
    }
}
exports.Personagem = Personagem;
