const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div')
const container = document.querySelector('.container')

let count = 0
for (const slide of slidesCount){
    count++
}

let activeSlideIndex = 0

sideBar.style.top = `-${(count - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === count) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = count - 1
        }
    }

    const height = container.clientHeight 

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}