// $('#hamburger').on('click', function(){


const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar')
const closeH = document.getElementById('closeHamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    nav.classList.toggle('nav-active')   
    
})

closeH.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    hamburger.style.display = "block"
    // hamburger.classList.toggle('hamburger-active')


})