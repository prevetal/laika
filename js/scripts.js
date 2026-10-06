BODY = document.getElementsByTagName('body')[0]

// Mobile width
initAdaptiveViewport()

document.addEventListener('DOMContentLoaded', function() {
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