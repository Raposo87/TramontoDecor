// Variáveis para controle do slider
var radio = document.querySelector(".manual-btn");
var cont = 1;
let touchstartX = 0;
let touchendX = 0;

// Marca o primeiro radio como checked
document.getElementById('radio1').checked = true;

// Timer para troca automática
setInterval(() => {
    proximaImg();
}, 5000);

// Função para próxima imagem
function proximaImg() {
    cont++;
    if(cont > 3){
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}

// Função para imagem anterior
function imagemAnterior() {
    cont--;
    if(cont < 1){
        cont = 3;
    }
    document.getElementById('radio' + cont).checked = true;
}

// Seleciona o elemento correto do slider
const slider = document.querySelector('.slider-content');

// Eventos touch
slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
});

// Função para verificar a direção do swipe
function checkDirection() {
    const SWIPE_THRESHOLD = 50;
    const swipeDistance = touchendX - touchstartX;
    
    if (Math.abs(swipeDistance) >= SWIPE_THRESHOLD) {
        if (touchendX < touchstartX) { // Swipe para esquerda
            proximaImg();
        }
        if (touchendX > touchstartX) { // Swipe para direita
            imagemAnterior();
        }
    }
}


   //   //   //   //     //   //   //   //      //   //   //   //   

 
window.sr = ScrollReveal({reset: true});

sr.reveal('.portifolio-box, .portifolio-layer', {duration: 1800});


   //   //   //   //      //   //   //   //   //   //   //   // 

const portfolioBoxes = document.querySelectorAll('.portifolio-box');

function handleScrollOrTouch() {
  portfolioBoxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    const layer = box.querySelector('.portifolio-layer');

    if (isInView) {
      layer.style.transition = '';
      setTimeout(() => {
        layer.style.transition = 'transform 2s ease-in-out';
        layer.style.transform = 'translateY(0)';
      }, 0);
    } else {
      layer.style.transform = '';
      layer.style.transition = '';
    }
  });
}

// Adicionando evento de scroll para dispositivos desktop e touch
window.addEventListener('scroll', handleScrollOrTouch);
window.addEventListener('touchmove', handleScrollOrTouch);


 //   //   //   //      //   //   //   //   //   //   //   //
