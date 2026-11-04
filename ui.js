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
      li.className = "w-[100%] h-[150px] gap-2 transition-transform duration-200 hover:scale-110";
      li.innerHTML ='<span class="text-[#ffd477] font-[Georgia,serif] text-[15px]"> Attaque: ' + deck[nombre].attaque + '</span>' +'<span class="text-[#ffd477] font-[Georgia,serif] text-[15px]"> Defense: ' + deck[nombre].defense + '</span>' +'<img src="' + deck[nombre].img + '" class="w-[100px] h-[150px] object-cover rounded-[14px]">';
      li.setAttribute("idLi", deck[nombre].id);
      jouer2.appendChild(li);
      } else {
        i--;
      }
    }
  }
});

