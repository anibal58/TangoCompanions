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
    console.log(document.getElementsByClassName('barra')[0].style.width = `${progressPercent}%`)
}

window.addEventListener('scroll', progress)