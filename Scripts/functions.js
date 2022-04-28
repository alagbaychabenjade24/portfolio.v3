const scrollTop = document.querySelector('.scroll__to__top');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 150) {
		scrollTop.classList.add('scroll__to__top--active');
	} else {
		scrollTop.classList.remove('scroll__to__top--active');
	}
});

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
	const windowPosition = window.scrollY > 610;

	header.classList.toggle('scrolling-active', windowPosition);
});
