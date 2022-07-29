// --------------------------
// Projet 3 - Générateur de couleurs
// --------------------------


const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const colorNeg = document.querySelector('.neg');
const colorNeg2 = document.querySelector('.neg-2');
const btnCopy = document.querySelector('.copy');
const success = document.querySelector('.success');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

let copyColor;

btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandom()];
        if (color == "#ffffff" || color == "#eeeeee" || color == "#dddddd" || color == "#cccccc" || color == "#bbbbbb" || color == "#aaaaaa" || color == "#999999" || color == "#888888"  || color == "#777777" || color == "#666666"  || color == "#555555" || color == "#444444" || color == "#333333" || color == "#222222" || color == "#111111"){
            alert(`Bingo`);
            break;
        }
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;

    colorNeg.style.borderColor = hexColor;
    colorNeg.style.color = hexColor;

    colorNeg2.style.borderColor = hexColor;
    colorNeg2.style.color = hexColor;
});

function getRandom() {
    return Math.floor(Math.random() * hex.length);
}

btnCopy.addEventListener('click', () => {
    function copy() {
        copyColor = navigator.clipboard.writeText(color.textContent);
    }
    copy();
    success.style.display = "block";

    setTimeout(() => {
        success.style.display = "none";
    }, 5000);
});

color.addEventListener('click', () => {
    function copy() {
        copyColor = navigator.clipboard.writeText(color.textContent);
    }
    copy();
    success.style.display = "block";

    setTimeout(() => {
        success.style.display = "none";
    }, 5000);
});