const cartes = [
  {
    id: 1,
    nom: "Tortemer",
    description: "Gardien des sources anciennes, Tortemer se réfugie dans sa carapace de pierre et projette des jets d'eau pour repousser les intrus.",
    img: "img/CARTE1 (2).png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 60,
    element: "water",
  },
  {
    id: 2,
    nom: "Fulgurin",
    description: "Ce petit esprit électrique accumule la foudre dans ses joues. Quand il s'énerve, des étincelles illuminent la forêt autour de lui.",
    img: "img/CARTE22.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 60,
    element: "electric",
  },
  {
    id: 3,
    nom: "Dracendre",
    description: "Né des braises d'un volcan, Dracendre libère des flammes intenses lorsque le danger approche.",
    img: "img/CARTE3.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 90,
    element: "fire",
  },
  {
    id: 4,
    nom: "Ondinou",
    description: "Cet esprit des rivières s'accroche aux rochers grâce à ses ventouses et se déplace même dans les courants les plus puissants.",
    img: "img/CARTE44.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 60,
    element: "water",
  },
  {
    id: 5,
    nom: "Lunéa",
    description: "Rare et timide, cette créature féerique apparaît au clair de lune. Son chant porte chance aux voyageurs qui la rencontrent.",
    img: "img/CARTE1 (2).png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 60,
    element: "fairy",
  },
  {
    id: 6,
    nom: "Miroc",
    description: "Maître des illusions, Miroc façonne des barrières invisibles et désoriente ses adversaires par des mirages.",
    img: "img/CARTE22.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 90,
    element: "psychic",
  },
  {
    id: 7,
    nom: "Miroc ancien",
    description: "Une version plus expérimentée de Miroc, capable de projeter des illusions qui troublent même les mages les plus aguerris.",
    img: "img/CARTE3.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 90,
    element: "psychic",
  },
  {
    id: 8,
    nom: "Flamélyn",
    description: "Ce renard de feu possède une fourrure lumineuse. Ses queues étincelantes deviennent plus belles à chaque année passée dans les montagnes.",
    img: "img/CARTE44.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 70,
    element: "fire",
  },
  {
    id: 9,
    nom: "Osombre",
    description: "Voyageur solitaire des terres désolées, Osombre porte un masque ancien et manie un bâton sculpté dans l'os.",
    img: "img/CARTE1 (2).png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 60,
    element: "fighting",
  },
  {
    id: 10,
    nom: "Mirlune",
    description: "Curieux et rusé, Mirlune collectionne les objets brillants. La pierre dorée sur son front s'illumine lorsqu'il découvre un trésor.",
    img: "img/CARTE22.png",
    categorie: "common",
    type: "creatures",
    favourite: false,
    pv: 70,
    element: "colorless",
  }
];
const catalogue = document.querySelector("main");
const compteur = document.querySelector("#cart");
const totalSpan = document.querySelector("#cartTotal");
const panier = document.createElement("ul");
let total = 0;
let nombreArticles = 0;
let prixAjoutes = [];

compteur.parentElement.appendChild(panier);

const panier2 = compteur.parentElement.parentElement;
const boutons = panier2.querySelectorAll("button");
let boutonVider;
let boutonSupprimer;

for (let i = 0; i < boutons.length; i++) {
  if (boutons[i].textContent.trim() === "Vider le panier") {
    boutonVider = boutons[i];
  }

  if (boutons[i].textContent.trim() === "Supprimer") {
    boutonSupprimer = boutons[i];
  }
}

function afficherPanier() {
  compteur.textContent = nombreArticles;
  totalSpan.textContent = total + ",00DH";
}

function ajouterProduit(titre, prix) {
  total = total + prix;
  nombreArticles = nombreArticles + 1;
  prixAjoutes.push(prix);
  afficherPanier();
}

function supprimerProduit() {
  if (prixAjoutes.length === 0) {
    return;
  }
  const prix = prixAjoutes.pop();
  total = total - prix;
  nombreArticles = nombreArticles - 1;
  afficherPanier();
}
