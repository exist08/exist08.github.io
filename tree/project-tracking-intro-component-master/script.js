var list=document.getElementById('menu-list')
var menu=document.getElementById('menu')
menu.onclick = ()=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
}

var logo=document.getElementById('logo')
logo.ondblclick=()=>{
    document.body.classList.toggle('dark')
}