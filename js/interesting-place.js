document.querySelectorAll(".mark").forEach(mark => {
	mark.addEventListener("click", () => {
		const id = mark.dataset.popup;
		document.getElementById(id).style.display = "block";

		document.body.style.overflow = "hidden";
	});
});

document.querySelectorAll(".close").forEach(close => {
	close.addEventListener("click", () => {
		close.parentElement.parentElement.style.display = "none"; 
		
		document.body.style.overflow = "";
	});
});

const mapContent = document.getElementById('map-content');

const panzoom = Panzoom(mapContent, {
	maxScale: 5,
	minScale: 1,
	contain: 'outside',
	pinchSpeed: 1,
});

// Зум колесом для ПК
document.getElementById('map-wrapper')
	.addEventListener('wheel', panzoom.zoomWithWheel);

// Включение drag + pinch на мобильных
panzoom.bind();