let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 50);
}

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.`);
        nextLevel();
    }
}

//capture the click on colors
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//main function - returns a value for the clicked color
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }
    if(color == 1){
        return red;
    }
    if(color == 2){
        return yellow;
    }
    if(color == 3){
        return blue;
    }
}

//next Level function
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//game over function
let lose = () => {
    alert(`Pontuação: ${score}\nVocê foi derrotado. Clique em OK para iniciar novamente.`);
    order = [];
    clickedOrder = [];

    playGame();

}

//
let playGame = () => {
    alert('Iniciando novo jogo...');
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();