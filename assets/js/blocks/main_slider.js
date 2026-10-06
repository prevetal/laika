// js/blocks/main_slider.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initMainSLider = () => {
        qsa('.main_slider .swiper').forEach((el) => {
            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: true,
                speed: 500,
                watchSlidesProgress: true,
                slideActiveClass: 'active',
                slideVisibleClass: 'visible',
                spaceBetween: getCssVar(el, '--spaceBetween'),
                slidesPerView: getCssVar(el, '--slidesPerView'),
                lazy: true,
                pagination: {
                    el: el.querySelector('.swiper-pagination'),
                    type: 'bullets',
                    clickable: true,
                    bulletActiveClass: 'active'
                },
                navigation: {
                    nextEl: el.querySelector('.swiper-button-next'),
                    prevEl: el.querySelector('.swiper-button-prev')
                }
            })
        })
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initMainSLider)
})()