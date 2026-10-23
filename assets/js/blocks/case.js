// js/blocks/case.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initCaseSLider = () => {
        qsa('.case_info .images .thumbs .swiper').forEach((el) => {
            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: false,
                speed: 500,
                watchSlidesProgress: true,
                slideActiveClass: 'active',
                slideVisibleClass: 'visible',
                lazy: true,
                breakpoints: {
                    0: {
                        spaceBetween: getCssVar(el, '--spaceBetween-0'),
                        slidesPerView: getCssVar(el, '--slidesPerView-0'),
                    },
                    768: {
                        spaceBetween: getCssVar(el, '--spaceBetween-768'),
                        slidesPerView: getCssVar(el, '--slidesPerView-768'),
                    },
                    1024: {
                        spaceBetween: getCssVar(el, '--spaceBetween-1024'),
                        slidesPerView: getCssVar(el, '--slidesPerView-1024'),
                    }
                },
            })
        })

        qsa('.case_info .images .big .swiper').forEach((el) => {
            const thumbsSlider = el.closest('.images')
                .querySelector('.thumbs .swiper')

            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: false,
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
    registerInit(initCaseSLider)
})()