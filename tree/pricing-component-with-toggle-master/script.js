var monthly = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99']
var annually = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99']

var chkbox = document.getElementById('check-box')

var pricing = document.getElementsByClassName('price')

chkbox.onclick =  () =>{
    for (let i = 0; i < 3; i++) {
        if (chkbox.checked === true){
            pricing[i].innerHTML = monthly[i]
        }
        else {
            pricing[i].innerHTML = annually[i]
        }
    }
}


for (let i = 0; i < 3; i++) {
    if (chkbox.checked === true){
        pricing[i].innerHTML = monthly[i]
    }
    else {
        pricing[i].innerHTML = annually[i]
    }
}