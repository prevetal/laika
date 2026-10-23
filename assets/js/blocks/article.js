// js/blocks/article.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initArticleSLider = () => {
        qsa('.text_block .slider .thumbs .swiper').forEach((el) => {
            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: false,
                speed: 500,
                watchSlidesProgress: true,
                slideActiveClass: 'active',
                slideVisibleClass: 'visible',
                lazy: true,
                spaceBetween: getCssVar(el, '--spaceBetween'),
                slidesPerView: getCssVar(el, '--slidesPerView'),
            })
        })

        qsa('.text_block .slider .big .swiper').forEach((el) => {
            const thumbsSlider = el.closest('.slider')
                .querySelector('.thumbs .swiper')

            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: false,
                freeMode: {
                    enabled: true,
                    momentum: true
                },
                speed: 500,
                watchSlidesProgress: true,
                slideActiveClass: 'active',
                slideVisibleClass: 'visible',
                lazy: true,
                navigation: {
                    nextEl: el.querySelector('.swiper-button-next'),
                    prevEl: el.querySelector('.swiper-button-prev')
                },
                spaceBetween: getCssVar(el, '--spaceBetween'),
                slidesPerView: getCssVar(el, '--slidesPerView'),
                thumbs: {
                    swiper: thumbsSlider.swiper
                },
            })
        })
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initArticleSLider)
})()