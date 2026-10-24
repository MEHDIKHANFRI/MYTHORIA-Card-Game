const cartes = [
{ id: 11, nom: "Oracle des Brumes", description: "Une voyante qui lit les secrets cachés dans le brouillard.", img: "img/voile-01.png", categorie: "common", rarity: "common", type: "voile", pv: 70, element: "psychic" },
{ id: 12, nom: "Tisseuse d'Échos", description: "Elle transforme les voix anciennes en magie.", img: "img/voile-02.png", categorie: "common", rarity: "common", type: "voile", pv: 80, element: "psychic" },
{ id: 13, nom: "Veilleur du Seuil", description: "Il garde le passage entre le monde réel et le Voile.", img: "img/voile-03.png", categorie: "common", rarity: "rare", type: "voile", pv: 90, element: "ghost" },
{ id: 14, nom: "Lanterneuse", description: "Sa lanterne révèle les chemins invisibles.", img: "img/voile-04.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "ghost" },
{ id: 15, nom: "Corbeau d'Argent", description: "Cet oiseau porte les messages des esprits.", img: "img/voile-05.png", categorie: "common", rarity: "rare", type: "voile", pv: 70, element: "flying" },
{ id: 16, nom: "Marcheur Pâle", description: "Il traverse les murs sans laisser de trace.", img: "img/voile-06.png", categorie: "common", rarity: "common", type: "voile", pv: 80, element: "ghost" },
{ id: 17, nom: "Gardienne des Songes", description: "Elle protège les rêves contre les cauchemars.", img: "img/voile-07.png", categorie: "common", rarity: "epic", type: "voile", pv: 90, element: "fairy" },
{ id: 18, nom: "Renard Spectral", description: "Un esprit rusé qui disparaît dans la brume.", img: "img/voile-08.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "ghost" },
{ id: 19, nom: "Cartographe du Voile", description: "Il dessine les routes mouvantes de l'autre monde.", img: "img/voile-09.png", categorie: "common", rarity: "rare", type: "voile", pv: 70, element: "psychic" },
{ id: 20, nom: "Dragon des Nuées", description: "Un dragon ancien qui nage dans les nuages mystiques.", img: "img/voile-10.png", categorie: "common", rarity: "legendary", type: "voile", pv: 100, element: "dragon" },
{ id: 21, nom: "Chevalière d'Aube", description: "Une combattante loyale qui défend les terres royales.", img: "img/royaumes-01.png", categorie: "common", rarity: "common", type: "royaumes", pv: 80, element: "fighting" },
{ id: 22, nom: "Roi des Cendres", description: "Un roi exilé qui commande aux flammes.", img: "img/royaumes-02.png", categorie: "common", rarity: "legendary", type: "royaumes", pv: 100, element: "fire" },
{ id: 23, nom: "Archer des Hautes-Tours", description: "Un tireur précis qui protège les remparts.", img: "img/royaumes-03.png", categorie: "common", rarity: "common", type: "royaumes", pv: 70, element: "fighting" },
{ id: 24, nom: "Forgeron Royal", description: "Il façonne des armes capables de briser les sortilèges.", img: "img/royaumes-04.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 90, element: "steel" },
{ id: 25, nom: "Messagère Royale", description: "Elle traverse les frontières pour porter les ordres du roi.", img: "img/royaumes-05.png", categorie: "common", rarity: "common", type: "royaumes", pv: 60, element: "flying" },
{ id: 26, nom: "Lion des Bannières", description: "Son rugissement rassemble les armées du royaume.", img: "img/royaumes-06.png", categorie: "common", rarity: "epic", type: "royaumes", pv: 90, element: "fighting" },
{ id: 27, nom: "Mage de la Cour", description: "Un magicien qui conseille la famille royale.", img: "img/royaumes-07.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 70, element: "psychic" },
{ id: 28, nom: "Cavalier d'Émeraude", description: "Un chevalier rapide monté sur un destrier vert.", img: "img/royaumes-08.png", categorie: "common", rarity: "common", type: "royaumes", pv: 80, element: "grass" },
{ id: 29, nom: "Reine des Falaises", description: "Elle protège son peuple depuis sa forteresse côtière.", img: "img/royaumes-09.png", categorie: "common", rarity: "epic", type: "royaumes", pv: 90, element: "water" },
{ id: 30, nom: "Golem du Château", description: "Un gardien de pierre animé par la magie royale.", img: "img/royaumes-10.png", categorie: "common", rarity: "legendary", type: "royaumes", pv: 110, element: "rock" },
{ id: 31, nom: "Gardien des Racines", description: "Il protège les arbres les plus anciens de la forêt.", img: "img/gardiens-01.png", categorie: "common", rarity: "rare", type: "gardiens", pv: 100, element: "grass" },
{ id: 32, nom: "Tortue de Cristal", description: "Sa carapace brillante résiste aux attaques puissantes.", img: "img/gardiens-02.png", categorie: "common", rarity: "common", type: "gardiens", pv: 90, element: "rock" },
{ id: 33, nom: "Sentinelle des Sources", description: "Elle veille sur les rivières et les eaux sacrées.", img: "img/gardiens-03.png", categorie: "common", rarity: "rare", type: "gardiens", pv: 80, element: "water" },
{ id: 34, nom: "Cerf des Feuilles", description: "Un esprit forestier qui soigne les créatures blessées.", img: "img/gardiens-04.png", categorie: "common", rarity: "common", type: "gardiens", pv: 70, element: "grass" },
{ id: 35, nom: "Golem Moussu", description: "Un colosse de pierre couvert de mousse protectrice.", img: "img/gardiens-05.png", categorie: "common", rarity: "epic", type: "gardiens", pv: 110, element: "rock" },
{ id: 36, nom: "Faucon des Cimes", description: "Il surveille les montagnes depuis le ciel.", img: "img/gardiens-06.png", categorie: "common", rarity: "common", type: "gardiens", pv: 70, element: "flying" },
{ id: 37, nom: "Dryade d'Argile", description: "Elle commande aux racines et à la terre humide.", img: "img/gardiens-07.png", categorie: "common", rarity: "rare", type: "gardiens", pv: 80, element: "grass" },
{ id: 38, nom: "Loup des Roches", description: "Un protecteur robuste qui défend les cols montagneux.", img: "img/gardiens-08.png", categorie: "common", rarity: "common", type: "gardiens", pv: 90, element: "rock" },
{ id: 39, nom: "Gardienne des Lucioles", description: "Elle guide les voyageurs perdus dans la forêt.", img: "img/gardiens-09.png", categorie: "common", rarity: "epic", type: "gardiens", pv: 60, element: "fairy" },
{ id: 40, nom: "Ancien Sylvestre", description: "Un arbre vivant qui protège toute la forêt.", img: "img/gardiens-10.png", categorie: "common", rarity: "legendary", type: "gardiens", pv: 120, element: "grass" },
{ id: 41, nom: "Assassin Nocturne", description: "Il se déplace sans bruit dans les rues obscures.", img: "img/ombres-01.png", categorie: "common", rarity: "rare", type: "ombres", pv: 70, element: "dark" },
{ id: 42, nom: "Araignée des Cryptes", description: "Elle tisse ses pièges dans les tombeaux abandonnés.", img: "img/ombres-02.png", categorie: "common", rarity: "common", type: "ombres", pv: 60, element: "poison" },
{ id: 43, nom: "Sorcière du Crépuscule", description: "Elle prépare des malédictions à la lumière de la lune.", img: "img/ombres-03.png", categorie: "common", rarity: "epic", type: "ombres", pv: 80, element: "dark" },
{ id: 44, nom: "Chauve-souris d'Obsidienne", description: "Elle fond sur ses proies depuis les cavernes.", img: "img/ombres-04.png", categorie: "common", rarity: "common", type: "ombres", pv: 60, element: "flying" },
{ id: 45, nom: "Chevalier Déchu", description: "Un ancien héros consumé par les ténèbres.", img: "img/ombres-05.png", categorie: "common", rarity: "epic", type: "ombres", pv: 100, element: "dark" },
{ id: 46, nom: "Serpent des Marais Noirs", description: "Son venin affaiblit ceux qui s'approchent de son territoire.", img: "img/ombres-06.png", categorie: "common", rarity: "rare", type: "ombres", pv: 70, element: "poison" },
{ id: 47, nom: "Poupée Maudite", description: "Une poupée ancienne animée par un esprit malveillant.", img: "img/ombres-07.png", categorie: "common", rarity: "rare", type: "ombres", pv: 60, element: "ghost" },
{ id: 48, nom: "Loup des Ténèbres", description: "Il chasse dans les bois quand la nuit tombe.", img: "img/ombres-08.png", categorie: "common", rarity: "rare", type: "ombres", pv: 90, element: "dark" },
{ id: 49, nom: "Corbeau Funèbre", description: "Son arrivée annonce un grand bouleversement.", img: "img/ombres-09.png", categorie: "common", rarity: "common", type: "ombres", pv: 70, element: "flying" },
{ id: 50, nom: "Dragon de l'Abîme", description: "Une créature ancienne qui sommeille sous les ruines.", img: "img/ombres-10.png", categorie: "common", rarity: "legendary", type: "ombres", pv: 120, element: "dragon" }
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
    } else {
      let boostersAchetes = localStorage.getItem("boostersAchetes");

      if (boostersAchetes === null) {
        boostersAchetes = [];
      } else {
        boostersAchetes = JSON.parse(boostersAchetes);
      }

      for (let i = 0; i < produitsPanier.length; i++) {
        boostersAchetes.push(produitsPanier[i].titre);
      }

      const texteBoosters = JSON.stringify(boostersAchetes);
      localStorage.setItem("boostersAchetes", texteBoosters);
      alert("Commande confirmée !");
      produitsPanier = [];
      afficherPanier();
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
  const cartesDisponible = document.querySelector("#cartesOuvertes");

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
      cartesDisponible.innerHTML = '<div class=" rounded-xl border border-[#f6a928] bg-[#171119] p-3 text-center text-[#ffd477]"><img src="' + carte.img + '" alt="' + carte.nom + '" class="h-64 w-44 rounded object-cover"><p>' + carte.nom + '</p></div>';

      let cartesCollection = localStorage.getItem("cartesCollection");
      if (cartesCollection === null) {
        cartesCollection = [];
      } else {
        cartesCollection = JSON.parse(cartesCollection);
      }
      cartesCollection.push(carte);
      localStorage.setItem("cartesCollection", JSON.stringify(cartesCollection));

      afficherBoostersDisponibles();
    }
  });
}
const zoneCollection = document.querySelector("#collection");

if (zoneCollection) {
  let cartesCollection = localStorage.getItem("cartesCollection");

  if (cartesCollection === null) {
    cartesCollection = [];
  } else {
    cartesCollection = JSON.parse(cartesCollection);
  }

  for (let i = 0; i < 15; i++) {
    const carte = cartesCollection[i];
    const diiv = document.createElement("div");
    diiv.className = "text-center text-[#ffd477]";

    const image = document.createElement("img");
    image.src = carte.img;
    image.alt = carte.nom;
    image.className = "h-20 w-20 rounded object-cover";

    diiv.appendChild(image);
    zoneCollection.appendChild(diiv);
  }
}