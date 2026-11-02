const HPadverse = document.querySelector("#hpAdverse");
const HPutilisateur = document.querySelector("#hpJoueur");
const resultat = document.querySelector("#resultat");

jouer2.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    const idCarte = e.target.parentElement.getAttribute("idLi");
    let ChoisieCarte ;
    let randomCarte = -1;

    for (let i = 0; i < deck.length; i++) {
      if (deck[i].id == idCarte) {
        ChoisieCarte = deck[i];
      }
    }

    const imagesAdverses = document.querySelector("#cartjoueur1").querySelectorAll("img");
    const imagee = imagesAdverses[imagesAdverses.length - 1];

    
      const idCarteAdverse = imagee.getAttribute("idCarte");
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
        resultat.textContent = "Le joueur a gagné !";
      } else if (ChoisieCarte.defense > cards[randomCarte].attaque) {
        nouvelleHP = hpAdverse - (combat / 2);
        HPadverse.textContent = nouvelleHP;
        resultat.textContent = "Le joueur a gagné !";
      } else if (ChoisieCarte.attaque < cards[randomCarte].defense) {
        nouvelleHP = hpJoueur - combat;
        HPutilisateur.textContent = nouvelleHP;
        resultat.textContent = "L'adversaire a gagné !";
      } else if (ChoisieCarte.defense < cards[randomCarte].attaque) {
        nouvelleHP = hpAdverse - (combat / 2);
        HPadverse.textContent = nouvelleHP;
        resultat.textContent = "L'adversaire a gagné !";
      } else {
        nouvelleHP = hpAdverse - 100;
        HPadverse.textContent = nouvelleHP;
        resultat.textContent = "null";
      }
    
  }
});
