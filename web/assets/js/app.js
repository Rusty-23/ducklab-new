const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
if (menu) {	
	menu.onclick = () => {
		menu.classList.toggle('bx-x');
		navbar.classList.toggle('open');
	};
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

function toggleVisibility() {
	var button = document.getElementById("categories-toggle");
	console.log(button)

	if (button.innerText === "Show Less") {
		button.innerText = "All Categories";
	} else {
		button.innerText = "Show Less";
	}

	var elements = document.querySelectorAll(".next-page");
    elements.forEach(function(element) {
      element.classList.toggle("hidden")
	});
	
}

