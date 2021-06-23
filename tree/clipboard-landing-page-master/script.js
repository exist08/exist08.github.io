var body=document.body

var switcher=document.getElementById('switcher')
switcher.ondblclick = function(){
    body.classList.toggle('dark')
}