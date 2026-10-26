/*
	Small progressive enhancements. The page works fully without JavaScript:
	navigation is plain anchor links and the form falls back to a normal POST.
*/

(() => {

	// Highlight the navigation link of the section currently in view.
		const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver((entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					for (const link of navLinks) {
						if (link.hash === '#' + entry.target.id)
							link.setAttribute('aria-current', 'true');
						else
							link.removeAttribute('aria-current');
					}
				}
			}, { rootMargin: '-45% 0px -55% 0px' });

			for (const link of navLinks) {
				const section = document.querySelector(link.hash);
				if (section) observer.observe(section);
			}
		}

	// Contact form: send through Formspree's JSON API and report the result in
	// place, instead of navigating away to Formspree's confirmation page.
		const form = document.querySelector('.contact-form');

		if (form) {
			const status = form.querySelector('.form-status');
			const submit = form.querySelector('[type="submit"]');

			const setStatus = (message, state) => {
				status.textContent = message;
				status.dataset.state = state;
			};

			form.addEventListener('submit', async (event) => {
				event.preventDefault();
				submit.disabled = true;
				setStatus('Sending…', 'pending');

				try {
					const response = await fetch(form.action, {
						method: 'POST',
						body: new FormData(form),
						headers: { Accept: 'application/json' }
					});

					if (!response.ok) {
						const data = await response.json().catch(() => ({}));
						throw new Error(data.errors ? data.errors.map((e) => e.message).join(', ') : '');
					}

					form.reset();
					setStatus('Thank you, your message has been sent.', 'success');
				}
				catch (error) {
					setStatus(
						'Sorry, your message could not be sent' + (error.message ? ' (' + error.message + ')' : '') +
						'. Please try again later, or reach me through one of the profiles listed.',
						'error'
					);
				}
				finally {
					submit.disabled = false;
				}
			});
		}

})();
