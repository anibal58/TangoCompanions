const logo = document.querySelectorAll('.parallax__text path');
let total = 0;
for (let i=0; i< logo.length; i++) {
    const length = logo[i].getTotalLength();
    total = total + length;
   console.log(total) //4363.1139
}

