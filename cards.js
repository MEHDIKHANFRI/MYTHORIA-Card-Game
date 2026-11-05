const carteJouer = document.querySelector("#cartjoueur2");
const carteJouer2 = document.querySelector("#cartjoueur1");
const defenseCARTE = document.querySelector("#defenseCARTE");
const attaqueCARTE = document.querySelector("#attaqueCARTE");
const dialogCARTE = document.querySelector("#dialogCARTE");
let IDCARTE ;
let ChoisieCarte;
jouer2.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    e.stopImmediatePropagation();
    const idCarte = e.target.parentElement.getAttribute("idLi");
    IDCARTE = idCarte;
    
    
        dialogCARTE.showModal();

        for (let i = 0; i < deck.length; i++) {
      if (deck[i].id == idCarte) {
        ChoisieCarte = deck[i];
      }
    }

         e.target.parentElement.remove();
  }
});
 attaqueCARTE.addEventListener("click" , e=>{
    const image = document.createElement("img");
      image.src = ChoisieCarte.img;
      image.alt = ChoisieCarte.nom;
      image.className = "w-[50px] h-[80px] object-cover rounded-[14px]";
      ataque2.appendChild(image);
    dialogCARTE.close();

    setTimeout(() => {
    const randomCarte = Math.floor(Math.random() * cards.length);
        const imagee = document.createElement("img");
        imagee.src = cards[randomCarte].img;
        imagee.alt = cards[randomCarte].nom;
        imagee.setAttribute("idCarte", cards[randomCarte].id);
        imagee.className = "w-[50px] h-[80px] object-cover rounded-[14px]";
        if (cards[randomCarte].attaque > cards[randomCarte].defense) {
        ataque1.appendChild(imagee);
      } else if (cards[randomCarte].defense > cards[randomCarte].attaque) {
        difense1.appendChild(imagee);
      }
    });
 },2000)

 defenseCARTE.addEventListener("click" , e=>{
    for (let i = 0; i < deck.length; i++) {
      if (deck[i].id == IDCARTE) {
        ChoisieCarte = deck[i];
      }
    }
    const image = document.createElement("img");
      image.src = ChoisieCarte.img;
      image.alt = ChoisieCarte.nom;
      image.className = "w-[50px] h-[80px] object-cover rounded-[14px]";
      difense2.appendChild(image);
    dialogCARTE.close();

    setTimeout(() => {
    const randomCarte = Math.floor(Math.random() * cards.length);
        const imagee = document.createElement("img");
        imagee.src = cards[randomCarte].img;
        imagee.alt = cards[randomCarte].nom;
        imagee.setAttribute("idCarte", cards[randomCarte].id);
        imagee.className = "w-[50px] h-[80px] object-cover rounded-[14px]";
        if (cards[randomCarte].attaque > cards[randomCarte].defense) {
        ataque1.appendChild(imagee);
      } else if (cards[randomCarte].defense > cards[randomCarte].attaque) {
        difense1.appendChild(imagee);
      }
    },2000);
 })
