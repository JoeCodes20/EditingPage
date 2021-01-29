
const menu = document.querySelector('.mobile')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', ()=>{
    navbar.classList.toggle('navbar-active')
})
