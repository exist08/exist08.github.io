var button=document.getElementById('btn')
button.addEventListener('click',(e)=>{
    e.preventDefault();
    
    var email= document.getElementById('email').value
    var txt = document.getElementById('text')
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
	
    if (email.match(pattern)) {
        txt.innerHTML = ""
    }
    else {
        txt.innerHTML = "Please provide a valid email"
        txt.style.cssText = 'color:#f96262;font-style:italic;font-family:libre-franklin-300;font-size:0.7em'
    }
    if (email == ""){
        txt.innerHTML = ""
    }

})