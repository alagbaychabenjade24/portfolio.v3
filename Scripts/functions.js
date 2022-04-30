const menu = document.querySelector('header nav .menu');
const navLinks = document.querySelector('header nav ul');
const navLinksLists = document.querySelectorAll('header nav ul li');
const main = document.querySelector('main');

menu.addEventListener('click', () => {
	menu.classList.toggle('menu--clicked');

	navLinks.classList.toggle('nav__links__active');

	navLinksLists.forEach(navLinksList => {
		navLinksList.addEventListener('click', () => {
			menu.classList.toggle('menu--clicked');

			navLinks.classList.remove('nav__links__active');
		});
	});
});

main.addEventListener('click', () => {
	menu.classList.remove('menu--clicked');

	navLinks.classList.remove('nav__links__active');
});

const scrollTop = document.querySelector('.scroll__to__top');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 150) {
		scrollTop.classList.add('scroll__to__top--active');
	} else {
		scrollTop.classList.remove('scroll__to__top--active');
	}

	const windowPosition = window.scrollY > 610;

	header.classList.toggle('scrolling-active', windowPosition);

	if (window.pageYOffset + 1 || window.pageYOffset - 1) {
		menu.classList.remove('menu--clicked');

		navLinks.classList.remove('nav__links__active');
	}
});
