
const jouer = document.querySelector("main");
let boutonJouer = document.querySelector("main button");

const tableauRandom=[1,2]
const boutonsDeck1 = document.querySelector("#boutonsDeck1");
    const boutonsDeck2 = document.querySelector("#boutonsDeck2");
    let collectionDeck = localStorage.getItem("collectionDeck");
    let cards = localStorage.getItem("cards")
    if (collectionDeck === null) {
  collectionDeck = [];
} else {
  collectionDeck = JSON.parse(collectionDeck);
}
if (cards === null) {
  cards = [];
} else {
  cards = JSON.parse(cards);
}


boutonJouer.addEventListener("click", e=>{
const randomjouer = Math.floor(Math.random() * tableauRandom.length);
if(randomjouer == 1){
    boutonsDeck1.classList.remove("hidden");
    console.log(boutonsDeck1);
    boutonsDeck2.classList.remove("hidden");
    }else {
    for (let i = 0; i < collectionDeck.length; i++) {
      collectionDeck[i].pv = collectionDeck[i].pv * (80 / 100);
    }
localStorage.setItem("collectionDeck", JSON.stringify(collectionDeck));
  }
});

    boutonsDeck1.addEventListener("click", e=> {
  for (let i = 0; i < cards.length; i++) {
    if ( cards[i].type === "voile" ||cards[i].type === "royaumes") {
      cards[i].pv = cards[i].pv * (80 / 100);
    }
  }

  localStorage.setItem("cards", JSON.stringify(cards));
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
});

boutonsDeck2.addEventListener("click", e=>  {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].type == "gardiens" && cards[i].type == "common") {
      cards[i].pv = cards[i].pv *(80 / 100);
    }
  }

  localStorage.setItem("cards", JSON.stringify(cards));
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
});

