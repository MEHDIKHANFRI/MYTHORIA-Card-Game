const cards = [
  { id: 11, nom: "Étincelle de Feu", description: "Une flamme vive concentre la chaleur arcanique dans une étincelle dévastatrice.", img: "img/28-etincelle-de-feu.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "fire" },
  { id: 12, nom: "Éclat de Givre", description: "Des fragments de glace enchantée jaillissent des eaux figées de l'hiver.", img: "img/29-eclat-de-givre.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "ice" },
  { id: 13, nom: "Souffle du Vent", description: "Un courant enchanté soulève les feuilles et dévoile de nouvelles possibilités.", img: "img/30-souffle-du-vent.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "flying" },
  { id: 14, nom: "Racines Entravantes", description: "Des racines animées surgissent de la terre pour entraver les ennemis.", img: "img/31-racines-entravantes.png", categorie: "common", rarity: "rare", type: "voile", pv: 80, element: "grass" },
  { id: 15, nom: "Onde de Soin", description: "Une onde lumineuse puise dans les sources anciennes pour refermer les blessures.", img: "img/32-onde-de-soin.png", categorie: "common", rarity: "rare", type: "voile", pv: 80, element: "water" },
  { id: 16, nom: "Bouclier de Pierre", description: "Des pierres gravées de runes s'assemblent pour former une protection magique.", img: "img/33-bouclier-de-pierre.png", categorie: "common", rarity: "rare", type: "voile", pv: 100, element: "rock" },
  { id: 17, nom: "Brume Protectrice", description: "Une brume bienveillante enveloppe les alliés et atténue les attaques.", img: "img/34-brume-protectrice.png", categorie: "common", rarity: "rare", type: "voile", pv: 80, element: "ghost" },
  { id: 18, nom: "Flèche d'Énergie", description: "Un trait d'énergie pure traverse l'air en traçant des constellations arcanes.", img: "img/35-fleche-d-energie.png", categorie: "common", rarity: "epic", type: "voile", pv: 90, element: "psychic" },
  { id: 19, nom: "Regard Clairvoyant", description: "Une sphère enchantée révèle les chemins que le destin pourrait emprunter.", img: "img/36-regard-clairvoyant.png", categorie: "common", rarity: "epic", type: "voile", pv: 90, element: "psychic" },
  { id: 20, nom: "Sablier de l'Infini", description: "Un sablier céleste suspend le cours du temps grâce au sable des étoiles.", img: "img/legendary4.png", categorie: "common", rarity: "legendary", type: "voile", pv: 100, element: "psychic" },
  { id: 21, nom: "Garde de l'Aube", description: "Une garde loyale protège les portes du royaume sous la lumière de l'aube.", img: "img/01-garde-de-l-aube.png", categorie: "common", rarity: "common", type: "royaumes", pv: 80, element: "fighting" },
  { id: 22, nom: "Acolyte du Soleil", description: "Un jeune acolyte entretient la flamme sacrée qui apaise les blessures.", img: "img/02-acolyte-du-soleil.png", categorie: "common", rarity: "common", type: "royaumes", pv: 60, element: "fairy" },
  { id: 23, nom: "Archère du Sanctuaire", description: "Une archère vigilante défend les sanctuaires depuis leurs anciennes murailles.", img: "img/03-archere-du-sanctuaire.png", categorie: "common", rarity: "common", type: "royaumes", pv: 70, element: "fighting" },
  { id: 24, nom: "Porteur de Lanterne", description: "Sa lanterne enchantée révèle les chemins perdus au milieu des brumes.", img: "img/04-porteur-de-lanterne.png", categorie: "common", rarity: "common", type: "royaumes", pv: 60, element: "fairy" },
  { id: 25, nom: "Veilleuse des Remparts", description: "Une sentinelle infatigable veille sur la cité lorsque le soleil disparaît.", img: "img/05-veilleuse-des-remparts.png", categorie: "common", rarity: "common", type: "royaumes", pv: 80, element: "steel" },
  { id: 26, nom: "Guérisseuse des Routes", description: "Une guérisseuse itinérante soigne les voyageurs grâce à une magie bienveillante.", img: "img/06-guerisseuse-des-routes.png", categorie: "common", rarity: "common", type: "royaumes", pv: 70, element: "fairy" },
  { id: 27, nom: "Écuyer du Temple", description: "Un écuyer courageux apprend à canaliser la lumière dans chacun de ses coups.", img: "img/07-ecuyer-du-temple.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 90, element: "fighting" },
  { id: 28, nom: "Moine des Sources", description: "Un moine paisible puise son pouvoir dans les eaux des sources sacrées.", img: "img/08-moine-des-sources.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 80, element: "water" },
  { id: 29, nom: "Messagère de l'Aube", description: "Une messagère intrépide apporte l'espoir aux cités les plus lointaines.", img: "img/09-messagere-de-l-aube.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 70, element: "flying" },
  { id: 30, nom: "Lyséa, Lame du Soleil", description: "Une championne solaire protège ses alliés avec la lumière de son serment sacré.", img: "img/legendary2.png", categorie: "common", rarity: "legendary", type: "royaumes", pv: 110, element: "fairy" },
  { id: 31, nom: "Loup des Sapins", description: "Un loup marqué de runes protège les sentiers secrets des forêts anciennes.", img: "img/10-loup-des-sapins.png", categorie: "common", rarity: "rare", type: "gardiens", pv: 90, element: "fighting" },
  { id: 32, nom: "Faucon des Tempêtes", description: "Un faucon enchanté fend les orages avec des ailes parcourues de foudre.", img: "img/11-faucon-des-tempetes.png", categorie: "common", rarity: "epic", type: "gardiens", pv: 90, element: "flying" },
  { id: 33, nom: "Sanglier de Fer", description: "Ses plaques de fer et ses runes ardentes rendent sa charge redoutable.", img: "img/12-sanglier-de-fer.png", categorie: "common", rarity: "epic", type: "gardiens", pv: 110, element: "steel" },
  { id: 34, nom: "Corbeau des Ruines", description: "Un corbeau mystérieux observe les secrets enfouis dans les ruines oubliées.", img: "img/13-corbeau-des-ruines.png", categorie: "common", rarity: "common", type: "gardiens", pv: 70, element: "flying" },
  { id: 35, nom: "Araignée des Grottes", description: "Une araignée des profondeurs tisse des pièges entre les cristaux des cavernes.", img: "img/14-araignee-des-grottes.png", categorie: "common", rarity: "common", type: "gardiens", pv: 60, element: "poison" },
  { id: 36, nom: "Ours des Collines", description: "Un ours robuste défend les collines où sommeille une ancienne magie.", img: "img/15-ours-des-collines.png", categorie: "common", rarity: "common", type: "gardiens", pv: 90, element: "fighting" },
  { id: 37, nom: "Cerf des Clairières", description: "Un cerf lumineux répand une énergie bienfaisante dans les clairières.", img: "img/16-cerf-des-clairieres.png", categorie: "common", rarity: "common", type: "gardiens", pv: 70, element: "grass" },
  { id: 38, nom: "Renard des Neiges", description: "Un renard insaisissable suit les runes qui scintillent sous la neige.", img: "img/17-renard-des-neiges.png", categorie: "common", rarity: "common", type: "gardiens", pv: 60, element: "ice" },
  { id: 39, nom: "Tortue de Rivière", description: "Sa carapace enchantée protège les eaux paisibles de la forêt.", img: "img/18-tortue-de-riviere.png", categorie: "common", rarity: "common", type: "gardiens", pv: 90, element: "water" },
  { id: 40, nom: "Korran, Titan des Glaces", description: "Un titan polaire couvert de cristaux et de runes règne sur les sommets gelés.", img: "img/legendary1.png", categorie: "common", rarity: "legendary", type: "gardiens", pv: 120, element: "ice" },
  { id: 41, nom: "Éclaireur des Ombres", description: "Un éclaireur discret traverse les cités obscures sans révéler sa présence.", img: "img/19-eclaireur-des-ombres.png", categorie: "common", rarity: "rare", type: "ombres", pv: 80, element: "dark" },
  { id: 42, nom: "Apprentie Occultiste", description: "Une apprentie découvre les pouvoirs cachés dans les grimoires interdits.", img: "img/20-apprentie-occultiste.png", categorie: "common", rarity: "rare", type: "ombres", pv: 70, element: "psychic" },
  { id: 43, nom: "Guetteur des Cryptes", description: "Un gardien solitaire surveille les portes des cryptes au clair de lune.", img: "img/21-guetteur-des-cryptes.png", categorie: "common", rarity: "rare", type: "ombres", pv: 90, element: "ghost" },
  { id: 44, nom: "Voleuse du Crépuscule", description: "Une voleuse agile parcourt les toits avant que les ombres ne recouvrent la cité.", img: "img/22-voleuse-du-crepuscule.png", categorie: "common", rarity: "rare", type: "ombres", pv: 70, element: "dark" },
  { id: 45, nom: "Gardien des Tombes", description: "Un gardien des morts protège les souvenirs confiés aux anciennes sépultures.", img: "img/23-gardien-des-tombes.png", categorie: "common", rarity: "epic", type: "ombres", pv: 100, element: "ghost" },
  { id: 46, nom: "Oracle de Minuit", description: "Une oracle contemple les présages qui apparaissent dans son bassin de minuit.", img: "img/24-oracle-de-minuit.png", categorie: "common", rarity: "epic", type: "ombres", pv: 90, element: "psychic" },
  { id: 47, nom: "Alchimiste des Brumes", description: "Un alchimiste secret prépare des fioles corrosives au cœur des brumes.", img: "img/25-alchimiste-des-brumes.png", categorie: "common", rarity: "common", type: "ombres", pv: 60, element: "poison" },
  { id: 48, nom: "Pisteur Nocturne", description: "Un pisteur patient lit les traces que la nuit dissimule aux autres voyageurs.", img: "img/26-pisteur-nocturne.png", categorie: "common", rarity: "common", type: "ombres", pv: 70, element: "dark" },
  { id: 49, nom: "Ombre Errante", description: "Un esprit égaré traverse les ruines et laisse derrière lui un froid surnaturel.", img: "img/27-ombre-errante.png", categorie: "common", rarity: "common", type: "ombres", pv: 60, element: "ghost" },
  { id: 50, nom: "Névaris, Seigneur du Néant", description: "Un souverain des ténèbres commande aux forces qui sommeillent au-delà du monde.", img: "img/legendary3.png", categorie: "common", rarity: "legendary", type: "ombres", pv: 120, element: "dark" },
];
const catalogue = document.querySelector("main");
const panier = document.querySelector("#cartItems");
const totalSpan = document.querySelector("#cartTotal");
const compteur = document.querySelector("#cart");
let total = 0;
let boutonAcheter;
let boutonVider;

const boutons = document.querySelectorAll("button");
for (let i = 0; i < boutons.length; i++) {
  if (boutons[i].textContent.trim() === "Acheter") {
    boutonAcheter = boutons[i];
  }
  if (boutons[i].textContent.trim() === "Vider le panier") {
    boutonVider = boutons[i];
  }
}

function ajouterProduit(titre, prix, image) {
  const li = document.createElement("li");
  li.className = "flex items-center gap-4 text-sm";
  li.setAttribute("prix", prix);
  li.setAttribute("titre", titre);
  li.innerHTML = '<img src="' + image + '" class="h-14 w-10 rounded object-cover"><span class="flex-1">' + titre + '</span><strong>' + prix + ' DH</strong><button class="supprimer">×</button>';
  panier.appendChild(li);
  total = total + prix;
  totalSpan.textContent = total + " DH";
  compteur.textContent = panier.children.length;
}

if (panier) {
  catalogue.addEventListener("click", e=> {
    if (e.target.classList.contains("ajouter")) {
      const booster = e.target.closest(".booster-card");
      const titre = booster.querySelector("span").textContent.trim();
      const textePrix = booster.querySelector(".prix").textContent;
      const prix = parseInt(textePrix.replace("DH", ""), 10);
      const champQuantite = booster.querySelector("input");
      let quantite = parseInt(champQuantite.value, 10);

      if (champQuantite.value === "" || quantite < 1) {
        quantite = 1;
      }

      const image = booster.parentElement.parentElement.querySelector("img").src;
      for (let i = 0; i < quantite; i++) {
        ajouterProduit(titre, prix, image);
      }
    }
  });

  panier.addEventListener("click", e=> {
    if (e.target.classList.contains("supprimer")) {
      const li = e.target.parentNode;
      total = total - parseInt(li.getAttribute("prix"), 10);
      li.remove();
      totalSpan.textContent = total + " DH";
      compteur.textContent = panier.children.length;
    }
  });
}

if (boutonVider) {
  boutonVider.addEventListener("click", e=> {
    panier.innerHTML = "";
    total = 0;
    totalSpan.textContent = "0 DH";
    compteur.textContent = 0;
  });
}

if (boutonAcheter) {
  boutonAcheter.addEventListener("click", e=> {
    if (panier.children.length === 0) {
      alert("Votre panier est vide.");
    } else {
      let boosters = localStorage.getItem("boostersAchetes");
      if (boosters === null) {
        boosters = [];
      } else {
        boosters = JSON.parse(boosters);
      }

      const lignes = panier.querySelectorAll("li");
      for (let i = 0; i < lignes.length; i++) {
        boosters.push(lignes[i].getAttribute("titre"));
      }

      localStorage.setItem("boostersAchetes", JSON.stringify(boosters));
      alert("Commande confirmée !");
      panier.innerHTML = "";
      total = 0;
      totalSpan.textContent = "0 DH";
      compteur.textContent = 0;
    }
  });
}

const boutonOuvrir = document.querySelector("#ouvrirBooster");
if (boutonOuvrir) {
  const nombreBoosters = document.querySelector("#nombreBoosters");
  const cartesOuvertes = document.querySelector("#cartesOuvertes");

  function afficherNombreBoosters() {
    let boosters = localStorage.getItem("boostersAchetes");
    if (boosters === null) {
      boosters = [];
    } else {
      boosters = JSON.parse(boosters);
    }
    nombreBoosters.textContent = boosters.length;
  }

  afficherNombreBoosters();

  boutonOuvrir.addEventListener("click", e=> {
    let boosters = localStorage.getItem("boostersAchetes");
    if (boosters === null) {
      boosters = [];
    } else {
      boosters = JSON.parse(boosters);
    }

    if (boosters.length === 0) {
      alert("Achetez un booster dans la Boutique avant de l'ouvrir.");
    } else {
      let collection = localStorage.getItem("cartesCollection");
      if (collection === null) {
        collection = [];
      } else {
        collection = JSON.parse(collection);
      }

      let disponibles = [];
      for (let i = 0; i < cards.length; i++) {
        let dejaObtenue = false;
        for (let j = 0; j < collection.length; j++) {
          if (cards[i].id === collection[j].id) {
            dejaObtenue = true;
          }
        }
        if (dejaObtenue === false) {
          disponibles.push(cards[i]);
        }
      }

      if (disponibles.length === 0) {
        alert("Toutes les cartes sont déjà dans votre collection.");
      } else {
        const numero = Math.floor(Math.random() * disponibles.length);
        const carte = disponibles[numero];
        boosters.pop();
        collection.push(carte);
        localStorage.setItem("boostersAchetes", JSON.stringify(boosters));
        localStorage.setItem("cartesCollection", JSON.stringify(collection));
        cartesOuvertes.innerHTML = '<img src="' + carte.img + '" alt="' + carte.nom + '" class="h-64 w-44 rounded object-cover"><p>' + carte.nom + '</p>';
        afficherNombreBoosters();
      }
    }
  });
}
const zoneCollection = document.querySelector("#collection");
if (zoneCollection) {
  const carteSelectionnee = document.querySelector("#carteSelectionnee");
  let collection = localStorage.getItem("cartesCollection");
  if (collection === null) {
    collection = [];
  } else {
    collection = JSON.parse(collection);
  }

  function afficherCartes(type, rarete) {
    zoneCollection.innerHTML = "";

    for (let i = 0; i < collection.length; i++) {
      const carte = collection[i];
      let dejaAffichee = false;

      for (let j = 0; j < i; j++) {
        if (collection[j].id === carte.id) {
          dejaAffichee = true;
        }
      }

      let bonType = false;
      if (type === "toutes" || carte.type === type) {
        bonType = true;
      }

      let bonneRarete = false;
      if (rarete === "toutes" || carte.rarity === rarete) {
        bonneRarete = true;
      }

      if (dejaAffichee === false && bonType === true && bonneRarete === true) {
        zoneCollection.innerHTML += '<img src="' + carte.img + '" alt="' + carte.nom + '" id="' + carte.id + '" class="h-30 w-20 rounded object-cover cursor-pointer">';
      }
    }
  }

  afficherCartes("toutes", "toutes");

  zoneCollection.addEventListener("click", e=> {
    if (e.target.tagName === "IMG") {
      const idCarte = e.target.getAttribute("id");

      for (let i = 0; i < collection.length; i++) {
        if (collection[i].id == idCarte) {
          carteSelectionnee.innerHTML = '<img src="' + collection[i].img + '" alt="' + collection[i].nom + '" class="h-100 w-60 rounded-xl object-cover"><p class="mt-3 text-center text-[#ffd477]">' + '</p>';
        }
      }
    }
  });



  document.querySelector("#voile").addEventListener("click", e=> {
    afficherCartes("voile", "toutes");
  });
  document.querySelector("#royaumes").addEventListener("click", e=> {
    afficherCartes("royaumes", "toutes");
  });
  document.querySelector("#gardiens").addEventListener("click", e=> {
    afficherCartes("gardiens", "toutes");
  });
  document.querySelector("#ombres").addEventListener("click", e=> {
    afficherCartes("ombres", "toutes");
  });

  document.querySelector("#COMMON").addEventListener("click", e=> {
    afficherCartes("toutes", "common");
  });
  document.querySelector("#RARE").addEventListener("click", e=> {
    afficherCartes("toutes", "rare");
  });
  document.querySelector("#EPIC").addEventListener("click", e=> {
    afficherCartes("toutes", "epic");
  });
  document.querySelector("#LEGENDARY").addEventListener("click", e=> {
    afficherCartes("toutes", "legendary");
  });

  document.querySelector("#SUPPRIMERTOUS").addEventListener("click", e=> {
    if (confirm("Supprimer toutes les cartes de la collection ?")) {
      collection = [];
      localStorage.setItem("cartesCollection", JSON.stringify(collection));
      afficherCartes("toutes", "toutes");
    }
  });
}
