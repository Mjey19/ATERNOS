gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

gsap.fromTo('.header-txt-block', {opacity: 1}, {
    opacity:0,
    scrollTrigger: {
        trigger: '.header-txt-block',
        start:'center',
        bottom:'end',
        scrub: true
    }
})



// gsap.fromTo('.peculiarities .part-inner', {x:-50}, {
//     x:0,
//     scrollTrigger: {
//         trigger: '.peculiarities .part-inner',
//         bottom: 'center',
//         scrub: true
//     }
// })


} 

