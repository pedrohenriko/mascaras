let tecnicosSelecao = document.querySelector('div.tecnicos');
//pegar primeiro e último nome...
console.log('so tres nome');

function ajeitarNumeros(mano) {
    let manoManipulado = mano.match(/(\d+)/gm);
    if (manoManipulado === null) {
        return "";
    }
    else {
        let construir = "";
        let arrayNumeros = [];
        let construir2 = "";
        let construir3 = "";
        console.log(manoManipulado)
        let proximoNumero;
        for (let i = 0; construir.length < 9; i++) {
            construir += manoManipulado[i];
            proximoNumero = i;

        }
        arrayNumeros.push(construir)
        if (proximoNumero < manoManipulado.length - 1) {
            for (let i = proximoNumero + 1; construir2.length < 9; i++) {
                construir2 += manoManipulado[i];
                proximoNumero = i;
            }
            if (construir2 !== "") {
                arrayNumeros.push(construir2)
            }
        }
        if (proximoNumero < manoManipulado.length - 1) {
            for (let i = proximoNumero + 1; construir3.length < 9; i++) {
                construir3 += manoManipulado[i];
            }
            if (construir3 !== "") {
                arrayNumeros.push(construir3)
            }
        }
        let resultadoFinal = arrayNumeros[0].slice(-3);
        console.log(resultadoFinal)

        if (arrayNumeros.length > 1) {
            if (arrayNumeros.length == 3) {

                resultadoFinal += `, ${arrayNumeros[1].slice(-3)} e ${arrayNumeros[2].slice(-3)}`
            } else {
                resultadoFinal += ` e ${arrayNumeros[1].slice(-3)}`
            }

            console.log('haha2')
        }
        return `(final ${resultadoFinal})`;
        console.log(resultadoFinal)
    }

}

function extrairPrimeiroUltimoNome(nomeCompleto) {
    // let nomeAtualizado = nomeCompleto.replace(/[^a-zA-Z0-9\s]/g, '');
    // console.log(nomeAtualizado)
    // const regex = /(\D+)(\d+)/;
    // let match = nomeAtualizado.match(regex);
    // console.log(Array.isArray(match))
    let apenasNome = nomeCompleto.match(/[A-Za-z]+/gm);
    console.log(apenasNome)

    // let apenasNumero = nomeCompleto.match(/[0-9]+/gm);
    let apenasNumero = nomeCompleto.slice(nomeCompleto.search(/\d/))


    console.log(apenasNumero)
    console.log(Array.isArray(apenasNumero))
    console.log(Array.isArray(apenasNome))


    if (apenasNome.length < 2) {
        console.log(`o tamanho do array é menor que 2, é um array de ${apenasNome.length}`)
        return `${apenasNome[0]}${ajeitarNumeros(apenasNumero)}`
    } else {
        console.log(`o tamanho do array é maior que 2, é um array de ${apenasNome.length}`)
    }

    if (apenasNome.length < 2) {
        return `${apenasNome}${ajeitarNumeros(apenasNumero)}`;
    }
    var primeiroNome = apenasNome[0];
    var ultimoNome = apenasNome[apenasNome.length - 1];
    if (apenasNome.length > 2) {
        var primeiroSobrenome = apenasNome[1].charAt(0).toUpperCase();
        return `${primeiroNome} ${primeiroSobrenome} ${ultimoNome}${ajeitarNumeros(apenasNumero)}`;
    } else {
        return `${primeiroNome} ${ultimoNome}${ajeitarNumeros(apenasNumero)}`;
    }
    console.log(`${primeiroNome} ${ultimoNome}`)

    if (apenasNome.length < 2) {
        return `${apenasNome}${ajeitarNumeros(apenasNumero)}`;
    }
    var primeiroNome = apenasNome[0];
    var ultimoNome = apenasNome[apenasNome.length - 1];
    console.log(match[1])
    console.log(match[2])
    if (apenasNome.length > 2) {
        var primeiroSobrenome = apenasNome[1].charAt(0).toUpperCase();
        return `${primeiroNome} ${primeiroSobrenome} ${ultimoNome}${ajeitarNumeros(apenasNumero)}`;
    } else {
        return `${primeiroNome} ${ultimoNome}${ajeitarNumeros(apenasNumero)}`;
    }
    console.log(`${primeiroNome} ${ultimoNome}${ajeitarNumeros(apenasNumero)}`)
}


//selecionar algumas variáveis
const input = document.querySelector('input#tentativacontato');
let resposta = document.querySelector('div.resposta');
let timeoutId;
let numeroDeTecnicos = 0;

