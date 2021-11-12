const images=['./images/icon-work.svg','./images/icon-play.svg','./images/icon-study.svg',
'./images/icon-exercise.svg','./images/icon-social.svg','./images/icon-self-care.svg']

const colors=['hsl(15, 100%, 70%)','hsl(195, 74%, 62%)','hsl(348, 100%, 68%)',
'hsl(145, 58%, 55%)','hsl(264, 64%, 52%)','hsl(43, 84%, 65%)']


const cards=document.getElementById('cards')

const getData = async (showby) =>{
    const res = await fetch('data.json')
    const data = await res.json()
    console.table(data)
    cards.innerHTML=''
    data.map((data,idx)=>{
        if(showby==='daily'){
            cards.innerHTML+=`
            <div class="card" style='background-color:${colors[idx]};background-image:url(${images[idx]})'>
            <div class="card-content">
            <p class="work">
            ${data.title}
            </p>
            <p class="three-dot">
            <img src="./images/icon-ellipsis.svg" alt="">
            </p>
            <p class="work-time">
            ${data.timeframes.daily.current}hrs
            </p>
            <p class="last-work-time">
            Yesterday - ${data.timeframes.daily.previous}hrs
            </p>
            </div>
            </div>`
        }
        else if(showby==='monthly'){
            cards.innerHTML+=`
            <div class="card" style='background-color:${colors[idx]};background-image:url(${images[idx]})'>
            <div class="card-content">
            <p class="work">
            ${data.title}
            </p>
            <p class="three-dot">
            <img src="./images/icon-ellipsis.svg" alt="">
            </p>
            <p class="work-time">
            ${data.timeframes.monthly.current}hrs
            </p>
            <p class="last-work-time">
            Last Month - ${data.timeframes.monthly.previous}hrs
            </p>
            </div>
            </div>`
        }
        else{
            cards.innerHTML+=`
            <div class="card" style='background-color:${colors[idx]};background-image:url(${images[idx]})'>
            <div class="card-content">
            <p class="work">
            ${data.title}
            </p>
            <p class="three-dot">
            <img src="./images/icon-ellipsis.svg" alt="">
            </p>
            <p class="work-time">
            ${data.timeframes.weekly.current}hrs
            </p>
            <p class="last-work-time">
            Last Week - ${data.timeframes.weekly.previous}hrs
            </p>
            </div>
            </div>`
        }
    })
}

getData()


const btns=document.querySelectorAll('button')
btns.forEach((btn,idx)=>{
    btn.onclick=()=>{
        const showby = btn.classList[0]
        getData(showby)
    }
})
