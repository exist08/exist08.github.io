const btn = document.getElementById('btn')

const cont1 = document.getElementById('cont-1')
const cont2 = document.getElementById('cont-2')


const btns = document.querySelectorAll('.btns')
let i=0
btns.forEach((button,idx)=>{
    button.onclick = () =>{
        i=idx+1
        console.log(idx)
    }
})

const span = document.getElementById('count')

btn.onclick = ()=>{
    cont1.style.display = 'none'
    cont2.style.display = 'flex'
    span.innerHTML=i
}