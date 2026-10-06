// js/blocks/about_info.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    const aboutInfo = document.querySelector('.about_info')

    // Функция инициализации
    const initAboutInfoSLider = () => {
        qsa('.about_info .swiper').forEach((el) => {
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
                navigation: {
                    nextEl: aboutInfo.querySelector('.swiper-button-next'),
                    prevEl: aboutInfo.querySelector('.swiper-button-prev')
                },
                pagination: {
                    el: aboutInfo.querySelector('.swiper-pagination'),
                    type: 'bullets',
                    clickable: true,
                    bulletActiveClass: 'active'
                },
            })
        })
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initAboutInfoSLider)
})()