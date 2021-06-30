var views = ['10K', '50K', '100K', '500K', '1M']


var viewCount = document.getElementById('view-count')
var expense = document.getElementById('expense')
var expense2 = document.getElementById('expense2')

var prices = [8.00, 12.00, 16.00, 24.00, 36.00]

const chk = document.getElementById('check-box')

chk.onclick= ()=>{
    if (chk.checked === true) {
        prices = [6,9,12,18,27]
    }
    else{
        prices = [8, 12, 16, 24, 36]
    }
}

function valChanger(value) {
    
    var slider = document.getElementById('slider')
    slider.min = prices[0]
    slider.max = prices[prices.length-1]


    expense.innerHTML = value
    for (let i = 0; i < 4; i++) {
        if (expense.innerHTML >= prices[i] && expense.innerHTML < prices[i + 1])
            viewCount.innerHTML = views[i]
    }
    expense2.innerHTML = value
    for (let i = 0; i < 4; i++) {
        if (expense2.innerHTML >= prices[i] && expense2.innerHTML < prices[i + 1])
            viewCount.innerHTML = views[i]
    }
    
    if (expense.innerHTML >= prices[4])
    viewCount.innerHTML = views[4]
    if (expense2.innerHTML >= prices[4])
    viewCount.innerHTML = views[4]
}



