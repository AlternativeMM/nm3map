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


const container = document.querySelector('.map-wrapper')
const img = document.querySelector('.container')

let zoom = 1
container.addEventListener('wheel', e => {
	img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`

	zoom += e.deltaY * -0.01
	zoom = Math.min(Math.max(1, zoom), 15)

	if (zoom == 1) {
		img.style.left = '0px'
		img.style.top = '0px'
	}

	img.style.transform = `scale(${zoom})`
})


let clicked = false
let xAxis;
let x;
let yAxis;
let y;

container.addEventListener('mouseup', () => container.style.cursor = 'auto')

container.addEventListener('mousedown', e => {
	clicked = true;
	xAxis = e.offsetX - img.offsetLeft;
	yAxis = e.offsetY - img.offsetTop;

	container.style.cursor = 'grabbing'
})

window.addEventListener('mouseup', () => clicked = false)

container.addEventListener('mousemove', e => {
	if (!clicked) return
	e.preventDefault()

	x = e.offsetX
	y = e.offsetY

	img.style.left = `${x - xAxis}px`
	img.style.top = `${y - yAxis}px`

	checkSize()
})

function checkSize() {
	let containerOut = container.getBoundingClientRect()
	let imgIn = img.getBoundingClientRect()

	if (parseInt(img.style.left) > 0) {
		img.style.left = '0px'
	} else if (imgIn.right < containerOut.right) {
		img.style.left = `-${imgIn.width - containerOut.width}px`
	}
	if (parseInt(img.style.top) > 0) {
		img.style.top = '0px'
	} else if (imgIn.bottom < containerOut.bottom) {
		img.style.top = `-${imgIn.height - containerOut.height}px`
	}
}