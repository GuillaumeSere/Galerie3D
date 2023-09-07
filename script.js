let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');

let degrees = 0;
let rotationInterval;

// Fonction pour faire tourner les images automatiquement
function startRotation() {
    rotationInterval = setInterval(function() {
        degrees += 45;
        box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
    }, 2000); // Réglez l'intervalle de rotation ici (2 secondes dans cet exemple)
}

// Démarrez la rotation automatique au chargement de la page
startRotation();

prev.addEventListener('click', function(){
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})

next.addEventListener('click', function(){
    degrees -= 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
})