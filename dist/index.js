"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_npm_1 = __importDefault(require("hello-world-npm"));
const play_1 = __importDefault(require("./controller/play"));
// console.log('Teste')
// let p1 = new Personagem('Olga', 'CapaMagica', 10, 'Mago')
// console.log(p1)
// let p2 = new Personagem('Larissa', 'ArcoSagrado', 11, 'Arqueiro')
// console.log('Ataque Olga -> Larissa', p1.ataque(p2))
console.log(hello_world_npm_1.default.helloWorld());
(0, play_1.default)();
