const bill = document.getElementById('bill')
const peoples = document.getElementById('peoples')
const custom = document.getElementById('custom')
// const tip=document.getElementById('tip')

const tip_amount = document.getElementById('tip_amount')
const total_amount = document.getElementById('total_amount')

const reset = document.getElementById('reset')
reset.onclick = function () {
    bill.value = ''
    peoples.value = ''
    custom.value = ''
}

function pass(val) {
    console.log(typeof bill.value,bill.value)
    tip_amount.innerText = ((bill.value * val / 100) / peoples.value).toPrecision(3)
    let temp=(tip_amount.innerText * peoples.value)
    
    console.log(typeof temp,temp)
    let temp2= bill.value*1 + temp

    console.log(typeof temp2,temp2)
    total_amount.innerHTML = (temp2/5).toPrecision(4)
}
