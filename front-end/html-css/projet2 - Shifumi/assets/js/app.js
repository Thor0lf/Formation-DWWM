// --------------------------
//         Chifoumi
// --------------------------

// Pour ce projet, nous allons vavoir besoin de :
// querySelector() & quesrySelectorAll
// forEach
// e.target.id ou value
// Math

// Variables

const choixJoueurId = document.querySelector('#joueur-choix');
const choixPcId = document.querySelector('#pc-choix');
const resultat = document.querySelector('#resultat');
const choixBtn = document.querySelectorAll('.btn');
let choixPc;
let choixJoueur;
let result;

let userId = prompt(`Quel est votre nom ?`);
user.textContent = userId;

let ordiId = prompt(`Quel nom pour l'ordinateur ?`);
ordi.textContent = ordiId;

choixBtn.forEach(choix => choix.addEventListener('click', (e) => {
    choixJoueur = e.target.id;
    choixJoueurId.textContent = choixJoueur;
    if (choixJoueur === "Feu") {
        choixJoueurId.innerHTML = `<img src="https://media0.giphy.com/media/QYn97FfN2QNd4wtGQw/giphy.gif" width="16%">`;
        // choixJoueurId.style.color = "#fcbc46";
        // choixJoueurId.style.textShadow = "#ff0000 2px 2px 5px";
    }

    if (choixJoueur === "Eau") {
        choixJoueurId.innerHTML = `<img src="https://media3.giphy.com/media/JJwVI4SrMfyRtxnuJ5/giphy.gif" width="16%">`;
        // choixJoueurId.style.color = "#41b6ff";
        // choixJoueurId.style.textShadow = "#0000ff 2px 2px 5px";
    }

    if (choixJoueur === "Plante") {
        choixJoueurId.innerHTML = `<img src="https://media0.giphy.com/media/Y4kZokSLJov84J421T/giphy.gif" width="16%">`;
        // choixJoueurId.style.color = "#00ff09";
        // choixJoueurId.style.textShadow = "#0aa90a 5px 2px 5px";
    }
    choixOrdinateur();
    afficherResultat();
}))



function choixOrdinateur() {
    const random = Math.ceil(Math.random() * choixBtn.length);
    if (random === 1) {
        choixPc = "Feu";
        choixPcId.innerHTML = `<img src="https://media0.giphy.com/media/QYn97FfN2QNd4wtGQw/giphy.gif" width="16%">`;
        // choixPcId.style.color = "#fcbc46";
        // choixPcId.style.textShadow = "#ff0000 2px 2px 5px";
    }

    if (random === 2) {
        choixPc = "Eau";
        choixPcId.innerHTML = `<img src="https://media3.giphy.com/media/JJwVI4SrMfyRtxnuJ5/giphy.gif" width="16%">`;
        // choixPcId.style.color = "#41b6ff";
        // choixPcId.style.textShadow = "#0000ff 2px 2px 5px";
    }

    if (random === 3) {
        choixPc = "Plante";
        choixPcId.innerHTML = `<img src="https://media0.giphy.com/media/Y4kZokSLJov84J421T/giphy.gif" width="16%">`;
        // choixPcId.style.color = "#00ff09";
        // choixPcId.style.textShadow = "#0aa90a 5px 2px 5px";
    }

    // choixPcId.textContent = choixPc;
}

function afficherResultat() {
    if (choixPc === choixJoueur) {
        result = "Égalité";
        resultat.style.color = "#000000";
        document.body.style.background = `url('https://thumbs.gfycat.com/PiercingAromaticHadrosaurus-small.gif') no-repeat center `;
    }

    if (choixPc === "Feu" && choixJoueur === "Plante" ||
    choixPc === "Eau" && choixJoueur === "Feu" ||
    choixPc === "Plante" && choixJoueur === "Eau") {
        result = "Tu as perdu !";
        resultat.style.color = "#ff0000";
        document.body.style.background = `url('assets/img/lose.png') no-repeat center`;

    }

    if (choixPc === "Feu" && choixJoueur === "Eau"||
    choixPc === "Eau" && choixJoueur === "Plante"||
    choixPc === "Plante" && choixJoueur === "Feu") {
        result = "Tu as gagné !"
        resultat.style.color = "#0000ff";
        document.body.style.background = `url('assets/img/victory.png') no-repeat center `;


    }

    resultat.textContent = result;
}