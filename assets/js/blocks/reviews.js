// js/blocks/reviews.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initReviewsSLider = () => {
        qsa('.reviews .review .swiper').forEach((el) => {
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
                nested: true,
            })

            bindEqualHeightObserver(el, '.review')
        })

        qsa('.reviews .swiper.main').forEach((el) => {
            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: true,
                loopAdditionalSlides: 1,
                speed: 500,
                watchSlidesProgress: true,
                slideActiveClass: 'active',
                slideVisibleClass: 'visible',
                lazy: true,
                navigation: {
                    nextEl: el.querySelector('.swiper-button-next'),
                    prevEl: el.querySelector('.swiper-button-prev')
                },
                pagination: {
                    el: el.querySelector('.swiper-pagination'),
                    type: 'bullets',
                    clickable: true,
                    bulletActiveClass: 'active'
                },
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
                    },
                    1280: {
                        spaceBetween: getCssVar(el, '--spaceBetween-1280'),
                        slidesPerView: getCssVar(el, '--slidesPerView-1280'),
                    }
                },
            })

            bindEqualHeightObserver(el, '.review')
        })
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initReviewsSLider)
})()