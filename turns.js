const jouer = document.querySelector("main");
let boutonJouer = document.querySelector("#boutonJouer");
const tableauRandom = [1, 2];
const boutonsDeck1 = document.querySelector("#boutonsDeck1");
const boutonsDeck2 = document.querySelector("#boutonsDeck2");
const boutonAreter = document.querySelector("#boutonAreter");
let collectionDeck = localStorage.getItem("cartesDeck");
const jouer1 = document.querySelector("#jouer1");

if (collectionDeck === null) {
  collectionDeck = [];
} else {
  collectionDeck = JSON.parse(collectionDeck);
}

boutonJouer.addEventListener("click", e => {
  const randomjouer = Math.floor(Math.random() * tableauRandom.length);
  jouer1.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const image = document.createElement("img");
    image.src = "./img/backCarte.png";
    image.alt = "Dos de carte";
    image.className = "w-[100px] h-[150px] object-cover rounded-[14px]";
    jouer1.appendChild(image);
}

  if (randomjouer === 1) {
    boutonsDeck1.classList.remove("hidden");
    boutonsDeck2.classList.remove("hidden");
    boutonAreter.classList.remove("hidden");
    boutonJouer.classList.add("hidden");

  } else {
    boutonAreter.classList.remove("hidden");
    boutonJouer.classList.add("hidden");
    for (let i = 0; i < collectionDeck.length; i++) {
      collectionDeck[i].pv = collectionDeck[i].pv * 80 / 100;
    }
    localStorage.setItem("cartesDeck", JSON.stringify(collectionDeck));
  }
});

boutonsDeck1.addEventListener("click", e => {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].type === "voile" || cards[i].type === "royaumes") {
      cards[i].pv = cards[i].pv * 80 / 100;
    }
  }

  localStorage.setItem("cards", JSON.stringify(cards));
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
});

boutonsDeck2.addEventListener("click", e => {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].type === "gardiens" && cards[i].rarity === "common") {
      cards[i].pv = cards[i].pv * 80 / 100;
    }
  }

  localStorage.setItem("cards", JSON.stringify(cards));
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
});

boutonAreter.addEventListener("click" , e =>{
  boutonJouer.classList.remove("hidden");
  boutonAreter.classList.add("hidden");
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
  
 
  
  document.querySelector("#ataque1").innerHTML = "";
  document.querySelector("#defense1").innerHTML = "";
   document.querySelector("#ataque2").innerHTML = "";
  document.querySelector("#defense2").innerHTML = "";
  document.querySelector("#jouer1").innerHTML = "";
  document.querySelector("#jouer2").innerHTML = "";
});
