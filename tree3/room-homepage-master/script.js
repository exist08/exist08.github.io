// Image Array
const images = [
  './images/desktop-image-hero-1.jpg',
  './images/desktop-image-hero-2.jpg',
  './images/desktop-image-hero-3.jpg',
]
const mobileimages = [
  './images/mobile-image-hero-1.jpg',
  './images/mobile-image-hero-2.jpg',
  './images/mobile-image-hero-3.jpg',
]

// Intro Array
const intros = [
  `
<h1>
  Discover innovative ways to decorate
</h1>
<p>
  We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.
</p>
<button>
  Shop now <img src="./images/icon-arrow.svg" alt="">
</button>`,
  `
<h1>
  We are available all across the globe
</h1>
<p>
  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
</p>
<button>
  Shop now <img src="./images/icon-arrow.svg" alt="">
</button>`,
  `
<h1>
  Manufactured with the best materials
</h1>
<p>
  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.
</p>
<button>
  Shop now <img src="./images/icon-arrow.svg" alt="">
</button>`,
]

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const slideShow = document.getElementById('slideshow') // Slideshow
const intro = document.getElementById('intro') // Intro Container

let i = 0
slideShow.style.backgroundImage = `url(${images[i]})`       //Initial Value
intro.innerHTML=intros[i]                                   //Initial Value

rightBtn.onclick = () => {
  i++
  if (i > 2) i = 0
  slideShow.style.backgroundImage = `url(${images[i]})`
  intro.innerHTML=intros[i]
}
leftBtn.onclick = () => {
  i--
  if (i < 0) i = 2
  slideShow.style.backgroundImage = `url(${images[i]})`
  intro.innerHTML=intros[i]
}

const g = setInterval(() => {
    if(window.innerWidth<902)
    slideShow.style.backgroundImage = `url(${mobileimages[i]})`       //Initial Value
    else
    slideShow.style.backgroundImage = `url(${images[i]})`       //Initial Value
}, 1000);


/* drop down logic */
const menu=document.getElementById('menu')
const hamburger=document.getElementById('hamburger')
hamburger.onclick = ()=>{
    menu.classList.toggle('active')
    if(menu.classList.contains('active'))
    hamburger.innerHTML='<i class="fa-solid fa-xmark"></i>'
    else
    hamburger.innerHTML='<i class="fa-solid fa-bars"></i>'
}