window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` /* without + plugins will not work */
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother) /* libs should be uploaded to html */
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})