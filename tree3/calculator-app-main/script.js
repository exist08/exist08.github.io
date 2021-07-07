// const g= setInterval(()=>{
//     var ff=document.getElementById('input-txt').value
//     console.log(ff)
// },2000)

var ff=document.getElementById('input-txt')

function insert(val){
    ff.value+=val
}

function equal(){
    if(ff.value){
        ff.value=eval(ff.value)
    }
}

function reset(){
    ff.value=''
}

function del(){
    ff.value=ff.value.substring(0,ff.value.length-1)
}

const body=document.body
const slider=document.getElementById('slider')
slider.onclick = ()=>{
    if(slider.value==50){
        func1()
    }
    else if(slider.value==100){
        func2()
    }
    else{
        func3()
    }
}
function func1(){
    body.classList.add('light')
    body.classList.remove('dark')
}
function func2(){
    body.classList.add('dark')
    body.classList.remove('light')
} 
function func3(){
    body.classList.remove('dark')
    body.classList.remove('light')
} 