// js/blocks/persons.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initPersonsSLider = () => {
        qsa('.persons .swiper').forEach((el) => {
            const persons = el.closest('.persons')

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
                    nextEl: persons.querySelector('.swiper-button-next'),
                    prevEl: persons.querySelector('.swiper-button-prev')
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
        })
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initPersonsSLider)
})()