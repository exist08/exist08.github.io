// const tl = gsap.timeline({delay:2});
gsap.from(".links>a",{
    y:250,
    opacity:0,
    duration:.75,
    stagger:.3,
    ease: "bounce.out",
})
