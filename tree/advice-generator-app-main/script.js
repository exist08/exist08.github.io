const adviceNum = document.getElementById('num')
const para = document.getElementById('para')
const btn = document.getElementById('btn')

const getData = async () => {
    const res = await fetch(`https://api.adviceslip.com/advice`)
    const data = await res.json()
    return data
}

getData().then(data=>{
    adviceNum.innerHTML = data.slip.id
    para.innerHTML = data.slip.advice
})

btn.onclick = ()=>{
    getData().then(data=>{
        adviceNum.innerHTML = data.slip.id
        para.innerHTML = data.slip.advice
    })
}