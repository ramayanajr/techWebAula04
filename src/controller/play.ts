import { input } from "@inquirer/prompts";

export default async function() {
    console.log('Inicialização do Jogo ... ')
    
    const answer = await input({message: 'Digite seu nome:'});
    console.log('Resposta1', answer)

    const answer2 = await input({message: 'Digite seu sobrenome:'});
    console.log('Resposta2', answer2)

}