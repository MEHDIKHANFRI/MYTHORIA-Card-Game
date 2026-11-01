const carteBonus = document.querySelector("#carteChoisie");

carteBonus.addEventListener("click", e =>{
    if (e.target.tagName === "IMG" && jouer2.children.length < 5){
         if (deck.length == 0) {
            alert("Aucun Carte sur deck !");
        } else {
            const nombre = Math.floor(Math.random() * deck.length);
            let dejaAfficheCarte = false;
            for (let i = 0; i < cartesDejaAffichees.length; i++) {
            if (cartesDejaAffichees[i] === deck[nombre].id) {
                dejaAfficheCarte = true;
                }
            }
            if(dejaAfficheCarte == false){
            cartesDejaAffichees.push(deck[nombre].id);
            const li = document.createElement("li");
            li.className = "w-[100%] h-[150px]";
            li.innerHTML ='<img src="' +deck[nombre].img +'" class="w-[100px] h-[150px] object-cover rounded-[14px]">';
            li.setAttribute("idLi", deck[nombre].id);
            jouer2.appendChild(li);
            }
        }
    }
});
