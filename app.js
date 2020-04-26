const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    const navbarUl = document.querySelector('.navbar ul');
    navbarUl.classList.toggle('open');
});