//ficar de olho no input de nomes
input.addEventListener('input', () => {

    clearTimeout(timeoutId); // Limpa o timeout anterior, se existir
    const inputValue = input.value.trim();
    if (inputValue !== "") {
        setTimeout(() => {
            let respostaAtualizada = `${extrairPrimeiroUltimoNome(input.value.trim())}`
            if (resposta.innerText !== "") {
                numeroDeTecnicos = numeroDeTecnicos + 1;
                tecnicosSelecao.innerHTML += `<div class="selecionarTecnicos" onclick="remove(this)">${respostaAtualizada.toUpperCase()}</div>`
            } else {
                numeroDeTecnicos = numeroDeTecnicos + 1;
                tecnicosSelecao.innerHTML += `<div class="selecionarTecnicos" onclick="remove(this)">${respostaAtualizada.toUpperCase()}</div>`
            }
            input.value = "";
        }, 300);
    }
});
let grupoDeSuporte = document.querySelector('input#grupodesuporte');
let boxResult = document.querySelector('textarea.box');
//substituir última vírgula por um "e"
/*function trocarVirgula(texto) {
    let textoVirgula = texto.innerHTML;
    let ultimaVirgula = textoVirgula.lastIndexOf(',');
    if (ultimaVirgula !== -1) {
        return `${textoVirgula.substring(0, ultimaVirgula)} e${textoVirgula.substring(ultimaVirgula + 1)}`;
    } else {
        return textoVirgula;
    }
}


//Texto final de resultado
function enviar() {
    if (numeroDeTecnicos !== 1) {
        boxResult.value = `Foram realizadas 3 tentativas de contato sem sucesso com os técnicos ${trocarVirgula(resposta)} do grupo de suporte ${grupoDeSuporte.value}.`;
    } else {
        console.log('mais tecnicos');


        console.log('um tecnico');
        boxResult.value = `Foram realizadas 3 tentativas de contato sem sucesso com o(a) técnico(a) ${trocarVirgula(resposta)} do grupo de suporte ${grupoDeSuporte.value}.`
    }
}
//botão para caso você tenha realizado o acionamento
function acionamento() {
    if (numeroDeTecnicos !== 1) {
        window.alert('só pode um técnico kkkkkkk')
    } else {
        console.log('mais tecnicos');


        console.log('um tecnico');
        boxResult.value = `Acionamento realizado com o técnico ${trocarVirgula(resposta)} do grupo de suporte ${grupoDeSuporte.value}.`
    }
}*/

function remove(el) {
    let element = el;
    element.remove();
};
//editar esta parte amanhã
function criarMascara(kaka) {
    let campo = `${kaka[0].innerText}`;
    if (kaka.length == 1) {
        return campo;
    } else if (kaka.length == 2) {
        campo += ` e ${kaka[kaka.length - 1].innerText}`
        return campo;
    } else {
        for (let i = 1; i < kaka.length - 1; i++) {
            campo += `, ${kaka[i].innerText}`;
        }
        campo += ` e ${kaka[kaka.length - 1].innerText}`;
        return campo;
    }
};

function teste() {
    let selecao = tecnicosSelecao.children;
    console.log(criarMascara(selecao));
    let joaquim = 'ola';
    console.log(joaquim);
    let tecnicosParaMascara = criarMascara(String(selecao));
    if (selecao.length < 2) {
        boxResult.value = `3 tentativas de contato sem sucesso com o técnico ${tecnicosParaMascara} do grupo de suporte ${grupoDeSuporte.value}.`;
    } else {
        /*boxResult.value = `Tentativa de contato sem sucesso com os técnicos ${tecnicosParaMascara}`;*/
        boxResult.value = `Tentativa de contato sem sucesso com os técnicos ${tecnicosParaMascara} do grupo de suporte ${grupoDeSuporte.value}.`;
    }
    console.log(typeof String(tecnicosParaMascara));
    console.log(String(tecnicosParaMascara));
};
let botaoPrincipal = document.querySelector('div.tecnicosLista');

// grupoDeSuporte.addEventListener('input', ()=>{
//     if(grupoDeSuporte.value !== ""){
//         botaoPrincipal.disabled = false;
//     }
// })

let mascaraBeforeFinal = document.querySelector('div.mascaraBefore');
let cargoFinal = document.querySelector('div.cargo');
let tecnicosFinal = document.querySelector('div.tecnicos');
let tecnicosArrayzados = document.querySelectorAll('div.selecionarTecnicos');
let mascaraGrupo = document.querySelector('div.mascaraAfter');
let pontoOuVirgula = document.querySelector('div.pontoOuVirgula');




grupoDeSuporte.addEventListener('input', () => {
    let grupoValor = grupoDeSuporte.value;
    if (grupoValor !== "") {
        mascaraGrupo.innerText = ` do grupo de suporte ${grupoValor}`;
        pontoOuVirgula.innerHTML = ".";
    } else {
        mascaraGrupo.innerText = "";
        pontoOuVirgula.innerHTML = ".";
    }
})


function mascaraBefore(element) {
    let mascaraBeforeCampo = document.querySelector('div.mascaraBefore');
    let preenchimento = element.innerText;
    mascaraBeforeCampo.innerText = `${preenchimento}`;
}

function cargo(element) {
    let mascaraBeforeCampo = document.querySelector('div.cargo');
    let preenchimento = element.innerText;
    mascaraBeforeCampo.innerText = `${preenchimento}`;
}

// function alinhamento(element){
//     let mascaraBeforeCampo = document.querySelector('div.alinhamento');
//     let preenchimento = element.innerText;
//     mascaraBeforeCampo.innerText = `${preenchimento}`;
// }

function consoleLogar() {
    console.log(`${mascaraBeforeFinal.innerText.trim()} ${cargoFinal.innerText.trim()} ${criarMascara(Array(tecnicosFinal.children)[0])} ${mascaraGrupo.innerText.trim()}${pontoOuVirgula.innerText.trim()}`);
}

//função para copiar
function copy() {
    navigator.clipboard.writeText(`${mascaraBeforeFinal.innerText.trim()} ${cargoFinal.innerText.trim()} ${criarMascara(Array(tecnicosFinal.children)[0])} ${mascaraGrupo.innerText.trim()}${pontoOuVirgula.innerText.trim()}`);
    console.log(criarMascara(Array(tecnicosFinal.children)[0]))
}

// Array.from(tecnicosFinal.children);
