
const menuBtn = document.getElementById('mobile-nav');
const menu = document.getElementById('nav');
const closeBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', ()=> {
    console.log('clicked')
    menu.classList.remove("mobile-primary-nav")
})

closeBtn.addEventListener('click', ()=> {
    console.log('clicked')
    menu.classList.add('mobile-primary-nav')
})
