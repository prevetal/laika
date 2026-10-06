BODY = document.getElementsByTagName('body')[0]

// Mobile width
initAdaptiveViewport()

document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	const mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper(mainSlider, {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(mainSlider, '--spaceBetween'),
			slidesPerView: getCssVar(mainSlider, '--slidesPerView'),
			lazy: true,
			pagination: {
				el: mainSlider.querySelector('.swiper-pagination'),
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: mainSlider.querySelector('.swiper-button-next'),
				prevEl: mainSlider.querySelector('.swiper-button-prev')
			}
		})
	}


	// Reviews slider
	const reviewsSliders = [],
		reviewImagesSliders = [],
		reviewsSlider = document.querySelectorAll('.reviews .swiper.main'),
		reviewImagesSlider = document.querySelectorAll('.reviews .review .swiper')

	reviewImagesSlider.forEach((el, i) => {
		el.classList.add('review_images_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: getCssVar(el, '--spaceBetween'),
			slidesPerView: getCssVar(el, '--slidesPerView'),
			nested: true,
		}

		reviewImagesSliders.push(new Swiper('.review_images_s' + i, options))
	})

	reviewsSlider.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
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
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.review')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.review')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Process slider
	const processSliders = [],
		processSlider = document.querySelectorAll('.process .swiper')

	processSlider.forEach((el, i) => {
		el.classList.add('process_s' + i)

		const process = el.closest('.process')

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: process.querySelector('.swiper-button-next'),
				prevEl: process.querySelector('.swiper-button-prev')
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
		}

		processSliders.push(new Swiper('.process_s' + i, options))
	})


	// Projects slider
	const projectsSliders = [],
		projectsSlider = document.querySelectorAll('.projects .swiper')

	projectsSlider.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		let options = {
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
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Logos slider
	const logosSliders = [],
		logosSlider = document.querySelectorAll('.logos .swiper')

	logosSlider.forEach((el, i) => {
		el.classList.add('logos_s' + i)

		let options = {
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
		}

		logosSliders.push(new Swiper('.logos_s' + i, options))
	})


	// About info slider
	const aboutInfo = document.querySelector('.about_info'),
		aboutInfoSlider = document.querySelector('.about_info .swiper')

	if (aboutInfoSlider) {
		new Swiper(aboutInfoSlider, {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: getCssVar(aboutInfoSlider, '--spaceBetween'),
			slidesPerView: getCssVar(aboutInfoSlider, '--slidesPerView'),
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
	}


	// Equipment slider
	const equipmentSliders = [],
		equipmentSlider = document.querySelectorAll('.equipment .swiper')

	equipmentSlider.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		const equipment = el.closest('.equipment')

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: equipment.querySelector('.swiper-button-next'),
				prevEl: equipment.querySelector('.swiper-button-prev')
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
		}

		equipmentSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Persons slider
	const personsSliders = [],
		personsSlider = document.querySelectorAll('.persons .swiper')

	personsSlider.forEach((el, i) => {
		el.classList.add('persons_s' + i)

		const persons = el.closest('.persons')

		let options = {
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
		}

		personsSliders.push(new Swiper('.persons_s' + i, options))
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	document.addEventListener('click', async (e) => {
		const btn = e.target.closest('.copy_btn')
		if (!btn) return

		const text = btn.dataset.copy
		if (!text) return

		try {
			await navigator.clipboard.writeText(text)

			btn.classList.add('copied')

			setTimeout(() => btn.classList.remove('copied'), 1500)
		} catch (err) {
			console.error('Не удалось скопировать:', err)
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, .mob_menu .close_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	$('.mob_menu .catalog_btn').click((e) => {
		e.preventDefault()

		$('.mob_menu .catalog_inner').addClass('show')
	})


	$('.mob_menu .catalog_inner .btn').click(function(e) {
		e.preventDefault()

		$(this).next().addClass('show')
	})


	$('.mob_menu .catalog_inner > .back_btn').click((e) => {
		e.preventDefault()

		$('.mob_menu .catalog_inner').removeClass('show')
	})


	$('.mob_menu .catalog_inner .sub .back_btn').click((e) => {
		e.preventDefault()

		$('.mob_menu .catalog_inner .sub').removeClass('show')
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Phone input mask
	new Maska.MaskInput('input[type=tel]', {
		mask: '+7 (###) ###-##-##'
	})


	// Popovers
	document.querySelectorAll('[popover]').forEach(el => {
		el.addEventListener('toggle', e => {
			document.querySelector(`[popovertarget="${el.id}"]`)?.classList.toggle('active', e.newState === 'open')
		})
	})


	// Dialog
	$(document).on('click', '[data-open-modal]', function(e) {
		e.preventDefault()

		const id = $(this).data('modal')

		document.getElementById(id).showModal()
	})

	$(document).on('click', '[data-close-modal]', function() {
		$(this).closest('dialog')[0].close()
	})

	$(document).on('click', '.modal', function(e) {
		if (!$(e.target).closest('.inner').length) {
			this.close()
		}
	})
})