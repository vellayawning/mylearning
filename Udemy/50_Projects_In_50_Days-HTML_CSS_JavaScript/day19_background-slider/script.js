const body = document.body
const slides = document.querySelectorAll('.slides')
const leftBtn = document.getElementById('.left')
const rightBtn = document.getElementById('.right')


let activeSlide = 0

rightBtn.addEventListener('click',() => {
    activeSlide++

    if(activeSlide > slides.legth - 1) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})

rightBtn.addEventListener('click',() => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    
    setBgToBody()
    setActiveSlide()
})


setBgToBody()



function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}


function setActiveSlide(){
    slides.forEach(slides => slides.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}