@@ -22,58 +22,58 @@
// Funções para executar cada uma das tarefas (1,5 ponto);
// Conteúdo de condicionais, laços, funções e objetos bem aplicados (2,0 pontos);

const prompt = require('prompt-sync')();
const prompt = require("prompt-sync")();

// DEFINED VARIABLES

let timeNow = 7; // max 22 start 7 sempre
let timeNow = 7; // max 22 start 7 sempre => Hora do Dia
let day = 1; // max 7
let mode = 0;
let action = ``;
let mode = 0; // Dificuldade
let action;
let death = false;
let max = false;
const actions = [
    `fazer comida`,
    `comer fastfood`,
    `estudar`,
    `assistir serie`,
    `trabalhar`,
    `passear`,
    `fazer exercicio`,
    `tomar banho`,
];
// const actions = [
//     `fazer comida`,
//     `comer fastfood`,
//     `estudar`,
//     `assistir serie`,
//     `trabalhar`,
//     `passear`,
//     `fazer exercicio`,
//     `tomar banho`,
// ];

let progresso = 0;

const player = {
    Name: '',
    Saciedade: 5,
    Stamina: 5,
    Social: 5,
    Higiene: 5,
    Lazer: 5,
  Name: "",
  Saciedade: 5,
  Stamina: 5,
  Felicidade: 5,
  Higiene: 5,
  Projeto: `${progresso} %`
};

console.log(player.Saciedade);

let projeto = 0;
// console.log(player.Saciedade);
let Trabalho = 0;

console.log(`Projeto Final - Modulo 1
`);
player.Nome = prompt(`Digite seu nome: `);

