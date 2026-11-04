const jouer = document.querySelector("main");
let boutonJouer = document.querySelector("#boutonJouer");
const tableauRandom = [1, 2];
const boutonsDeck1 = document.querySelector("#boutonsDeck1");
const boutonsDeck2 = document.querySelector("#boutonsDeck2");
const boutonAreter = document.querySelector("#boutonAreter");
let collectionDeck = localStorage.getItem("cartesDeck");
const jouer1 = document.querySelector("#jouer1");
const dialog = document.querySelector("#dialog");
const messageDialog = document.querySelector("#messageDialog");
const fermerDialog = document.querySelector("#fermerDialog");

if (collectionDeck === null) {
  collectionDeck = [];
} else {
  collectionDeck = JSON.parse(collectionDeck);
}

dialog.showModal();
boutonJouer.addEventListener("click", e => {
  const randomjouer = Math.floor(Math.random() * tableauRandom.length);
  jouer1.innerHTML = "";
  messageDialog.classList.add("hidden");
  fermerDialog.classList.add("hidden");
  
  

  for (let i = 0; i < 5; i++) {
    const image = document.createElement("img");
    image.src = "./img/backCarte.png";
    image.alt = "Dos de carte";
    image.className = "w-[100px] h-[150px] object-cover rounded-[14px]";
    jouer1.appendChild(image);
}

  if (randomjouer === 1) {
    messageDialog.textContent = "Vous avez gagné le tirage au sort. Choisissez votre camp.";
    messageDialog.classList.remove("hidden");
    boutonsDeck1.classList.remove("hidden");
    boutonsDeck2.classList.remove("hidden");
    boutonAreter.classList.remove("hidden");
    boutonJouer.classList.add("hidden");
    dialog.showModal();

  } else {
    boutonsDeck1.classList.add("hidden");
    boutonsDeck2.classList.add("hidden");
    boutonAreter.classList.remove("hidden");
    boutonJouer.classList.add("hidden");
    for (let i = 0; i < collectionDeck.length; i++) {
      collectionDeck[i].pv = collectionDeck[i].pv * 80 / 100;
    }
    localStorage.setItem("cartesDeck", JSON.stringify(collectionDeck));
    messageDialog.textContent = "Vous n'avez pas gagné le tirage au sort.";
    messageDialog.classList.remove("hidden");
    fermerDialog.classList.remove("hidden");
    dialog.showModal();
  }
});

boutonsDeck1.addEventListener("click", e => {
  

  localStorage.setItem("cards", JSON.stringify(cards));
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
  messageDialog.classList.add("hidden");
  dialog.close();
});

boutonsDeck2.addEventListener("click", e => {
  
  localStorage.setItem("cards", JSON.stringify(cards));
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
  messageDialog.classList.add("hidden");
  dialog.close();
});

fermerDialog.addEventListener("click", e => {
  dialog.close();
  messageDialog.classList.add("hidden");
  fermerDialog.classList.add("hidden");
});

dialog.addEventListener("cancel", e => {
  e.preventDefault();
  messageDialog.classList.remove("hidden");
});
boutonAreter.addEventListener("click" , e =>{
  dialog.showModal();
  boutonJouer.classList.remove("hidden");
  boutonAreter.classList.add("hidden");
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
  messageDialog.classList.add("hidden");
  fermerDialog.classList.add("hidden");
  attaqueCARTE.classList.add("hidden");
  defenseCARTE.classList.add("hidden");

  let deckSauvegarde = localStorage.getItem("cartesDeck");
  if (deckSauvegarde !== null) {
    deckSauvegarde = JSON.parse(deckSauvegarde);

    for (let i = 0; i < deckSauvegarde.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (deckSauvegarde[i].id === cards[j].id) {
          deckSauvegarde[i].attaque = cards[j].attaque;
          deckSauvegarde[i].defense = cards[j].defense;
        }
      }
    }

    localStorage.setItem("cartesDeck", JSON.stringify(deckSauvegarde));
  }
  
 
  
  document.querySelector("#ataque1").innerHTML = "";
  document.querySelector("#defense1").innerHTML = "";
   document.querySelector("#ataque2").innerHTML = "";
  document.querySelector("#defense2").innerHTML = "";
  document.querySelector("#jouer1").innerHTML = "";
  document.querySelector("#jouer2").innerHTML = "";
  document.querySelector("#hpAdverse").textContent = 3000;
  document.querySelector("#hpJoueur").textContent = 3000;
  document.querySelector("#resultat").textContent = "Le combat a commencé !";
});

