var slideIndex = 0

const slides = document.querySelectorAll('.slide')
var screenx = 0
var screeny = 0

document.getElementById('slider').addEventListener('touchstart', (e) => {
    screenx = e.changedTouches[0].screenX
    screeny = e.screenY
})
document.getElementById('slider').addEventListener('touchend', (e) => {
    console.log(e.changedTouches[0].screenX)
    if (screenx != e.changedTouches[0].screenX) {
        nextSlide()
        screenx = 0
    }
})
function nextSlide() {
    if (slideIndex === slides.length - 1) slideIndex = 0
    else slideIndex += 1
    slides.forEach((item, index) => {
        if (index !== slideIndex) {
            item.classList.remove('active')
            item.classList.remove('fadeRight')
        }
        else {
            item.classList.add('active')
            item.classList.add('fadeRight')
        }
    })
    console.log(slideIndex)
}