do {
    var start = +prompt(
        `Digite 1 para começar a jogar ou 0 e eu lhe explicarei as regras: `,
    );
  var start = +prompt(
    `Digite 1 para começar a jogar ou 0 e eu lhe explicarei as regras: `
  );

    if (start !== 0 && start !== 1) {
        console.log(`
  if (start !== 0 && start !== 1) {
    console.log(`
        Resposta inválida!`);
    }
  }
} while (start !== 0 && start !== 1);

if (start == 0) {
    console.log(
        `
  console.log(
    `
    Nesse jogo, seu objetivo é entregar um projeto para 
a sua empresa, seu prazo é de 7 dias. Porém, existem obstáculos
no caminho! 
@@ -85,116 +85,114 @@ com o seu trabalho, você sofrerá penalidades caso qualquer um dos status
No Fácil: Você perderá 1 dia.
No Médio: Você perderá 2 dias.
No Difícil: Você perderá o jogo.
`,
    );
`
  );
}

// intro
console.log(`Selecione o modo de dificuldade (1 a 3):
`);

do {
    mode = +prompt(`
  mode = +prompt(`
    1) Fácil      2) Médio       3) Difícil: `);
    if (isNaN(mode) || (mode !== 1 && mode !== 2 && mode !== 3)) {
        console.log(`
  if (isNaN(mode) || (mode !== 1 && mode !== 2 && mode !== 3)) {
    console.log(`
        Modo inválido! Digite uma das opções acima
        `);
    }
  }
} while (mode !== 1 && mode !== 2 && mode !== 3);

// first action

for (d = 1; d < 8; d++) {
    // Contador de Dias
    if (d < 7) {
        console.log(
            `Dia ${d}. Faltam ${7 - d} para a apresentação do seu Projeto.`,
        );
    } else if (d == 7) {
        console.log(`Dia ${d}. Hoje é o Grande Dia!`);
    }

    for (timeNow = 7; timeNow < 22; ) {
        // Contador de Horas
        if (timeNow >= 7 && timeNow < 23 && day < 8 && death == false) {
            console.log(
                `${dayTime()} ${
                    player.Nome
                }, são ${timeNow} horas do seu ${day}° dia na sua jornada!`,
            );

            console.log(player.Saciedade);
            console.log(`O que você deseja fazer?
  // Contador de Dias
  if (d < 7) {
    console.log(
      `Dia ${d}. Faltam ${7 - d} para a apresentação do seu Projeto.`
    );
  } else if (d == 7) {
    console.log(`Dia ${d}. Hoje é o Grande Dia!`);
  }

  for (timeNow = 7; timeNow < 22; ) {
    // Contador de Horas
    if (timeNow >= 7 && timeNow < 23 && day < 8) {
      console.log(
        `${dayTime()} ${
          player.Nome
        }, são ${timeNow} horas do seu ${day}° dia na sua jornada!`
      );

      console.log(player.Saciedade);
      console.log(`O que você deseja fazer?
            `);
            console.log(`Digite 0 a qualquer momento e veja os status do seu personagem.
      console.log(`Digite 0 a qualquer momento e veja os status do seu personagem.
            `);
            console.log(`Ações disponíveis:`);
            console.log(`
      console.log(`Ações disponíveis:`);
      console.log(`
    1)Fazer comida     2)Comer Fastfood      3)Estudar              4)Assistir Serie
    5)Trabalhar        6)Passear             7)Fazer exercicio      8)Tomar banho `);
            do {
                action = +prompt(`Digite a sua ação: `);

                if (action == 0) {
                    console.table(player);
                } else if (isNaN(action) || action < 1 || action > 8) {
                    console.log(`
      do {
        action = +prompt(`Digite a sua ação: `);

        if (action == 0) {
          console.table(player);
          showStatus();
        } else if (isNaN(action) || action < 1 || action > 8) {
          console.log(`
-------------------------------------------------------------
                    `);
                    console.log(`
          console.log(`
            >>>>> ESSA AÇÃO NÃO FAZ SENTIDO. <<<<<
                    `);
                    console.log(`
          console.log(`
-------------------------------------------------------------
                    `);
                } else if (action == 1) {
                    comer();
                    console.table(player);
                } else if (action == 2) {
                    fastfood();
                    console.table(player);
                } else if (action == 3) {
                    estudar();
                    projeto += 10;
                    console.table(player);
                } else if (action == 4) {
                    serie();
                    console.table(player);
                } else if (action == 5) {
                    trabalhar();
                    console.table(player);
                } else if (action == 6) {
                    passear();
                    console.table(player);
                } else if (action == 7) {
                    exercicio();
                    console.table(player);
                } else if (action == 8) {
                    banho();
                    console.table(player);
                }
                // checkStatus();
                if (death == true) {
                    break;
                }
                if (max == true) {
                    continue;
                }
                break;
            } while (true);
        } else if (action == 1) {
          comer();
          console.table(player);
        } else if (action == 2) {
          fastfood();
          console.table(player);
        } else if (action == 3) {
          estudar();
          progresso += 10;
          console.table(player);
        } else if (action == 4) {
          serie();
          console.table(player);
        } else if (action == 5) {
          trabalhar();
          console.table(player);
        } else if (action == 6) {
          passear();
          console.table(player);
        } else if (action == 7) {
          exercicio();
          console.table(player);
        } else if (action == 8) {
          banho();
          console.table(player);
        }
        CheckStatus();
        if (death == true) {
            break;
          break;
        }
        break;
      } while (true);
    }
    if (death == true) {
        break;
      break;
    }
    console.log(`
  }
  if (death == true) {
    break;
  }
  console.log(`
    O dia acabou! Você dormirá agora`);
    timeNow = 7;
    day++;
  timeNow = 7;
  day++;
}
//
//
@@ -210,227 +208,330 @@ for (d = 1; d < 8; d++) {
//

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function GetTime(horas) {
    // Passagem de tempo por função

    for (let x = horas; x > 0; x--) {
        if (timeNow < 22) {
            timeNow++;
            {
                player.Saciedade -= 1;
                player.Social -= 1;
                player.Higiene -= 1;
                // CheckStatus()
            }
        } else if (timeNow == 22) {
            timeNow = 7;
            player.Saciedade -= 1.5 * mode;
            player.Stamina += 15 / mode;
            if (player.Stamina > 10) {
                player.Stamina == 10;
            }
            console.log(`Você Dormiu`);
            break;
        }
  // Passagem de tempo por função

  for (let x = horas; x > 0; x--) {
    if (timeNow < 22) {
      timeNow++;
      {
        player.Saciedade -= 1;
        player.Felicidade -= 1;
        player.Higiene -= 1;
        player.Stamina -= 1;
        // CheckStatus()
      }
    } else if (timeNow == 22) {
      timeNow = 7;
      player.Saciedade -= 1.5 * mode;
      player.Stamina += 15 / mode;
      if (player.Stamina > 9) {
        player.Stamina = 10;
      }
      console.log(`
            Você Dormiu.
            Saciedade - ${1.5 * mode};
            Stamina + ${15 / mode} (Stamina Máx = 10)`);
      break;
    }
  }
}
function showStatus() {
    // Checagem no !status.

    // Saciedade
    if (player.Saciedade < 2) {
        console.log(
            `Sua saciedade é ${player.Saciedade}. Você está Morrendo de Fome.`,
        );
    } else if (player.Saciedade > 1 && player.Saciedade < 5) {
        console.log(
            `Sua saciedade é ${player.Saciedade}. Você está com Muita Fome.`,
        );
    } else if (player.Saciedade > 4 && player.Saciedade < 7) {
        console.log(
            `Sua saciedade é ${player.Saciedade}. Você está sentindo Fome.`,
        );
    } else if (player.Saciedade > 6 && player.Saciedade < 10) {
        console.log(
            `Sua saciedade é ${player.Saciedade}. Você está satisfeito.`,
        );
    }
  // Checagem no !status.

    // Stamina
    if (player.Stamina < 2) {
        console.log(`Você está Exausto.`);
    } else if (player.Stamina > 1 && player.Stamina < 5) {
        console.log(`Você está Muito Cansado.`);
    } else if (player.Stamina > 4 && player.Stamina < 7) {
        console.log(`Você começa a se sentir Cansado.`);
    } else if (player.Stamina > 6 && player.Stamina < 10) {
        console.log(`Você está Descansado.`);
    }
  // Saciedade
  if (player.Saciedade < 2) {
    console.log(
      `Sua Saciedade está em ${player.Saciedade}. Você está Morrendo de Fome.`
    );
  } else if (player.Saciedade > 1 && player.Saciedade < 5) {
    console.log(
      `Sua Saciedade está em ${player.Saciedade}. Você está com Muita Fome.`
    );
  } else if (player.Saciedade > 4 && player.Saciedade < 7) {
    console.log(
      `Sua Saciedade está em ${player.Saciedade}. Você está sentindo Fome.`
    );
  } else if (player.Saciedade > 6 && player.Saciedade < 10) {
    console.log(
      `Sua Saciedade está em ${player.Saciedade}. Você está satisfeito.`
    );
  } else if (player.Saciedade > 9) {
    player.Saciedade = 10;
    console.log(
      `Sua Saciedade está em ${player.Saciedade}. Você está entupido`
    );
  }

    // Social
    if (player.Social < 2) {
        console.log(`Você está a ponto de Desistir da vida.`);
    } else if (player.Social > 1 && player.Social < 5) {
        console.log(`Você só quer ficar trancado no seu quarto.`);
    } else if (player.Social > 4 && player.Social < 7) {
        console.log(`Você está desanimado.`);
    } else if (player.Social > 6 && player.Social < 10) {
        console.log(`Você está feliz.`);
    }
  // Stamina
  if (player.Stamina < 2) {
    console.log(`Sua Vitalidade está em ${player.Stamina}. Você está Exausto.`);
  } else if (player.Stamina > 1 && player.Stamina < 5) {
    console.log(
      `Sua Vitalidade está em ${player.Stamina}. Você está Muito Cansado.`
    );
  } else if (player.Stamina > 4 && player.Stamina < 7) {
    console.log(
      `Sua Vitalidade está em ${player.Stamina}. Você começa a se sentir Cansado.`
    );
  } else if (player.Stamina > 6 && player.Stamina < 10) {
    console.log(
      `Sua Vitalidade está em ${player.Stamina}. Você está Descansado.`
    );
  } else if (player.Stamina > 9) {
    player.Stamina = 10;
    console.log(
      `Sua Stamina está em ${player.Stamina}. Você está tremendo de tanta Energia.`
    );
  }

    //
  // Felicidade
  if (player.Felicidade < 2) {
    console.log(
      `Sua Felicidade está em ${player.Felicidade}. Você está a ponto de Desistir da vida.`
    );
  } else if (player.Felicidade > 1 && player.Felicidade < 5) {
    console.log(
      `Sua Felicidade está em ${player.Felicidade}. Você só quer ficar trancado no seu quarto.`
    );
  } else if (player.Felicidade > 4 && player.Felicidade < 7) {
    console.log(
      `Sua Felicidade está em ${player.Felicidade}. Você está desanimado.`
    );
  } else if (player.Felicidade > 6 && player.Felicidade < 10) {
    console.log(
      `Sua Felicidade está em ${player.Felicidade}. Você está feliz.`
    );
  } else if (player.Felicidade > 9) {
    player.Felicidade = 10;
    console.log(
      `Sua Felicidade está em ${player.Felicidade}. Você está Radiante de Alegria.`
    );
  }

  // Higiene
  if (player.Higiene < 2) {
    console.log(
      `Sua Higiene está em ${player.Higiene}. Você está com irritações e pequenas feridas na pele.`
    );
  } else if (player.Higiene > 1 && player.Higiene < 5) {
    console.log(
      `Sua Higiene está em ${player.Higiene}. Isso começa a afetar a sua saúde.`
    );
  } else if (player.Higiene > 4 && player.Higiene < 7) {
    console.log(
      `Sua Higiene está em ${player.Higiene}. Você começa a se sentir sujo.`
    );
  } else if (player.Higiene > 6 && player.Higiene < 10) {
    console.log(
      `Sua Higiene está em ${player.Higiene}. Você se sente Limpo e saudável.`
    );
  } else if (player.Higiene > 9) {
    player.Higiene = 10;
    console.log(
      `Sua Higiene está em ${player.Higiene}. Você está Extremamente limpo e Saudável.`
    );
  }

  // // trabalho
  // if (player.Social < 2) {
  //     console.log(`Você está Exausto.`);
  // } else if (player.Social > 1 && player.Social < 5) {
  //     console.log(`Você está Muito Cansado.`);
  // } else if (player.Social > 4 && player.Social < 7) {
  //     console.log(`Você começa a se sentir Cansado.`);
  // } else if (player.Social > 6 && player.Social < 10) {
  //     console.log(`Você está Descansado.`);
  // }
}
function CheckStatus() {
    death = false;
    max = false;
    //Teste Fome
    if (player.Saciedade == 0) {
        console.log(`Você não levou a sério os limites do seu corpo...
  death = false;
  max = false;
  //Teste Fome
  if (player.Saciedade < 1) {
    player.Saciedade = 0;
    console.log(`Você não levou a sério os limites do seu corpo...
        
        Você desmaiou de Fome!
        Sua Saciedade chegou a ${player.Saciedade}. Você desmaiou de Fome!
        
        `);
        return (death = true);
    } else if (player.Saciedade > 9) {
        player.Saciedade = 10;
        console.log(`Sua saciedade é ${player.Saciedade}. Você está entupido`);
        return (max = true);
    }
    return (death = true);
  } else if (player.Saciedade > 9) {
    player.Saciedade = 10;
    console.log(
      `Sua Saciedade está em ${player.Saciedade}. Você está entupido`
    );
  }

    // Teste Cansaço
    if (player.Stamina == 0) {
        console.log(`Você não levou a sério os limites do seu corpo...
  // Teste Cansaço
  if (player.Stamina < 1) {
    player.Stamina = 0;
    console.log(`Você não levou a sério os limites do seu corpo...
        
        Você colaps pelo Cansaço!
        Sua Stamina chegou a ${player.Stamina}. Você colapsa pelo Cansaço!
        `);
        return (death = true);
    } else if (player.Stamina > 9) {
        console.log(`Você está tremendo de tanta Energia.`);
    }
    // Teste Social
    if (player.Social == 0) {
        console.log(`Você não levou a sério os limites da sua Mente...
    return (death = true);
  } else if (player.Stamina > 9) {
    player.Stamina = 10;
    console.log(
      `Sua Stamina está em ${player.Stamina}. Você está tremendo de tanta Energia.`
    );
  }

  // Teste Felicidade
  if (player.Felicidade < 1) {
    player.Felicidade = 0;
    console.log(`Você não levou a sério os limites da sua Mente...
            
        Você atenta contra a sua própria vida!
        Sua Felicidade chegou a ${player.Felicidade}. Você atenta contra a sua própria vida!
            `);
        return (death = true);
    } else if (player.Social > 9) {
        console.log(`Você está Radiante de Alegria.`);
    }
    // Teste Higine
    if (player.Higiene) {
        console.log(`Você não levou a sério os limites do seu corpo...
    return (death = true);
  } else if (player.Felicidade > 9) {
    player.Felicidade = 10;
    console.log(
      `Sua Felicidade está em ${player.Felicidade}. Você está Radiante de Alegria.`
    );
  }

        Você caiu Doente!
  // Teste Higine
  if (player.Higiene < 1) {
    player.Higiene = 0;
    console.log(`Você não levou a sério os limites do seu corpo...
        Sua Higiene chegou a ${player.Higiene}. Você foi consumido pela Doença.
        `);
        return (death = true);
    } else if (player.Higiene < 2) {
        console.log(`Você está com Febre Alta e dores no corpo.`);
    } else if (player.Higiene > 1 && player.Higiene < 5) {
        console.log(`Você está Muito Cansado.`);
    } else if (player.Higiene > 4 && player.Higiene < 7) {
        console.log(`Você começa a se sentir Cansado.`);
    } else if (player.Higiene > 6 && player.Higiene < 10) {
        console.log(`Você está Descansado.`);
    } else if (player.Higiene > 9) {
        console.log(`Você está tremendo de tanta Energia.`);
    }
    // // Teste Trabalho
    // if (player.Social == 0) {
    //     console.log(`Você não levou a sério os limites do seu corpo...

    //     Você morreu de Cansaço!
    //     `);
    //     return (death = true);
    // } else if (player.Social < 2) {
    //     console.log(`Você está Exausto.`);
    // } else if (player.Social > 1 && player.Social < 5) {
    //     console.log(`Você está Muito Cansado.`);
    // } else if (player.Social > 4 && player.Social < 7) {
    //     console.log(`Você começa a se sentir Cansado.`);
    // } else if (player.Social > 6 && player.Social < 10) {
    //     console.log(`Você está Descansado.`);
    // } else if (player.Social > 9) {
    //     console.log(`Você está tremendo de tanta Energia.`);
    // }
    return (death = true);
  } else if (player.Higiene > 9) {
    player.Higiene = 10;
    console.log(
      `Sua Higiene está em ${player.Higiene}. Você está Extremamente limpo e Saudável.`
    );
  }

  // // Teste Trabalho
  // if (player.Social == 0) {
  //     console.log(`Você não levou a sério os limites do seu corpo...

  //     Você morreu de Cansaço!
  //     `);
  //     return (death = true);
  // }else if (player.Social > 9) {
  //     console.log(`Você está tremendo de tanta Energia.`);
  // }
}
function dayTime() {
    if (timeNow >= 7 && timeNow <= 12) {
        return `
  if (timeNow >= 7 && timeNow <= 12) {
    return `
        Bom dia`;
    } else if (timeNow > 12 && timeNow < 18) {
        return `
  } else if (timeNow > 12 && timeNow < 18) {
    return `
        Boa tarde`;
    } else if (timeNow > 17 && timeNow < 22) {
        return `
  } else if (timeNow > 17 && timeNow < 22) {
    return `
        Boa noite`;
    }
  }
}
function comer() {
    // Ação de comer
    GetTime(2);
    player.Saciedade += 1.5 / mode + 2;
  // Ação de comer
  GetTime(3);
  player.Saciedade += 1.5 / mode + 3;
  player.Higiene += 2 / mode + 3;
  player.Felicidade += 2
  console.log(`
    Você faz a sua comida. 
    Levou 3h para fazer e comer, mas ela é muito mais Saudável.
    Saciedade + ${1.5 / mode}
    Higiene + ${1 / mode}
    Felicidade - 1
    Stamina - 3
                    `);
}

function fastfood() {
    // Ação de comer fastfood
    GetTime(2);
    player.Saciedade += 1.5 / mode + 2;
    player.Higiene -= 1 / mode;
  // Ação de comer fastfood
  GetTime(1);
  player.Saciedade += 1.5 / mode + 1;
  player.Higiene -= 1 * mode + 1;
  player.Felicidade += 1
  console.log(`
    Você pediu para entregarem a Comida. 
    Levou só 1h para chegar e comer, não é tão saudável quanto a comida caseira.
    Pelo menos foi mais rápido
    Saciedade + ${1.5 / mode}
    Higiene - ${1 * mode}
    Stamina - 1
                    `);
}

function estudar() {
    // Ação de estudar
    GetTime(2);
    player.Social -= 1.5 / mode + 2;
    player.Stamina -= 1.5 / mode + 2;
    (projeto += 0), 5;
  // Ação de estudar
  GetTime(2);
  player.Felicidade -= 1 * mode + 2;
  player.Stamina -= 1 * mode + 2;
  progresso += 10;
  console.log(`
    Você tirou um tempo para se dedicar ao Projeto. 
    Foram 2h intensas de estudo. 
    Sua cabeça estava latejando ao final mas houve algum progresso.
    
    Projeto + 10%
    Felicidade - ${1 * mode}
    Stamina - ${1 * mode}
    Saciedade - 2
    Higiene - 2
                    `);
}

function serie() {
    // Ação de assistir série
    GetTime(2);
    player.Lazer += 1.5 / mode + 2;
    player.Stamina -= 0.5 / mode + 2;
  // Ação de assistir série
  GetTime(2);
  player.Lazer += 1.5 / mode + 2;
  player.Stamina -= 0.5 / mode + 2;
}

function trabalhar() {
    // Ação de trabalhar
    GetTime(2);
    player.Social -= 1.5 / mode + 2;
    player.Stamina -= 1.5 / mode + 2;
    player.Lazer -= 0.5 / mode + 2;
    projeto++;
  // Ação de trabalhar
  GetTime(2);
  player.Felicidade -= 1.5 / mode + 2;
  player.Stamina -= 1.5 / mode + 2;
  player.Lazer -= 0.5 / mode + 2;
  progresso++;
}

function passear() {
    // Ação de passear
    GetTime(2);
    player.Social += 1.5 / mode + 2;
    player.Stamina -= 1 / mode + 2;
    player.Lazer += 0.5 / mode + 2;
  // Ação de passear
  GetTime(2);
  player.Felicidade += 1.5 / mode + 2;
  player.Stamina -= 1 / mode + 2;
  player.Lazer += 0.5 / mode + 2;
}

function exercicio() {
    // Ação de se exercitar
    GetTime(2);
    player.Social += 1.5 / mode + 2;
    player.Stamina -= 1 / mode + 2;
    player.Lazer += 0.5 / mode + 2;
    player.Higiene += 0.5 / mode + 2;
  // Ação de se exercitar
  GetTime(2);
  player.Felicidade += 1.5 / mode + 2;
  player.Stamina -= 1 / mode + 2;
  player.Lazer += 0.5 / mode + 2;
  player.Higiene += 0.5 / mode + 2;
}

function banho() {
    // Ação de tomar banho
    GetTime(2);
    player.Lazer += 0.5 / mode + 2;
    player.Higiene += 2 / mode + 2;
  // Ação de tomar banho
  GetTime(2);
  player.Lazer += 0.5 / mode + 2;
  player.Higiene += 2 / mode + 2;
}