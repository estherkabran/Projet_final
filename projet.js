document.getElementById('confirmer').addEventListener("submit", function(event) {
  event.preventDefault(); 

  var erreur = "";
  var nom = document.getElementById('nom');
  var date = document.getElementById('date');
  var heure = document.getElementById('heure');

  if (!nom.value) {
    erreur += 'Veuillez entrer votre nom. ';
  }
  if (!date.value) {
    erreur += 'Veuillez entrer une date. ';
  }
  if (!heure.value) {
    erreur += 'Veuillez entrer une heure de rendez-vous. ';
  }

  if (erreur) {
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    alert("Votre rendez-vous a été validé!");
    
  }
});