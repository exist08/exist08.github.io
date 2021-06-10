var hamburger =  document.getElementById('hamburger')
var dropdowns = document .getElementById('dropdowns')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    dropdowns.classList.toggle('active')
})

var body=document.body
var logo=document.getElementById('logo')
logo.ondblclick=()=>{
    body.classList.toggle('dark')
}



