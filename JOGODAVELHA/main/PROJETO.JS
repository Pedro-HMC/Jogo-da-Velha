window.onload = main

function main() {
    document.getElementById('divdogrid').style.display = "none";
};

function elementos(divdogrid) {
    document.getElementById("divdogrid").style.display = 'block';

    var NJ1 = prompt("Insira o nome do Jogador 1");
    document.getElementById("nomeJ1").innerHTML = NJ1 + ":";

    var NJ2 = prompt("Insira o nome do Jogador 2");
    document.getElementById("nomeJ2").innerHTML = NJ2 + ":";
}

var jogadorAtual = 'x';

var pos = ["-,-,-,-,-,-,-,-,-"]

var botao0 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("0").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[0] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("0").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[0] = 'o'
        jogadorAtual = 'x'
    }
}

var botao1 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("1").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[1] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("1").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[1] = 'o'
        jogadorAtual = 'x'
    }
}

var botao2 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("2").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[2] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("2").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[2] = 'o'
        jogadorAtual = 'x'
    }
}

var botao3 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("3").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[3] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("3").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[3] = 'o'
        jogadorAtual = 'x'
    }
}

var botao4 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("4").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[4] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("4").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[4] = 'o'
        jogadorAtual = 'x'
    }
}

var botao5 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("5").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[5] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("5").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[5] = 'o'
        jogadorAtual = 'x'
    }
}

var botao6 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("6").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[6] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("6").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[6] = 'o'
        jogadorAtual = 'x'
    }
}

var botao7 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("7").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[7] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("7").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[7] = 'o'
        jogadorAtual = 'x'
    }
}

var botao8 = function() {
    if (jogadorAtual == 'x') {
        document.getElementById("8").innerHTML = "<img src =\"../imgs/Xx.png\">"
        pos[8] = 'x';
        jogadorAtual = 'o';

    } else {
        document.getElementById("8").innerHTML = "<img src =\"../imgs/O.png\">"
        pos[8] = 'o'
        jogadorAtual = 'x'
    }
}