let boutonJoue = document.querySelector("#boutonJouer");
let deck = localStorage.getItem("cartesDeck");
const jouer2 = document.querySelector("#jouer2");
const jouer1 = document.querySelector("#jouer1");
let cartesDejaAffichees = [];

if (deck === null) {
  deck = [];
} else {
  deck = JSON.parse(deck);
}
boutonJoue.addEventListener("click", (e) => {
  jouer2.innerHTML = "";
  jouer1.innerHTML ="";
  cartesDejaAffichees = [];
  
  if (deck.length == 0) {
    alert("Aucun Carte sur deck !");
  } else {
    for (let i = 0; i < 5; i++) {
      const nombre = Math.floor(Math.random() * deck.length);
      
      let dejaAfficheCarte = false;
      for (let j = 0; j < cartesDejaAffichees.length; j++) {
        if (deck[nombre].id === cartesDejaAffichees[j]) {
          dejaAfficheCarte = true;
        }
      }
      if(dejaAfficheCarte == false){
      cartesDejaAffichees.push(deck[nombre].id);
      const li = document.createElement("li");
      li.className = "w-[80px] h-[150px]";
      li.innerHTML ='<img src="' +deck[nombre].img +'" class="w-full h-[170px] object-cover rounded-[14px]">';
      li.setAttribute("idLi", deck[nombre].id);
      jouer2.appendChild(li);
      } else {
        i--;
      }
      
    }
  }
});

const carteJouer = document.querySelector("#cartjoueur2");
const carteJouer2 = document.querySelector("#cartjoueur1")
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
      image.className = "w-[ 50px] h-[80px] object-cover  rounded-[14px]";
      carteJouer.appendChild(image);
      e.target.parentElement.remove();

    
      
        const randomCarte = Math.floor(Math.random() * cards.length);
        const imagee = document.createElement("img");
        imagee.src = cards[randomCarte].img;
        imagee.alt = cards[randomCarte].nom;
        imagee.className = "w-[ 50px] h-[80px] object-cover rounded-[14px]";
        carteJouer2.appendChild(imagee);
      
  }
});
