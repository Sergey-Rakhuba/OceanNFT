// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'


document.querySelectorAll('a').forEach((elem) => {

    elem.onmouseenter =
        elem.onmouseleave = (e) => {

            const tolerance = 10

            const left = 0
            const right = elem.clientWidth

            let x = e.pageX - elem.offsetLeft

            if (x - tolerance < left) x = left
            if (x + tolerance > right) x = right

            elem.style.setProperty('--x', `${x}px`)

        }

})

if (matchMedia) {
    var screen = window.matchMedia("(min-width:993px)");
    screen.addListener(changes);
    changes(screen);
    function changes(screen) {
        if (screen.matches) {
            var swiper = new Swiper(".mySwiper", { watchSlidesProgress: true, slidesPerView: 4, });
        }
        else {
            var swiper = new Swiper(".mySwiper", { watchSlidesProgress: true, slidesPerView: 2.5, });
        }
    }
}