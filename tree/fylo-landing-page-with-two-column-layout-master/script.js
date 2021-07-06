
        validation2 = function(){
            var emailtxt2= document.getElementById('email-two')
            var email2 = emailtxt2.value
            var txt2 = document.getElementById('error-two')
			var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

            if (email2.match(pattern)) {
                txt2.classList.remove('active')
                emailtxt2.classList.remove('active')
			}
			else {
                txt2.classList.add('active')
                emailtxt2.classList.add('active')
				txt2.style.color = '#f96262'
			}
			if (email2 == ""){
				txt2.innerHTML = ""
			}
        }
		
		validation = function(){

            var emailtxt= document.getElementById('email')
			var email = emailtxt.value
			var txt = document.getElementById('error')

			// var button = document.getElementById('button')
	
			var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
	

			if (email.match(pattern)) {
                txt.classList.remove('active')
                emailtxt.classList.remove('active')
			}
			else {
                txt.classList.add('active')
                emailtxt.classList.add('active')
				txt.style.color = '#f96262'
			}
			if (email == ""){
				txt.innerHTML = ""
			}
		}