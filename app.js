const hamburger = document.querySelector('.hamburger');
const navbarUl = document.querySelector('.navbar ul');
hamburger.addEventListener('click', ()=>{
    navbarUl.classList.toggle('open');
});
