//  sliders for reviews 
new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: true,
    spaceBetween:102,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    autoHeight: true,
    slidesPerView:3,
    watchOverflow:true,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
  
    // autoplay: {
    //     delay: 3000,
    //     stonOnLastSlide: true,
    //     disableOnInteraction: false
    // },
    zoom: {
        maxRatio: 5,
        minRatio: 1
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        992: {
            slidesPerView: 2,
            spaceBetween:60,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 90
        },
        1020: {
            slidesPerView:3,
            spaceBetween: 102
        }
    },
    
})

// sliders for banner
let textBanner = document.querySelector('.description-right-note')
let titleBanner = document.querySelector('.description-right-sale')
let iconBanner = document.querySelector('.description-sale')

let buttonBanner = document.querySelector('.banner-button')
$(document).ready(function(){
    $('.banner-slider').slick({
        infinite: true,
        vertical: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        cssEase: 'ease-out',
        autoplay: true,
        autoplaySpeed: 2000,
        zIndex: -100,
        responsive: [
            {
                breakpoint: 870,
                settings: {
                    vertical: true,
                    dots: true,
                }
            },
        ]
      
       
    });
    });

    function Timer() {
if (document.querySelector('#slick-slide00').classList.contains('slick-active')) {
iconBanner.style.lineHeight = '77px'
iconBanner.innerHTML = '10%'
titleBanner.innerHTML = ' cкидка до 30 февраля'
textBanner.innerHTML = 'для записи по специальной цене нажмите кнопку!'
}
if (document.querySelector('#slick-slide01').classList.contains('slick-active')) {
iconBanner.style.lineHeight = '77px'
iconBanner.innerHTML = `<img style="width:50px; height:50px;" src="../assets/icons/sale.svg">`
titleBanner.innerHTML = ' '
textBanner.innerHTML = '<p class="description-right-sale">Долговременная укладка + ламинирование ресниц <br> + ботокс ресниц в подарок = <span style="text-decoration: line-through;">4100₽</span> <span style="color:#E067C3;">3600₽</span></p>'
}
if (document.querySelector('#slick-slide02').classList.contains('slick-active')) {
iconBanner.style.lineHeight = '76px'
iconBanner.innerHTML = `<img style="width:50px; height:50px;" src="../assets/icons/sale.svg">`
titleBanner.innerHTML = ''
textBanner.innerHTML = '<p class="description-right-sale">Двойной объем <br> + оформление бровей = <span style="text-decoration: line-through;">3200</span><span style="color:#E067C3;"> 2900₽</span> </p>'
}
}
setInterval(Timer, 10)










// Scroll

//  Закрыть модальное окно при Esc
window.addEventListener('keydown', (e) => {
    if(e.key === "Escape"){
        document.querySelector('.modal').classList.remove('open')
    }
})

// Закрыть модальное окно при клике вне его

// document.querySelector('.modal .modal__box').addEventListener('click', e => {
//     e.__IsClickWithInModal * true;
// })

// document.querySelector('.modal').addEventListener('click', e=>{
//     if (e.__IsClickWithInModal) return;
//     e.currentTarget.classList.remove('open')
// })






