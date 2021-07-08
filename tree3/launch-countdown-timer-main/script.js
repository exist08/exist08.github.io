const dd=document.getElementById('dd')
const hr=document.getElementById('hr')
const mins=document.getElementById('min')
const secs=document.getElementById('sec')

const func=()=>{

    const today=Date.now()
    
    const newdate=new Date("July 23, 2021 00:00:00")
    
    var diff=newdate-today
    
    var sec=1000
    var min=sec*60
    var hour=min*60
    var day=hour*24
    
    var dayDiff=Math.floor(diff/day)
    var hrsDiff=Math.floor((diff%day)/hour)
    var minDiff=Math.floor(((diff%day)%hour)/min)
    var secDiff=Math.floor((((diff%day)%hour)%min)/sec)
    
    dd.innerHTML=dayDiff
    hr.innerHTML=hrsDiff
    mins.innerHTML=minDiff
    secs.innerHTML=secDiff
}

var g=setInterval(()=>func(),1000)
    