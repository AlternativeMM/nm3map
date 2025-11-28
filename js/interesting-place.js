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