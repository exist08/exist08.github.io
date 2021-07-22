// theme Switcher
const themeSwitcher = document.getElementById('theme-switcher')
themeSwitcher.onclick = () => {
    themeSwitcher.classList.toggle('active')
    document.body.classList.toggle('dark')
    document.getElementsByClassName('container')[0].classList.toggle('dark')
}

function listStyler(){
    const liChkBtn = document.querySelectorAll('#todo-list li .chk-btn')
    const list = document.querySelectorAll('#todo-list li')
    
    for (let i = 0; i < liChkBtn.length; i++) {
        liChkBtn[i].onclick = () => {
            liChkBtn[i].classList.toggle('active')
            if (liChkBtn[i].classList.contains('active')) {
                list[i].classList.add('active')
            }
            else {
                list[i].classList.remove('active')
            }
        }
    }


        //  *************************** mid menu ******************************
        const midMenu = document.querySelectorAll('.mid.menu span')
        midMenu[0].onclick = () => {                            // View All effect
            midMenu[0].style.cssText+='color:var(--bright-blue);'
            midMenu[1].style.cssText+='color: var(--text-bg);'
            midMenu[2].style.cssText+='color: var(--text-bg);'
            for (let i = 0; i < list.length; i++) {
                list[i].style.cssText += `display:block;
                width: unset;
                height: 60px;
                background: var(--main-bg);
                color: var(--text-bg);
                font-size: 1.2em;
                padding: 0 2.5em;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--text-bg);
                position: relative;
                transition: 0.5s;`
            }
        }
        midMenu[1].onclick = () => {                            // View Active/Uncompleted effect
            midMenu[1].style.cssText+='color:var(--bright-blue);'
            midMenu[0].style.cssText+='color: var(--text-bg);'
            midMenu[2].style.cssText+='color: var(--text-bg);'
            for (let i = 0; i < list.length; i++) {
                if (list[i].classList.contains('active')) {       //Completed hiding
                    list[i].style.cssText = 'display:none'
                }
                if (!list[i].classList.contains('active')) {      //Uncompleted showing
                    list[i].style.cssText += `display:block;
                    width: unset;
                    height: 60px;
                    background: var(--main-bg);
                    color: var(--text-bg);
                    font-size: 1.2em;
                    padding: 0 2.5em;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid var(--text-bg);
                    position: relative;
                    transition: 0.5s;`
                }
            }
        }
        midMenu[2].onclick = () => {                            // View Completed effect
            midMenu[2].style.cssText+='color:var(--bright-blue);'
            midMenu[1].style.cssText+='color: var(--text-bg);'
            midMenu[0].style.cssText+='color: var(--text-bg);'
            for (let i = 0; i < list.length; i++) {
                if (!list[i].classList.contains('active')) {      //Uncompleted hiding
                    list[i].style.cssText = 'display:none'
                }
                if (list[i].classList.contains('active')) {   //Completed showing
                    list[i].style.cssText += `display:block;
                    width: unset;
                    height: 60px;
                    background: var(--main-bg);
                    color: var(--text-bg);
                    font-size: 1.2em;
                    padding: 0 2.5em;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid var(--text-bg);
                    position: relative;
                    transition: 0.5s;`
                }
            }
        }
    
    
    
        // *********************** bottom menu *****************************
    
        const bottomMenu = document.querySelectorAll('.bottom.menu span')
        bottomMenu[0].onclick = () => {                            // View All effect
            bottomMenu[0].style.cssText+='color:var(--bright-blue);'
            bottomMenu[1].style.cssText+='color: var(--text-bg);'
            bottomMenu[2].style.cssText+='color: var(--text-bg);'
            for (let i = 0; i < list.length; i++) {
                list[i].style.cssText += `display:block;
                width: unset;
                height: 60px;
                background: var(--main-bg);
                color: var(--text-bg);
                font-size: 1.2em;
                padding: 0 2.5em;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--text-bg);
                position: relative;
                transition: 0.5s;`
            }
        }
        bottomMenu[1].onclick = () => {                            // View Active/Uncompleted effect
            bottomMenu[1].style.cssText+='color:var(--bright-blue);'
            bottomMenu[0].style.cssText+='color: var(--text-bg);'
            bottomMenu[2].style.cssText+='color: var(--text-bg);'
            for (let i = 0; i < list.length; i++) {
                if (list[i].classList.contains('active')) {       //Completed hiding
                    list[i].style.cssText = 'display:none'
                }
                if (!list[i].classList.contains('active')) {      //Uncompleted showing
                    list[i].style.cssText += `display:block;
                    width: unset;
                    height: 60px;
                    background: var(--main-bg);
                    color: var(--text-bg);
                    font-size: 1.2em;
                    padding: 0 2.5em;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid var(--text-bg);
                    position: relative;
                    transition: 0.5s;`
                }
            }
        }
        bottomMenu[2].onclick = () => {                            // View Completed effect
            bottomMenu[2].style.cssText+='color:var(--bright-blue);'
            bottomMenu[1].style.cssText+='color: var(--text-bg);'
            bottomMenu[0].style.cssText+='color: var(--text-bg);'
            for (let i = 0; i < list.length; i++) {
                if (!list[i].classList.contains('active')) {
                    list[i].style.cssText = 'display:none'
                }
                if (list[i].classList.contains('active')) {
                    list[i].style.cssText += `display:block;
                    width: unset;
                    height: 60px;
                    background: var(--main-bg);
                    color: var(--text-bg);
                    font-size: 1.2em;
                    padding: 0 2.5em;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid var(--text-bg);
                    position: relative;
                    transition: 0.5s;`
                }
            }
        }
    
}




const inputBox = document.getElementById('user-input')
//Form element
const form = document.getElementById('form')
// <ul> element
const todo = document.getElementById('todo-list')

showTasks()


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let userData = inputBox.value
    if (userData.trim() != 0) {
        let getLocalStorage = localStorage.getItem('New Todo')        // get localStorage item ('New Todo')
        if (getLocalStorage == null) {                              // if localStorage item ('New Todo') doesn't exist
            listArr = [];                                  // create blank array
        }
        else {
            listArr = JSON.parse(getLocalStorage)
        }
        listArr.push(userData)                                      // push userData/todo in array
        localStorage.setItem('New Todo', JSON.stringify(listArr))        // stringify the object into string while storing it in localStorage
    }
    showTasks()         // Calling showTasks func which show stored todos
})

// function to show tasks
function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo')        // get localStorage item ('New Todo')
    if (getLocalStorage == null) {                              // if localStorage item ('New Todo') doesn't exist
        listArr = [];                                  // create blank array
    }
    else {
        listArr = JSON.parse(getLocalStorage)
    }
    let newLiTag = ''
    listArr.forEach((element, index) => {
        newLiTag += `<li><span class="chk-btn"></span>${element}<span class="close-btn" onclick='deleteLi(${index})'></span></li>`
    });
    todo.innerHTML = newLiTag               // add <li> under <ul>
    inputBox.value = ''
    listStyler()
    document.getElementById('items-num').innerHTML=listArr.length
}

function deleteLi(index){
    let getLocalStorage = localStorage.getItem('New Todo')        // get localStorage item ('New Todo')
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index,1)
    localStorage.setItem('New Todo',JSON.stringify(listArr))
    showTasks()
}
