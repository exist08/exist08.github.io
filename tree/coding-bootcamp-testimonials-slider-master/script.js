window.onload = function () {

    const texts = [
        {
            paraTxt: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
            nameTxt: 'Tanya Sinclair',
            jobTxt: 'UX Engineer'
        }, {
            paraTxt: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
            nameTxt: 'John Tarkpor',
            jobTxt: 'Junior Front-end Developer'
        }
    ]

    const imgs = ['./images/image-tanya.jpg', './images/image-john.jpg']


    var i = 0

    var lb = document.getElementById('left')
    var rb = document.getElementById('right')

    
    rb.onclick = () => {
        i++
        if (i > 1)
        i = 0
        setter(i)
    }
    lb.onclick = () => {
        i--
        if (i < 0)
        i = 1
        setter(i)
    }
    
    setter = (i) => {
        var para = document.getElementById('para')
        var named = document.getElementById('name')
        var job = document.getElementById('job')
        
        para.innerHTML = `${texts[i].paraTxt}`
        named.innerHTML = `${texts[i].nameTxt}`
        job.innerHTML = `${texts[i].jobTxt}`
        
        var iBox = document.getElementById('iBox')
        
        iBox.style.backgroundImage = `url(${imgs[i]})`
    }
    setter(i)   // for first time run
}



