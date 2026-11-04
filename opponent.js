boutonAreter.addEventListener("click" , e =>{
  boutonJouer.classList.remove("hidden");
  boutonAreter.classList.add("hidden");
  boutonsDeck1.classList.add("hidden");
  boutonsDeck2.classList.add("hidden");
  messageDialog.classList.add("hidden");
  fermerDialog.classList.add("hidden");
  attaqueCARTE.classList.add("hidden");
  defenseCARTE.classList.add("hidden");
  
 
  
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
