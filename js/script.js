let mask = document.querySelector('.loader-container');

window.addEventListener('load', () => {
	mask.classList.add('hide');
	setTimeout(() => {
		mask.remove();
	}, 600);
})