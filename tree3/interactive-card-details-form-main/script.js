const form = document.getElementById('form')
form.addEventListener('submit',e=>{
    e.preventDefault()
})

const main = document.getElementById('main')
const confirm = document.getElementById('confirm')

const formData = {
    name: '',
    number: '',
    expiryMM: '',
    expiryYY: '',
    cvv: '',
}

const errData = {
    name: '',
    number: '',
    expiry: '',
    cvv: '',
}

    const usernameWarning = document.getElementById('username-warning')
    const cardnumberWarning = document.getElementById('cardnumber-warning')
    const expiryDateWarning = document.getElementById('expiry-warning')
    const cvvWarning = document.getElementById('cvv-warning')

    const usernameDisplay = document.getElementById('card-name-display')
    const cardnumberDisplay = document.getElementById('card-number-display')
    const expiryDateDisplay = document.getElementById('card-expiry-display')
    const cvvDisplay = document.getElementById('card-cvv-display')

    confirm.addEventListener('click',e=>{

    const userName = document.getElementById('username')
    const cardNumber = document.getElementById('cardnumber')
    const expiryDateMM = document.getElementById('expiryDateMM')
    const expiryDateYY = document.getElementById('expiryDateYY')
    const cvvNumber = document.getElementById('cvvnumber')
    formData['name'] = userName.value
    formData['number'] = cardNumber.value
    formData['expiryMM'] = expiryDateMM.value
    formData['expiryYY'] = expiryDateYY.value
    formData['cvv'] = cvvNumber.value

    console.log(formData)
    if(!validateInfo()){
        usernameWarning.innerHTML = errData?.name
        cardnumberWarning.innerHTML = errData?.number
        expiryDateWarning.innerHTML = errData?.expiry
        cvvWarning.innerHTML = errData?.cvv
        return
    }

    const elementsToHide = document.querySelectorAll('#form>div,#form>button')
    elementsToHide.forEach((el)=>{
        el.style.display = 'none'
    })
    main.classList.add('completed')
    usernameDisplay.innerHTML = userName.value
    cardnumberDisplay.innerHTML  = cardNumber.value.slice(0,4) + " " + cardNumber.value.slice(4,8) + " " +cardNumber.value.slice(8,12) + " " +cardNumber.value.slice(12) 
    expiryDateDisplay.innerHTML = expiryDateMM.value + '/' + expiryDateYY.value
    cvvDisplay.innerHTML = cvvNumber.value
    
})

document.querySelector('#main>button').addEventListener('click',e=>{
    const elementsToHide = document.querySelectorAll('#form>div,#form>button')
    elementsToHide.forEach((el,idx)=>{
        if(idx===2){
            el.style.display = 'flex'
            return
        }
        el.style.display = 'block'
    })
    main.classList.remove('completed')
})

let numberRegex = /^[0-9]+$/;


const validateInfo = () => {
    let valid = true
    if(!formData.name.length>0){
        errData['name'] = 'Name cannot be empty'
        valid = false
    } else{
        errData['name'] = ''
    }
        
    if (!numberRegex.test(formData.number)) {
        errData['number'] = 'Wrong format, numbers only'
        valid = false
    } else{
        errData['number'] = ''
    }
    if(!(formData['expiryMM'].length>0 && formData['expiryYY'].length>0)){
        errData['expiry'] = 'Can\'t be blank'
        valid = false
    } else{
        errData['expiry'] = ''
    }
    if(!formData['cvv'].length>0){
        errData['cvv'] = 'Can\'t be blank'
        valid = false
    } else{
        errData['cvv'] = ''
    }
    return valid
}