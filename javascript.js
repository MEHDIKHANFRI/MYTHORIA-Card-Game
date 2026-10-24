const cartes = [
  {
    id: 1,
    nom: "Tortemer",
    description: "Gardien des sources anciennes, Tortemer se réfugie dans sa carapace de pierre et projette des jets d'eau pour repousser les intrus.",
    img: "img/CARTE1 (2).png",
    categorie: "common",
    type: "creatures",
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
    pv: 70,
    element: "colorless",
  }
];
const catalogue = document.querySelector("main");
const compteur = document.querySelector("#cart");
const totalSpan = document.querySelector("#cartTotal");
const listePanier = document.querySelector("#cartItems");
const boutons = document.querySelectorAll("button");
let produitsPanier = [];
let boutonAcheter;
let boutonSupprimer;

for (let i = 0; i < boutons.length; i++) {
  if (boutons[i].textContent.trim() === "Acheter") {
    boutonAcheter = boutons[i];
  }
  if (boutons[i].textContent.trim() === "Vider le panier") {
    boutonSupprimer = boutons[i];
  }
}


catalogue.addEventListener("click",e => {
  if (e.target.classList.contains("ajouter")) {
    const booster = e.target.closest(".booster-card");
    const titre = booster.querySelector("span").textContent.trim();
    const prixTexte = booster.querySelector(".prix").textContent;
    const prix = parseInt(prixTexte.replace("DH", ""));
    const Quantite = booster.querySelector("input");
    let quantite = parseInt(Quantite.value);

    if (Quantite.value === "" || quantite < 1) {
  quantite = 1;
  Quantite.value = 1;
  }

    const image = booster.parentElement.parentElement.querySelector("img").getAttribute("src");

    for (let i = 0; i < quantite; i++) {
      produitsPanier.push({ titre: titre, prix: prix, image: image });
    }

    afficherPanier();
  }
});

if (boutonSupprimer) {
  boutonSupprimer.addEventListener("click", e => {
    produitsPanier = [];
    afficherPanier();
  });
}

if (boutonAcheter) {
  boutonAcheter.addEventListener("click", e => {
    if (produitsPanier.length === 0) {
      alert("Votre panier est vide.");
    } 
  });
}
function afficherPanier() {
  listePanier.innerHTML = "";
  let total = 0;

  for (let i = 0; i < produitsPanier.length; i++) {
    const produit = produitsPanier[i];
    total = total + produit.prix;

    const ligne = document.createElement("li");
    ligne.class = "flex items-center gap-4 text-sm";

    const image = document.createElement("img");
    image.src = produit.image;
    image.alt = "";
    image.class = "h-14 w-10 rounded object-cover";

    const nom = document.createElement("span");
    nom.textContent = produit.titre;
    nom.class = "w-30";

    const prix = document.createElement("strong");
    prix.textContent = produit.prix + " DH";

    const retirer = document.createElement("button");
    retirer.textContent = "×";
    retirer.type = "button";
    retirer.class = "rounded bg-[#f6a928] px-2 font-bold text-black";
    retirer.addEventListener("click", e => {
      produitsPanier.splice(i, 1);
      afficherPanier();
    });

    ligne.appendChild(image);
    ligne.appendChild(nom);
    ligne.appendChild(prix);
    ligne.appendChild(retirer);
    listePanier.appendChild(ligne);
  }

  compteur.textContent = produitsPanier.length;
  totalSpan.textContent = total + " DH";
}

const boutonOuvrir = document.querySelector("#ouvrirBooster");

if (boutonOuvrir) {
  const nombreBoostersOuverture = document.querySelector("#nombreBoosters");
  const zoneCartes = document.querySelector("#cartesOuvertes");

  function afficherBoostersDisponibles() {
    let boosters = localStorage.getItem("boostersAchetes");

    if (boosters === null) {
      boosters = [];
    } else {
      boosters = JSON.parse(boosters);
    }

    nombreBoostersOuverture.textContent = boosters.length;
  }

  afficherBoostersDisponibles();

  boutonOuvrir.addEventListener("click", e => {
    let boosters = localStorage.getItem("boostersAchetes");

    if (!boosters) {
      boosters = [];
    } else {
      boosters = JSON.parse(boosters);
    }

    if (boosters.length === 0) {
      alert("Achetez un booster dans la Boutique avant de l'ouvrir.");
    } else {
      boosters.pop();
      localStorage.setItem("boostersAchetes", JSON.stringify(boosters));

      const numero = Math.floor(Math.random() * cartes.length);
      const carte = cartes[numero];
      zoneCartes.innerHTML = '<div class="rounded-xl border border-[#f6a928] bg-[#171119] p-3 text-center text-[#ffd477]"><img src="' + carte.img + '" alt="' + carte.nom + '" class="h-64 w-44 rounded object-cover"><p>' + carte.nom + '</p></div>';

      afficherBoostersDisponibles();
    }
  });
}