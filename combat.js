const HPadverse = document.querySelector("#hpAdverse");
const HPutilisateur = document.querySelector("#hpJoueur");
const resultat = document.querySelector("#resultat");
const carteChoisie = document.querySelector("#carteChoisie");
const images = carteChoisie.querySelectorAll("img");

function actualiseDeck() {
  const lignes = jouer2.querySelectorAll("li");

  for (let i = 0; i < lignes.length; i++) {
    const idCarte = lignes[i].getAttribute("idLi");

    for (let j = 0; j < deck.length; j++) {
      if (deck[j].id == idCarte) {
        const valeurs = lignes[i].querySelectorAll("span");
        valeurs[0].textContent = "Attaque: " + deck[j].attaque;
        valeurs[1].textContent = "Defense: " + deck[j].defense;
      }
    }
  }
}

boutonsDeck1.addEventListener("click", e => {
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].type === "voile" || deck[i].type === "ombres") {
      deck[i].attaque = Math.floor(deck[i].attaque * 80 / 100);
      deck[i].defense = Math.floor(deck[i].defense * 80 / 100);

    }
  }
  localStorage.setItem("cartesDeck", JSON.stringify(deck));
  actualiseDeck();
});
boutonsDeck2.addEventListener("click", e => {
  for (let i = 0; i < deck.length; i++) {
    if (deck[i].type === "gardiens" || deck[i].type === "royaumes") {
      deck[i].attaque = Math.floor(deck[i].attaque * 80 / 100);
      deck[i].defense = Math.floor(deck[i].defense * 80 / 100);
    }
  }
  localStorage.setItem("cartesDeck", JSON.stringify(deck));
  actualiseDeck();
});

function lancerCombat() {
  const imagesAdverses = document.querySelector("#cartjoueur1").querySelectorAll("img");
  const imagee = imagesAdverses[imagesAdverses.length - 1];
  const idCarteAdverse = imagee.getAttribute("idCarte");
  let randomCarte = -1;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id == idCarteAdverse) {
      randomCarte = i;
    }
  }

  let hpJoueur = parseInt(HPutilisateur.textContent, 10);
  let hpAdverse = parseInt(HPadverse.textContent, 10);
  const combat = 300;
  let nouvelleHP = 0;

  if (ChoisieCarte.attaque > cards[randomCarte].defense) {
    nouvelleHP = hpAdverse - combat;
    HPadverse.textContent = nouvelleHP;
    resultat.textContent = "Tu as gagné ce tour !";
  } else if (ChoisieCarte.defense > cards[randomCarte].attaque) {
    nouvelleHP = hpAdverse - (combat / 2);
    HPadverse.textContent = nouvelleHP;
    resultat.textContent = "Tu as gagné ce tour !";
  } else if (ChoisieCarte.attaque < cards[randomCarte].defense) {
    nouvelleHP = hpJoueur - combat;
    HPutilisateur.textContent = nouvelleHP;
    resultat.textContent = "L'adversaire a gagné !";
  } else if (ChoisieCarte.defense < cards[randomCarte].attaque) {
    nouvelleHP = hpJoueur - (combat / 2);
    HPutilisateur.textContent = nouvelleHP;
    resultat.textContent = "L'adversaire a remporté ce tour !";
  } else {
    nouvelleHP = hpAdverse - 100;
    HPadverse.textContent = nouvelleHP;
    HPutilisateur.textContent = nouvelleHP;
    resultat.textContent = "Egalité !";
  }

  if (parseInt(HPadverse.textContent, 10) <= 0) {
    HPadverse.textContent = 0;
    resultat.textContent = "Tu as gagné la partie !";
    boutonJouer.classList.add("hidden");
    boutonsDeck1.classList.add("hidden");
    boutonsDeck2.classList.add("hidden");
    attaqueCARTE.classList.add("hidden");
    defenseCARTE.classList.add("hidden");
    jouer1.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
    images[i].classList.add("hidden");
    }
    jouer2.classList.add("pointer-events-none");
  } else if (parseInt(HPutilisateur.textContent, 10) <= 0) {
    HPutilisateur.textContent = 0;
    resultat.textContent = "L'adversaire a gagné la partie !";
    boutonJouer.classList.add("hidden");
    boutonsDeck1.classList.add("hidden");
    boutonsDeck2.classList.add("hidden");
    attaqueCARTE.classList.add("hidden");
    defenseCARTE.classList.add("hidden");
    jouer2.classList.add("pointer-events-none");
    jouer1.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
    images[i].classList.add("hidden");
    }
  }
}


attaqueCARTE.addEventListener("click", e => {
  setTimeout(lancerCombat, 3000);
});
defenseCARTE.addEventListener("click", e => {
  setTimeout(lancerCombat, 3000);
});

boutonAreter.addEventListener("click", e => {
  jouer2.classList.remove("pointer-events-none");
});
