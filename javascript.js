const cards = [
  { id: 11, nom: "Étincelle de Feu", description: "Une flamme vive concentre la chaleur arcanique dans une étincelle dévastatrice.", img: "img/voile-01.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "fire" },
  { id: 12, nom: "Éclat de Givre", description: "Des fragments de glace enchantée jaillissent des eaux figées de l'hiver.", img: "img/voile-02.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "ice" },
  { id: 13, nom: "Souffle du Vent", description: "Un courant enchanté soulève les feuilles et dévoile de nouvelles possibilités.", img: "img/voile-03.png", categorie: "common", rarity: "common", type: "voile", pv: 60, element: "flying" },
  { id: 14, nom: "Racines Entravantes", description: "Des racines animées surgissent de la terre pour entraver les ennemis.", img: "img/voile-04.png", categorie: "common", rarity: "rare", type: "voile", pv: 80, element: "grass" },
  { id: 15, nom: "Onde de Soin", description: "Une onde lumineuse puise dans les sources anciennes pour refermer les blessures.", img: "img/voile-05.png", categorie: "common", rarity: "rare", type: "voile", pv: 80, element: "water" },
  { id: 16, nom: "Bouclier de Pierre", description: "Des pierres gravées de runes s'assemblent pour former une protection magique.", img: "img/voile-06.png", categorie: "common", rarity: "rare", type: "voile", pv: 100, element: "rock" },
  { id: 17, nom: "Brume Protectrice", description: "Une brume bienveillante enveloppe les alliés et atténue les attaques.", img: "img/voile-07.png", categorie: "common", rarity: "rare", type: "voile", pv: 80, element: "ghost" },
  { id: 18, nom: "Flèche d'Énergie", description: "Un trait d'énergie pure traverse l'air en traçant des constellations arcanes.", img: "img/voile-08.png", categorie: "common", rarity: "epic", type: "voile", pv: 90, element: "psychic" },
  { id: 19, nom: "Regard Clairvoyant", description: "Une sphère enchantée révèle les chemins que le destin pourrait emprunter.", img: "img/voile-09.png", categorie: "common", rarity: "epic", type: "voile", pv: 90, element: "psychic" },
  { id: 20, nom: "Sablier de l'Infini", description: "Un sablier céleste suspend le cours du temps grâce au sable des étoiles.", img: "img/voile-10.png", categorie: "common", rarity: "legendary", type: "voile", pv: 100, element: "psychic" },
  { id: 21, nom: "Garde de l'Aube", description: "Une garde loyale protège les portes du royaume sous la lumière de l'aube.", img: "img/royaumes-01.png", categorie: "common", rarity: "common", type: "royaumes", pv: 80, element: "fighting" },
  { id: 22, nom: "Acolyte du Soleil", description: "Un jeune acolyte entretient la flamme sacrée qui apaise les blessures.", img: "img/royaumes-02.png", categorie: "common", rarity: "common", type: "royaumes", pv: 60, element: "fairy" },
  { id: 23, nom: "Archère du Sanctuaire", description: "Une archère vigilante défend les sanctuaires depuis leurs anciennes murailles.", img: "img/royaumes-03.png", categorie: "common", rarity: "common", type: "royaumes", pv: 70, element: "fighting" },
  { id: 24, nom: "Porteur de Lanterne", description: "Sa lanterne enchantée révèle les chemins perdus au milieu des brumes.", img: "img/royaumes-04.png", categorie: "common", rarity: "common", type: "royaumes", pv: 60, element: "fairy" },
  { id: 25, nom: "Veilleuse des Remparts", description: "Une sentinelle infatigable veille sur la cité lorsque le soleil disparaît.", img: "img/royaumes-05.png", categorie: "common", rarity: "common", type: "royaumes", pv: 80, element: "steel" },
  { id: 26, nom: "Guérisseuse des Routes", description: "Une guérisseuse itinérante soigne les voyageurs grâce à une magie bienveillante.", img: "img/royaumes-06.png", categorie: "common", rarity: "common", type: "royaumes", pv: 70, element: "fairy" },
  { id: 27, nom: "Écuyer du Temple", description: "Un écuyer courageux apprend à canaliser la lumière dans chacun de ses coups.", img: "img/royaumes-07.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 90, element: "fighting" },
  { id: 28, nom: "Moine des Sources", description: "Un moine paisible puise son pouvoir dans les eaux des sources sacrées.", img: "img/royaumes-08.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 80, element: "water" },
  { id: 29, nom: "Messagère de l'Aube", description: "Une messagère intrépide apporte l'espoir aux cités les plus lointaines.", img: "img/royaumes-09.png", categorie: "common", rarity: "rare", type: "royaumes", pv: 70, element: "flying" },
  { id: 30, nom: "Lyséa, Lame du Soleil", description: "Une championne solaire protège ses alliés avec la lumière de son serment sacré.", img: "img/royaumes-10.png", categorie: "common", rarity: "legendary", type: "royaumes", pv: 110, element: "fairy" },
  { id: 31, nom: "Loup des Sapins", description: "Un loup marqué de runes protège les sentiers secrets des forêts anciennes.", img: "img/gardiens-01.png", categorie: "common", rarity: "rare", type: "gardiens", pv: 90, element: "fighting" },
  { id: 32, nom: "Faucon des Tempêtes", description: "Un faucon enchanté fend les orages avec des ailes parcourues de foudre.", img: "img/gardiens-02.png", categorie: "common", rarity: "epic", type: "gardiens", pv: 90, element: "flying" },
  { id: 33, nom: "Sanglier de Fer", description: "Ses plaques de fer et ses runes ardentes rendent sa charge redoutable.", img: "img/gardiens-03.png", categorie: "common", rarity: "epic", type: "gardiens", pv: 110, element: "steel" },
  { id: 34, nom: "Corbeau des Ruines", description: "Un corbeau mystérieux observe les secrets enfouis dans les ruines oubliées.", img: "img/gardiens-04.png", categorie: "common", rarity: "common", type: "gardiens", pv: 70, element: "flying" },
  { id: 35, nom: "Araignée des Grottes", description: "Une araignée des profondeurs tisse des pièges entre les cristaux des cavernes.", img: "img/gardiens-05.png", categorie: "common", rarity: "common", type: "gardiens", pv: 60, element: "poison" },
  { id: 36, nom: "Ours des Collines", description: "Un ours robuste défend les collines où sommeille une ancienne magie.", img: "img/gardiens-06.png", categorie: "common", rarity: "common", type: "gardiens", pv: 90, element: "fighting" },
  { id: 37, nom: "Cerf des Clairières", description: "Un cerf lumineux répand une énergie bienfaisante dans les clairières.", img: "img/gardiens-07.png", categorie: "common", rarity: "common", type: "gardiens", pv: 70, element: "grass" },
  { id: 38, nom: "Renard des Neiges", description: "Un renard insaisissable suit les runes qui scintillent sous la neige.", img: "img/gardiens-08.png", categorie: "common", rarity: "common", type: "gardiens", pv: 60, element: "ice" },
  { id: 39, nom: "Tortue de Rivière", description: "Sa carapace enchantée protège les eaux paisibles de la forêt.", img: "img/gardiens-09.png", categorie: "common", rarity: "common", type: "gardiens", pv: 90, element: "water" },
  { id: 40, nom: "Korran, Titan des Glaces", description: "Un titan polaire couvert de cristaux et de runes règne sur les sommets gelés.", img: "img/gardiens-10.png", categorie: "common", rarity: "legendary", type: "gardiens", pv: 120, element: "ice" },
  { id: 41, nom: "Éclaireur des Ombres", description: "Un éclaireur discret traverse les cités obscures sans révéler sa présence.", img: "img/ombres-01.png", categorie: "common", rarity: "rare", type: "ombres", pv: 80, element: "dark" },
  { id: 42, nom: "Apprentie Occultiste", description: "Une apprentie découvre les pouvoirs cachés dans les grimoires interdits.", img: "img/ombres-02.png", categorie: "common", rarity: "rare", type: "ombres", pv: 70, element: "psychic" },
  { id: 43, nom: "Guetteur des Cryptes", description: "Un gardien solitaire surveille les portes des cryptes au clair de lune.", img: "img/ombres-03.png", categorie: "common", rarity: "rare", type: "ombres", pv: 90, element: "ghost" },
  { id: 44, nom: "Voleuse du Crépuscule", description: "Une voleuse agile parcourt les toits avant que les ombres ne recouvrent la cité.", img: "img/ombres-04.png", categorie: "common", rarity: "rare", type: "ombres", pv: 70, element: "dark" },
  { id: 45, nom: "Gardien des Tombes", description: "Un gardien des morts protège les souvenirs confiés aux anciennes sépultures.", img: "img/ombres-05.png", categorie: "common", rarity: "epic", type: "ombres", pv: 100, element: "ghost" },
  { id: 46, nom: "Oracle de Minuit", description: "Une oracle contemple les présages qui apparaissent dans son bassin de minuit.", img: "img/ombres-06.png", categorie: "common", rarity: "epic", type: "ombres", pv: 90, element: "psychic" },
  { id: 47, nom: "Alchimiste des Brumes", description: "Un alchimiste secret prépare des fioles corrosives au cœur des brumes.", img: "img/ombres-07.png", categorie: "common", rarity: "common", type: "ombres", pv: 60, element: "poison" },
  { id: 48, nom: "Pisteur Nocturne", description: "Un pisteur patient lit les traces que la nuit dissimule aux autres voyageurs.", img: "img/ombres-08.png", categorie: "common", rarity: "common", type: "ombres", pv: 70, element: "dark" },
  { id: 49, nom: "Ombre Errante", description: "Un esprit égaré traverse les ruines et laisse derrière lui un froid surnaturel.", img: "img/ombres-09.png", categorie: "common", rarity: "common", type: "ombres", pv: 60, element: "ghost" },
  { id: 50, nom: "Névaris, Seigneur du Néant", description: "Un souverain des ténèbres commande aux forces qui sommeillent au-delà du monde.", img: "img/ombres-10.png", categorie: "common", rarity: "legendary", type: "ombres", pv: 120, element: "dark" },
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
