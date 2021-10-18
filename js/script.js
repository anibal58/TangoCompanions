const toggler = document.querySelector('.toggler');

const menu = () => {
    const navLinks = document.querySelector('#nav-toggler');
    navLinks.classList.toggle('nav__links');
    return;
}

toggler.addEventListener('click', menu);