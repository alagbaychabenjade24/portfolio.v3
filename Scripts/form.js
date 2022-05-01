const form = document.querySelector('form');
const successPopup = document.querySelector('.success__popup');
const successClose = document.querySelector('.success__popup__close');

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

	emailjs
		.send('service_qksa7rc', 'template_rhljmcv', emailParams)
		.then(response => {
			if (response.status === 200) {
				successPopup.classList.add('success__popup__active');

				const removePopup = () => {
					successPopup.classList.remove('success__popup__active');
				};

				setTimeout(removePopup, 8000);
			}
		});

	form.reset();
};

successClose.addEventListener('click', () => {
	successPopup.classList.remove('success__popup__active');
});
