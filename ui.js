let boutonJoue = document.querySelector("#boutonJouer");
let deck = localStorage.getItem("cartesDeck");
const jouer2 = document.querySelector("#jouer2");

if (deck === null) {
  deck = [];
} else {
  deck = JSON.parse(deck);
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
      li.className = "[80px] h-[150px]";
      li.innerHTML ='<img src="' +deck[nombre].img +'" class="w-[100px] h-[200px] object-cover">';
      li.setAttribute("idLi", deck[nombre].id);
      jouer2.appendChild(li);
      }
    }
  }
});

const carteJouer = document.querySelector("#cartjoueur2");

jouer2.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    const idCarte = e.target.parentElement.getAttribute("idLi");
    let ChoisieCarte ;

    for (let i = 0; i < deck.length; i++) {
      if (deck[i].id == idCarte) {
        ChoisieCarte = deck[i];
      }
    }

      const image = document.createElement("img");
      image.src = ChoisieCarte.img;
      image.alt = ChoisieCarte.nom;
      image.className = "w-[ 50px] h-[80px] object-cover";
      carteJouer.appendChild(image);
      e.target.parentElement.remove();

    const carteJouer2 = document.querySelector("#cartjoueur1")
      
        const randomCarte = Math.floor(Math.random() * cards.length);
        const imagee = document.createElement("img");
        imagee.src = cards[randomCarte].img;
        imagee.alt = cards[randomCarte].nom;
        imagee.className = "w-[ 50px] h-[80px] object-cover";
        carteJouer2.appendChild(imagee);
      
  }
});
