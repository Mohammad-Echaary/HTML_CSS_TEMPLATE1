let bar = document.querySelector('.bar');
let sections = document.querySelector('.menu-section');

bar.addEventListener('click', () => {
	if (!bar.classList.contains('active')) {
		bar.classList.add('active');
		sections.classList.add('active');
	} else {
		bar.classList.remove('active');
		sections.classList.remove('active');
	}
});
