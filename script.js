//pegar primeiro e último nome...
console.log('so tres nome');
function extrairPrimeiroUltimoNome(nomeCompleto) {
    var partesNome = nomeCompleto.trim().split(" ");
    if (partesNome.length < 2) {
        return nomeCompleto;
    }
    var primeiroNome = partesNome[0];
    var ultimoNome = partesNome[partesNome.length - 1];
    if (partesNome.length > 2) {
        var primeiroSobrenome = partesNome[1].charAt(0);
        return primeiroNome + " " + primeiroSobrenome + " " + ultimoNome;
    } else {
        return primeiroNome + " " + ultimoNome;
    }
}

//selecionar algumas variáveis
const input = document.querySelector('input#tentativacontato');
let resposta = document.querySelector('div.resposta');
let timeoutId;
let numeroDeTecnicos = 0;
//ficar de olho no input de nomes
input.addEventListener('input', () => {
    clearTimeout(timeoutId); // Limpa o timeout anterior, se existir
    let inputValue = input.value.trim();
    if (inputValue !== "") {
        timeoutId = setTimeout(() => {
            if (resposta.innerText !== "") {
                resposta.innerHTML = `${resposta.innerHTML}, ${extrairPrimeiroUltimoNome(inputValue.toUpperCase())}`;
            } else {
                resposta.innerHTML = `${extrairPrimeiroUltimoNome(inputValue.toUpperCase())}`;
            }
            input.value = "";
            numeroDeTecnicos = numeroDeTecnicos + 1;
            console.log(numeroDeTecnicos);
        }, 300);
    }
});

//substituir última vírgula por um "e"
function trocarVirgula(texto) {
    let textoVirgula = texto.innerHTML;
    let ultimaVirgula = textoVirgula.lastIndexOf(',');
    if (ultimaVirgula !== -1) {
        return `${textoVirgula.substring(0, ultimaVirgula)} e ${textoVirgula.substring(ultimaVirgula + 1)}`;
    } else {
        return textoVirgula;
    }
}


//Texto final de resultado
let grupoDeSuporte = document.querySelector('input#grupodesuporte');
let boxResult = document.querySelector('div.box');
function enviar() {
    if (numeroDeTecnicos !== 1) {
        boxResult.innerHTML = `Foram realizadas 3 tentativas de contato sem sucesso com os técnicos ${trocarVirgula(resposta)} do grupo de suporte ${grupoDeSuporte.value}.`;
    } else {
        console.log('mais tecnicos');


        console.log('um tecnico');
        boxResult.innerHTML = `Foram realizadas 3 tentativas de contato sem sucesso com o(a) técnico(a) ${trocarVirgula(resposta)} do grupo de suporte ${grupoDeSuporte.value}.`
    }
}
//botão para caso você tenha realizado o acionamento
function acionamento() {
    if (numeroDeTecnicos !== 1) {
        window.alert('só pode um técnico kkkkkkk')
    } else {
        console.log('mais tecnicos');


        console.log('um tecnico');
        boxResult.innerHTML = `Acionamento realizado com o(a) técnico(a) ${trocarVirgula(resposta)} do grupo de suporte ${grupoDeSuporte.value}.`
    }
}
//função para copiar
function copy(){
    navigator.clipboard.writeText(boxResult.innerHTML);
    boxResult.innerHTML = "";
    resposta.innerHTML = "";
}