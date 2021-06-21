window.onload = () => {

    var hamburger = document.getElementById('menu')
    var list = document.getElementById('menu-list')
    hamburger.onclick = () => {
        hamburger.classList.toggle('active')
        list.classList.toggle('active')
    }

    const srcs = ['./images/desktop/image-deep-earth.jpg', './images/desktop/image-night-arcade.jpg', './images/desktop/image-soccer-team.jpg', './images/desktop/image-grid.jpg', './images/desktop/image-from-above.jpg', './images/desktop/image-pocket-borealis.jpg', './images/desktop/image-curiosity.jpg', './images/desktop/image-fisheye.jpg']

    var cards = document.querySelectorAll('.cards')

    console.log(cards.length)


    const srcs2 = ['./images/mobile/image-deep-earth.jpg', './images/mobile/image-night-arcade.jpg', './images/mobile/image-soccer-team.jpg', './images/mobile/image-grid.jpg', './images/mobile/image-from-above.jpg', './images/mobile/image-pocket-borealis.jpg', './images/mobile/image-curiosity.jpg', './images/mobile/image-fisheye.jpg']

    var g = setInterval(repp, 500)
    function repp() {
        if (window.innerWidth < 700) {
            for (let i = 0; i < srcs.length; i++) {
                cards[i].style.backgroundImage = `url(${srcs2[i]})`
            }
        }
        else {
            for (let i = 0; i < srcs.length; i++) {
                cards[i].style.backgroundImage = `url(${srcs[i]})`
            }
        }
    }
}