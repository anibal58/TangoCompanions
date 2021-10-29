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