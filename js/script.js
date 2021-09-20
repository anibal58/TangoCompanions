const toggler = document.querySelector('.toggler');

const menu = () => {
    console.log ('Funciona')
    const navLinks = document.querySelector('#nav-toggler');
    navLinks.classList.toggle('nav__links');
    return;
}

toggler.addEventListener('click', menu);