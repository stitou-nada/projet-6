// declaration des variables 
var bouton;
var sortie;
var numero;
var nombreDeviner;

 // entrer: saiser 
 bouton = document.getElementById('bouton');
 sortie = document.getElementById('sortietext');
 numero = Math.floor(Math.random() * 100);
 nombreEssaye = 10;
 // traitement 

bouton.addEventListener('click', function(){
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
