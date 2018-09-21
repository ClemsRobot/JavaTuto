var monImage = document.querySelector('img');

monImage.onclick = function() {
    var monSrc = monImage.getAttribute('src');
    if(monSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/firefox2.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}
var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');
function définirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Enchante de faire ta connaissance ' + monNom;
}
if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Enchante de te faire ta connaissance ' + nomEnregistré;
}
monBouton.onclick = function() {
  définirNomUtilisateur();
}
