
let contact = document.querySelector('.contact');
let contacto = document.querySelector('#contact-container');



contactVis = function() {
    contacto.style.visibility = 'visible';
}

contact.addEventListener('click', contactVis);
