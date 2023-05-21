var slideIndex = 0

const slides = document.querySelectorAll('.slide')
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