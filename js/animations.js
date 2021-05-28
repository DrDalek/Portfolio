let cardBox = document.querySelectorAll('.projects .card .box img');
console.log(cardBox)

let intersectionObserver = new IntersectionObserver((entries, observer) => {
	if(entries[0].isIntersecting){
		addAboutAnimation();
		addCardBoxAnimation();
		observer.unobserve(entries[0].target);
	}else{
		removeAboutAnimation();
		removeCardBoxAnimation();
	}
});

function addAboutAnimation(){
	document.querySelector('.about-content .left')
			.classList.add('fade-left');
	document.querySelector('.about-content .right')
			.classList.add('fade-right');
}

function removeAboutAnimation(){
	document.querySelector('.about-content .left')
			.classList.remove('fade-left');
	document.querySelector('.about-content .right')
			.classList.remove('fade-right');
}

function addCardBoxAnimation(){
	cardBox.forEach(box => box.classList.add('pop'));
}

function removeCardBoxAnimation(){
	cardBox.forEach(box => box.classList.remove('pop'));
}

intersectionObserver.observe(document.querySelector('.about .max-width'));
intersectionObserver.observe(document.querySelector('.projects .max-width'));
