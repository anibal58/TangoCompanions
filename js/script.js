//Efecto toggler para el menu de navegación en tamaño table y mobile

const toggler = document.querySelector('.toggler');

const menu = () => {
    const navLinks = document.querySelector('#nav-toggler');
    navLinks.classList.toggle('nav__links');

    const animationContainer = document.querySelector('.animation');

    if (document.querySelector('.show-animation')) {
        animationContainer.classList.add('hide-animation');
        animationContainer.classList.remove('show-animation');
    } else {
        animationContainer.classList.add('show-animation');
        animationContainer.classList.remove('hide-animation');
    }
    
    return;
}

toggler.addEventListener('click', menu);

// Barra de progreso
const progress = () => {
    const scrollDistanceFromTop = document.documentElement.scrollTop;

    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progressPercent= (scrollDistanceFromTop/documentHeight)*100;

    document.getElementsByClassName('barra')[0].style.width = `${progressPercent}%`;
}

window.addEventListener('scroll', progress)


//Overlay Galeria

document.addEventListener('DOMContentLoaded', function () {
    overlayEffect()
})

const overlayEffect = () => {
    for (let i=1; i<10; i++) {
        const imagen = document.querySelector(`.item-${i}`);
        imagen.onclick = function () {
            imagenZoomIn (`../img/img${i}.jpg`)
        }
    }
}

function imagenZoomIn (i) {
    //Crear overlay
   const overlay = document.createElement('DIV');
   overlay.innerHTML = `<img src="${i}" alt="tango">`
   overlay.classList.add('overlay');
   overlay.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fix-body')
        overlay.remove();
    }

   //Boton para cerrar
   const close = document.createElement('P');
   close.textContent = 'X';
   close.classList.add('btn-cerrar')
   close.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fix-body')
        overlay.remove();
   }
   overlay.appendChild(close);

   //Añadirlo al HTML
   const body = document.querySelector('body');
   body.appendChild(overlay);
   body.classList.add('fix-body')
}