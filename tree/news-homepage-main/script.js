const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click',() => {
    closeIcon.style.display = 'block';
    menuIcon.style.transform = 'translateX(100px)';
    closeIcon.style.transform = 'translateX(0px)';
    menuIcon.style.display = 'none';
    navMenu.classList.add('active')
})
closeIcon.addEventListener('click',() => {
    menuIcon.style.display = 'block';
    menuIcon.style.transform = 'translateX(0px)';
    closeIcon.style.transform = 'translateX(100px)';
    closeIcon.style.display = 'none';
    navMenu.classList.remove('active')
})