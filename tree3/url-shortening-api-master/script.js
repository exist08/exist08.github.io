// let impArray = ['Red Notice','Shang-chi','Venom']
// localStorage.setItem('movies',JSON.stringify(impArray))
// let moviesss=localStorage.getItem('movies')
// let moviesssArray=JSON.parse(moviesss)
// console.log(moviesss,typeof moviesss)
// moviesssArray.map(movie=>console.log(movie))


const copyWork=()=>{

    /******************* Copy Text *************************/
    const copyButtons = document.getElementsByClassName('copy-btn')         // all Copy Buttons in short-links
    console.log(copyButtons,copyButtons.length)
    for (let i = 0; i < copyButtons.length; i++) {
        copyButtons[i].onclick=()=>{                        // copy text of their respective short-link
            console.log('Hiii', i)                                          
            var text = document.getElementsByClassName('short-link')[i].innerText;      // using the respective index
            var elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = text;
            elem.select();
            document.execCommand("copy");
            document.body.removeChild(elem);
        }
    }
}


const linksContainer=document.getElementById('links-container')

let arr=[]  // empty array of links
if(!localStorage.getItem('links')){                     // at start if links doesn't exist
    localStorage.setItem('links',JSON.stringify(arr))       // create 'links' item in localStorage 
}
else{
    arr=JSON.parse(localStorage.getItem('links'))
}

const shorteningButton=document.getElementById('shortening-btn')    // Shorten it button
const form = document.getElementById('form')                // form
form.addEventListener('submit',e=>{
    e.preventDefault()
})
shorteningButton.onclick = () =>{
    const input=document.getElementById('input')
    console.log(input.value)
    const fullLink = input.value

    const getData = async () =>{
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${fullLink}`)
        const data = await res.json()
        console.log(data)

        const newLink =`<span class="urls">${data.result.original_link} <span class="short-link" id="short-link">${data.result.full_short_link}</span><button id="copy-btn" class="copy-btn">Copy</button></span>`
        arr.push(newLink)
        localStorage.setItem('links',JSON.stringify(arr))
        fetchStorage()
    }
    if(fullLink.length>0)
    getData()
    else{
        alert('Link field is empty')
    }
}

const fetchStorage = () =>{
    let linkList=''
    
    const links = JSON.parse(localStorage.getItem('links'))
    links.map(link=>{
        linkList+=link
    })
    linksContainer.innerHTML=linkList
    copyWork()
}

fetchStorage()
