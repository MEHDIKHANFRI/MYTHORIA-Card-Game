let boutonJoue = document.querySelector("#boutonJouer");
let deck = localStorage.getItem("cartesDeck");
cards = localStorage.getItem("cards");
const jouer2 = document.querySelector("#jouer2");

if (deck === null) {
  deck = [];
} else {
  deck = JSON.parse(deck);
}
if (cards === null) {
  cards = [];
} else {
  cards = JSON.parse(cards);
}

boutonJoue.addEventListener("click", (e) => {
  jouer2.innerHTML = "";
  if (deck.length == 0) {
    alert("Aucun Carte sur deck !");
  } else {
    for (let i = 0; i < 5; i++) {
      const carteJouer = deck[i];
      const nombre = Math.floor(Math.random() * deck.length);
      const li = document.createElement("li");
      let dejaAfficheCarte = false;
      for (let j = 0; j < i; j++) {
        if (deck[j].id === carteJouer.id) {
          dejaAfficheCarte = true;
        }
      }
      if(dejaAfficheCarte == false){
      li.className = "w-[200px] h-[150px]";
      li.innerHTML ='<img src="' +deck[nombre].img +'" class="w-[100px] h-[200px] object-cover">';
      jouer2.appendChild(li);
      
      }
    }
  }
});
