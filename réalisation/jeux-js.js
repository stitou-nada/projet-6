// declaration des variables 
var bouton;
var sortie;
var numero;
var nombreDeviner;
var tentative;
 // entrer: saiser 
 bouton = document.getElementById('bouton');
 sortie = document.getElementById('sortietext');
 numero = Math.floor(Math.random() * 100);
 tentativesortie = document.getElementById('tentativ') ;
 tentative = 10 ;
 // traitement      
bouton.addEventListener('click', function(){
 tentative--;
  nombreDeviner = document.getElementById('entréDeUtilisateur').value;
  if (nombreDeviner == numero){
    sortie.innerHTML = 'Correct'
  } else{
    if (nombreDeviner < numero){
        sortie.innerHTML = "le nombre est plus petit que vous avez choisir "
    }
    else {
      sortie.innerHTML = "le nombre est plus grand que vous avez choisir"
    }

  } 

});