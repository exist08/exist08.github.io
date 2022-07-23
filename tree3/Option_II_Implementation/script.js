const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')

hamburger.onclick = () =>{
    navMenu.classList.toggle('active')
    hamburger.classList.toggle('active')
}