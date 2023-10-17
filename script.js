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
    }, 3000); // Réglez l'intervalle de rotation ici (2 secondes dans cet exemple)
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

let themeableContainer;

tsParticles
  .load("tsparticles", {
    fpsLimit: 60,
    fullScreen: { enable: true },
    particles: {
      number: {
        value: 50
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 400,
        random: {
          enable: true,
          minimumValue: 200
        }
      },
      move: {
        enable: true,
        speed: 10,
        direction: "top",
        outModes: {
          default: "out",
          top: "destroy",
          bottom: "none"
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    style: {
      filter: "blur(50px)"
    },
    detectRetina: true,
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#f7f8ef"
          },
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#080710"
          },
          particles: {
            color: {
              value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
            }
          }
        }
      }
    ],
    emitters: {
      direction: "top",
      position: {
        x: 50,
        y: 150
      },
      rate: {
        delay: 0.2,
        quantity: 2
      },
      size: {
        width: 100,
        height: 0
      }
    }
  })
  .then((cnt) => {
    console.log(cnt);
  });
