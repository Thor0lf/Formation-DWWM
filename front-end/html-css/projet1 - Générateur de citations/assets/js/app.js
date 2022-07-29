// --------------------------
// Projet1 - Générateur de citations
// --------------------------

// Ce projet nécessir^te des connaissances sur :
// querySelector()
// addEventListener
// L'objet Math
// innerText - textContent

// --------------------------
// #########################
// --------------------------

const btn = document.querySelector('#new-citation');
const citation = document.querySelector('.citation');
const auteur = document.querySelector('.auteur');

const citations = [
    {
    citation: `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."`,
    auteur:  `Spiro Theodore Agnew`,
    img: `https://images.pexels.com/photos/6756329/pexels-photo-6756329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"L'expérience qui rend le plus heureux est celle qui a rendu le plus de gens heureux."`,
    auteur:  `Karl Marx`,
    img: `https://images.pexels.com/photos/884977/pexels-photo-884977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Les dîners de famille sont le plus souvent une épreuve d'indigestion nerveuse, précédée d'un ressentiment et d'un ennui cachés et accompagnée de tremblements psychosomatiques."`,
    auteur:  `M. F. K. Fisher`,
    img: `https://images.pexels.com/photos/5638612/pexels-photo-5638612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Nous voterions tous pour le meilleur homme, mais il n'est jamais candidat."`,
    auteur:  `Will Rogers`,
    img: `https://images.pexels.com/photos/7103167/pexels-photo-7103167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"La seule chose qui cloche avec l'immortalité, c'est qu'elle a tendance à s'éterniser."`,
    auteur:  `Herb Caen`,
    img: `https://images.pexels.com/photos/6468238/pexels-photo-6468238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
    auteur:  `Ansel Adams`,
    img: `https://images.pexels.com/photos/2043385/pexels-photo-2043385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
    auteur:  `Richard David Bach`,
    img: `https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
    auteur:  `Thomas Jefferson`,
    img: `https://images.pexels.com/photos/7203693/pexels-photo-7203693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
    auteur:  `Aldo Leopold`,
    img: `https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
    auteur:  `Ralph Waldo Emerson`,
    img: `https://images.pexels.com/photos/6913442/pexels-photo-6913442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    },

    {
    citation: `"Le plus grand bonheur du plus grand nombre est le fondement de la morale et de la législation."`,
    auteur: `Jeremy Bentham`,
    img: `/projet1/assets/img/projet-1.jpg`
    }
];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * citations.length);
    citation.textContent = citations[random].citation;
    auteur.textContent = citations[random].auteur;
    document.body.style.background = `url(${citations[random].img}) no-repeat center /cover`;
}
);