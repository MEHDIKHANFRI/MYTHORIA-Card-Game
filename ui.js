let boutonJoue = document.querySelector("#boutonJouer");
let deck = localStorage.getItem("cartesDeck");
const jouer2 = document.querySelector("#jouer2");
let cartesDejaAffichees = [];
const difense2 = document.querySelector("#defense2");
const ataque2 = document.querySelector("#ataque2");
const difense1 = document.querySelector("#defense1");
const ataque1= document.querySelector("#ataque1");

if (deck === null) {
  deck = [];
} else {
  deck = JSON.parse(deck);
}
boutonJoue.addEventListener("click", (e) => {
  jouer2.innerHTML = "";
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
      li.className = "w-[100%] h-[150px] gap-2";
      li.innerHTML ='<span class="text-[#ffd477] font-[Georgia,serif] text-[15px]"> A: ' + deck[nombre].attaque + '</span>' +'<span class="text-[#ffd477] font-[Georgia,serif] text-[15px]"> D: ' + deck[nombre].defense + '</span>' +'<img src="' + deck[nombre].img + '" class="w-[100px] h-[150px] object-cover rounded-[14px]">';
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
    let ChoisieCarte;

    for (let i = 0; i < deck.length; i++) {
      if (deck[i].id == idCarte) {
        ChoisieCarte = deck[i];
       
      }
    }
    

      const image = document.createElement("img");
      image.src = ChoisieCarte.img;
      image.alt = ChoisieCarte.nom;
      image.className = "w-[50px] h-[80px] object-cover rounded-[14px]";

      if (ChoisieCarte.attaque > ChoisieCarte.defense) {
        ataque2.appendChild(image);
      } else if (ChoisieCarte.defense > ChoisieCarte.attaque) {
        difense2.appendChild(image);
      }

      e.target.parentElement.remove();

        const randomCarte = Math.floor(Math.random() * cards.length);
        const imagee = document.createElement("img");
        imagee.src = cards[randomCarte].img;
        imagee.alt = cards[randomCarte].nom;
        imagee.setAttribute("idCarte", cards[randomCarte].id);
        imagee.className = "w-[ 50px] h-[80px] object-cover rounded-[14px]";
        if (cards[randomCarte].attaque > cards[randomCarte].defense) {
        ataque1.appendChild(imagee);
      } else if (cards[randomCarte].defense > cards[randomCarte].attaque) {
        difense1.appendChild(imagee);
      }
      
  }
});
