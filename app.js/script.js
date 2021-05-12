let ham = document.querySelector('.hamburger-menu');
let container = document.querySelector('.container');
let scrollBtn = document.querySelector('.scroll-btn');
let html =  document.querySelector('html');
let menu = document.querySelector('.menu');


ham.addEventListener('click', () => {
    container.classList.toggle('change');
});

menu.addEventListener('click', ()=> {
    container.classList.toggle('change');
})

scrollBtn.addEventListener('click', ()=> {
    html.style.scrollBehavior = 'smooth';
    setTimeout(()=> {
        html.style.scrollBehavior = 'unset';
    },1000);
});

