// js/blocks/logos.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initLogosSLider = () => {
        qsa('.logos .swiper').forEach((el) => {
            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: true,
                speed: 6000,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                    reverseDirection: el.classList.contains('reverse'),
                },
                allowTouchMove: false,
                watchSlidesProgress: true,
                slideActiveClass: 'active',
                slideVisibleClass: 'visible',
                lazy: true,
                spaceBetween: getCssVar(el, '--spaceBetween'),
                slidesPerView: getCssVar(el, '--slidesPerView'),
            })
        })
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initLogosSLider)
})()