let listaDeNumerosSorteados = [];
let intervaloDeNumeros = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


// FUNÇÃO PARA EXIBIR ALGO NA TELA.
function exibirTextoNaTela(tag, texto) { 
    let area = document.querySelector(tag);
    area.innerHTML = texto;    
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${intervaloDeNumeros}.`);    
};
exibirMensagemInicial();


// FUNÇÃO PARA COMPARAR O CHUTE COM O VALOR GERADO ALEATÓRIAMENTE.
function checarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute == ''){
        exibirTextoNaTela('p', 'O campo não pode estar vazio. Tente novamente.');
        exibirTextoNaTela('h4', `Escolha um número de 1 a ${intervaloDeNumeros}.`);
        
    }else{
        exibirTextoNaTela('h1', 'Você errou!');
        exibirTextoNaTela('h4', '');
        if(chute > numeroAleatorio){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
        }else{
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
        };

        tentativas++; 
        limparCampoChute();
    };
};


// FUNÇÃO PARA GERAR O NÚMERO ALEATÓRIO.
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * intervaloDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == intervaloDeNumeros) {
        listaDeNumerosSorteados = [];
    };
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    };
};


// FUNÇÃO PARA LIMPAR O CAMPO ONDE ESCREVO OS CHUTES.
function limparCampoChute() {
    chute = document.querySelector('input');
    chute.value = '';
};


// FUNÇÃO PARA REINICIAR O JOGO.
function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampoChute();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};
