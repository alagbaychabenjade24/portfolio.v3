const menu = document.querySelector('header nav .menu');
const navLinks = document.querySelector('header nav ul');
const navLinksLists = document.querySelectorAll('header nav ul li');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

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

footer.addEventListener('click', () => {
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

(function () {
	emailjs.init('user_xeyKYZwBaxPmjLfS1peuQ');
})();

const sendEmail = () => {
	const emailParams = {
		first_name: document.getElementById('first-name').value,
		last_name: document.getElementById('last-name').value,
		email: document.getElementById('email').value,
		company: document.getElementById('company').value,
		message: document.getElementById('message').value
	};

	emailjs.send('service_qksa7rc', 'template_rhljmcv', emailParams);
};

const successPopup = document.querySelector('.success__popup');
const successClose = document.querySelector('.success__popup__close');

successClose.addEventListener('click', () => {
	successPopup.classList.add('success__popup__remove');
});
