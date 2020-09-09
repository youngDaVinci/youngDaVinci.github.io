window.addEventListener('DOMContentLoaded', () => {
	const hamburgerBtn = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeBtn = document.querySelector('.menu__close');

	hamburgerBtn.addEventListener('click', () => {
		menu.classList.add('active');
		hamburgerBtn.style.display = 'none';
	});
	closeBtn.addEventListener('click', () => {
		menu.classList.remove('active');
		hamburgerBtn.style.display = '';
	});
	document.addEventListener('click', (e) => {
		if (e.target === document.querySelector('.menu__overlay')) {
			menu.classList.remove('active');
			hamburgerBtn.style.display = '';
		}
	});

	const counters = document.querySelectorAll('.skills__progress-value'),
		lines = document.querySelectorAll('.skills__progress-scale_now');

	counters.forEach((item, i) => {
		lines[i].style.width = item.innerHTML;
	});
	
});