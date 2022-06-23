let hamburger = document.getElementById('hamburger')
let menu = document.getElementById('menu')

hamburger.onclick = () =>{
    hamburger.classList.toggle('active')
    menu.classList.toggle('not-active')
}