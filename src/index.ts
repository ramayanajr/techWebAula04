import { input } from "@inquirer/prompts";
import { Personagem } from "./models/Personagem"
import HelloWorldNPM from 'hello-world-npm';
import play from "./controller/play";

// console.log('Teste')

// let p1 = new Personagem('Olga', 'CapaMagica', 10, 'Mago')
// console.log(p1)

// let p2 = new Personagem('Larissa', 'ArcoSagrado', 11, 'Arqueiro')

// console.log('Ataque Olga -> Larissa', p1.ataque(p2))

console.log(HelloWorldNPM.helloWorld())

play()