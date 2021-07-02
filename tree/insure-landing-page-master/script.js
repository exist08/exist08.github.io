
var list=document.getElementById('menu-list')
var menu=document.getElementById('menu')
menu.onclick = () =>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
}