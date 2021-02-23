let circle = document.querySelector('.circle');
circle.style.position = 'relative';
circle.style.left = '10px';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createColor() {
    let getColor = getRandomInt(100000, 999999);
    circle.style.backgroundColor = '#' + getColor;
}
function moveRight() {
    let left = circle.style.left;
    if (left != '') left = parseInt(left);
    else left = 100;
    createColor();
    left += 10;
    circle.style.left = left + 'px';
}
let move = document.querySelector('#btnr');
move.addEventListener('click', moveRight, false);

function moveLeft() {
    let left = circle.style.left;
    if (left != '') left = parseInt(left);
    else left = 100;
    createColor();
    left -= 10;
    circle.style.left = left + 'px';
}
let mave = document.querySelector('#btnl');
mave.addEventListener('click', moveLeft, false)