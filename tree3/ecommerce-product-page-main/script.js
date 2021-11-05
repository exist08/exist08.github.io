
const menu=document.querySelector('.navbar ul')


const hamburger=document.querySelector('.hamburger')
hamburger.addEventListener('click',()=>{
    menu.classList.add('active')
})

const close_hamburger=document.querySelector('.navbar ul .close-icon')
close_hamburger.addEventListener('click',()=>{
    menu.classList.remove('active')
})



/*    Image Swicther Logic    */


const currentImg=document.getElementById('currentImg')
currentImg.src='./images/image-product-1.jpg'

const images=document.querySelectorAll('.images')
images.forEach(img=>{
    img.onclick = () =>{
        console.log(img.classList[0])
        currentImg.src=`./images/image-${img.classList[0]}.jpg`
    } 
})



/*     Cart Counter Logic     */
const plus=document.getElementById('inc')
const minus=document.getElementById('dec')
const count=document.getElementById('count')
let countItems=0
count.innerHTML=countItems

plus.onclick = () =>{
    countItems++
    count.innerHTML=countItems
} 
minus.onclick = () =>{
    if (countItems>0) 
    {
        countItems--
        count.innerHTML=countItems
    }
} 



/*    Mobile Image Swicther Logic    */

const thumbnailImages=['./images/image-product-1.jpg',
'./images/image-product-2.jpg',
'./images/image-product-3.jpg',
'./images/image-product-4.jpg',
'./images/image-product-1.jpg']

const left=document.getElementById('left')
const right=document.getElementById('right')


const mobileImg=document.getElementById('mobileImg')

let idx=0
mobileImg.src=thumbnailImages[idx]

left.onclick = () =>{
    idx--
    if(idx<0)
    idx=3
    mobileImg.src=thumbnailImages[idx]
} 
right.onclick = () =>{
    idx++
    if(idx>3)
    idx=0
    mobileImg.src=thumbnailImages[idx]
} 




/*   Cart Items Logic   *********************************************************************************/
let item = {
    poster:'./images/image-product-1.jpg',
    name:'Fall Limited Edition Sneakers',
    price:'$125.00'
}

let items=[]
var removeItem

/*   Cart Summary Logic   */
const cartSummary = document.getElementById('cartsummary')
const cartCount = document.getElementById('cartcount')
const chkCart = ()=>{
    if(items.length>0){
        cartCount.innerHTML=`${items.length}`           // cart items count
        cartCount.style.cssText+='padding: .1rem'
        cartSummary.innerHTML=`
        <div class="item-details">
            <img src="./images/image-product-1-thumbnail.jpg" alt="">
            <div class="item-purchase-details">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x <span id="lengthtofitems">${items.length}</span> <span id="totalpayable">$${125*items.length}</span> </p>
            </div>
            <img src="./images/icon-delete.svg" alt="" id="removeitem">
        </div>
        <button>Checkout</button>`
        removeItem = document.getElementById('removeitem')
        removeItem.onclick = () =>{
            items = []                 // Remove items from Cart
            chkCart()
            cartCount.innerHTML=``           // cart itemsCount removed
            cartCount.style.cssText-='padding: .1rem'   
            console.log(items)
        }
    }
    else{
        cartSummary.innerHTML=`<p>Your cart is empty.</p>`
    }

}
chkCart()                 // first time run to show cart is empty



const addToCart = document.getElementById('addtocart')
addToCart.onclick = () =>{                 
    console.log(countItems)
    for (let i = 0; i < countItems; i++) {
        items.push(item)                        // push items in the cart 
    }
    console.log(items)
    countItems=0                            // reset items num
    count.innerHTML=countItems
    chkCart()
}



/*   Cart Items Logic   *********************************************************************************/



/*   Cart Box Show-Hide   */
const cartIcon = document.getElementById('carticon')
const cartDetails = document.getElementById('cartdetails')
cartIcon.onclick = ()=>{
    cartDetails.classList.toggle('not-active')
}


