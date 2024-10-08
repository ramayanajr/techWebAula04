"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const prompts_1 = require("@inquirer/prompts");
async function default_1() {
    console.log('Inicialização do Jogo ... ');
    const answer = await (0, prompts_1.input)({ message: 'Digite seu nome:' });
    console.log('Resposta1', answer);
    const answer2 = await (0, prompts_1.input)({ message: 'Digite seu sobrenome:' });
    console.log('Resposta2', answer2);
}
