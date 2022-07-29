// --------------------------
// Projet5 - API (Rick & Morty)
// --------------------------

// Variables

const character = document.querySelector('#character');
const circle = document.querySelector('.circle');
let urlAPI = `https://rickandmortyapi.com/api/character `
let url = document.location.href;
// if (url !== `http://127.0.0.1:5500/projet5/index.html`) {
//     urlAPI = `https://rickandmortyapi.com/api/character?page=2`
// }
switch (true) {
    case (url === `http://127.0.0.1:5500/projet5/index.html`):
        urlAPI = `https://rickandmortyapi.com/api/character`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page2.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=2`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page3.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=3`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page4.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=4`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page5.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=5`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page6.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=6`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page7.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=7`
        break;

    case (url === `http://127.0.0.1:5500/projet5/page8.html`):
        urlAPI = `https://rickandmortyapi.com/api/character?page=8`
        break;
}
const API = fetch(urlAPI)

.then(response => response.json())
.then(data => {
    data.results.map(perso => {
        let article = document.createElement('article');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let span = document.createElement('span')
        let status = document.createElement('div');
        let location = document.createElement('div');

        article.classList.add('single-character');
        img.setAttribute('src', `${perso.image}`);
        img.setAttribute('alt', `${perso.name} image`);
        status.setAttribute('id', 'status');
        location.setAttribute('id', 'location');

        character.append(article);
        article.append(img);
        article.append(h3);
        article.append(status);
        article.append(location);

        h3.textContent = `${perso.name}`;
        status.textContent = `Statut : ${perso.status} - ${perso.species}`;
        location.textContent = `Localisation : ${perso.location.name}`;

        status.append(span);
        span.classList.add('circle');

        if(perso.status === 'Alive') {
            span.style.background = "green";
        }

        if(perso.status === 'Dead') {
            span.style.background = "red";
        }
    })
})

.catch(error => console.error(error));
