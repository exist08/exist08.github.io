const card=document.getElementById('card')
const img=document.getElementById('image')

const imgsrc=[
    './images/card_download (10).png'
]

function getRandInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
let clicked=true
var i
card.onclick = () => {
    card.style.animation=`anim 1s linear forwards`

    if(clicked){
        i=getRandInteger(52,67)
        img.src=`./imagesHERO/card_download (${i}).png`
    }
    clicked=false
    img.style.animation=`fade 1s linear forwards .6s`
    if(i==66){
        setTimeout(() => {
            confetti({
                particleCount:150,
                spread:60,
                origin:{
                    y:0.6
                }});
        }, 1000);
    }
}

const open=document.getElementById('open')
open.onclick = () =>{
    // $('#card').load(window.location.href+'#card')
    $('#image').load(window.location.href+'#image')
    card.style.animation=``
    img.style.animation=``
    clicked=true
}