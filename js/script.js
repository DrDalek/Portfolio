let modalCmf = {
	cardId: "cmf2019",
	slideId: "slide_cmf",
	slideClass: "modal-content-cmf",
	captionText: "Coupe du monde féminine : Projet universitaire",
	presentationClass: "presentation-cmf",
    pictures: ['./images/cmf_group.png',
        './images/cmf_group_ipad.png',
        './images/cmf_france.png'],
    videos: []
};

let modalDumboV4 = {
	cardId: "dumbov4",
	slideId: "slide_dumbov4",
	slideClass: "modal-content-dumbov4",
	captionText: "DumboNetwork : Application de transfert d'archives",
	presentationClass: "presentation-dumbov4",
    pictures: ['./images/Dumbopass/dumbo_accueil.png',
    './images/Dumbopass/dumbo_scan.png',
    './images/Dumbopass/dumbo_success.png'],
    videos: []
};

let modalSimer = {
	cardId: "simer",
	slideId: "slide_simer",
	slideClass: "modal-content-simer",
	captionText: "Simer : Logiciel de simulation hydraulique",
	presentationClass: "presentation-simer",
    pictures: ['./images/simer_splash.png',
    './images/simer_interface.png',
    './images/simer_donnees.png'],
    videos: []
};

let modalAnimations = {
	cardId: "animations_croix",
	slideId: "slide_animations_croix",
	slideClass: "modal-content-animations-croix",
	presentationClass: "presentation-croix",
	captionText: "Animations déstinées aux croix Smartlight",
    pictures: [],
    videos: ['./videos/animations croix.mp4']
};

let modalLogo = {
	cardId: "logo_sonny",
	slideId: "slide_logo",
	slideClass: "modal-content-logo",
	captionText: "Identité graphique",
	presentationClass: "presentation-logo",
    pictures: ['./images/logo_liste.svg','./images/logo_couleurs.svg','./images/logo_histoire.svg'],
    videos: []
};

let modalDumbopass = {
	cardId: "dumbopass",
	slideId: "slide_dumbopass",
	slideClass: "modal-content-dumbopass",
	presentationClass: "presentation-dumbopass",
	captionText: "Application web de gestion des écrans Smartlight",
    pictures: ['./images/Dumbopass/Dumbo_maquette.png'],
    videos: []
};

var modals = [modalCmf, modalAnimations, modalSimer, modalDumboV4, modalLogo, modalDumbopass];
var slideIndex = 1;
var actualModal;

window.onscroll = function () {
	// sticky navbar on scroll script
	if (this.scrollY > 150) {
		$(".navbar").addClass("sticky");
		document.querySelector(".navbar .logo img").src =
			"./images/logo_blanc.svg";
	} else {
		$(".navbar").removeClass("sticky");
		document.querySelector(".navbar .logo img").src =
			"./images/logo_sonny_9.svg";
	}

	// scroll-up button show/hide script
	if (this.scrollY > 500) {
		$(".scroll-up-btn").addClass("show");
	} else {
		$(".scroll-up-btn").removeClass("show");
	}
};

// slide-up script
document.querySelector(".scroll-up-btn").onclick = function () {
	$("html").animate({ scrollTop: 0 });
	// removing smooth scroll on slide-up button click
	$("html").css("scrollBehavior", "auto");
};

document.querySelector(".navbar .menu li a").onclick = function () {
	// applying again smooth scroll on menu items click
	$("html").css("scrollBehavior", "smooth");
};

// toggle menu/navbar script
document.querySelector(".menu-btn").onclick = function () {
	document.querySelector(".navbar .menu").classList.toggle("active");
	document.querySelector(".menu-btn i").classList.toggle("active");
};

document.querySelector('.close').onclick = function () {
    document.querySelector('.modal').style.display = "none";
    modals.forEach(modal => {
        document.getElementById(modal.slideId).style.display = "none";
		document.querySelector(".presentation."+modal.presentationClass).style.display = "none";
    });
};

// typing text animation script
var typed = new Typed(".typing", {
	strings: ["Passionné et investi", "Prêt à en découdre"],
	typeSpeed: 80,
	backSpeed: 20,
	loop: true,
});

function onClickModal(object){
    document.querySelector("#"+object.cardId).onclick = () => {
        document.querySelector(".modal").style.display = "flex";
        document.querySelector("#"+object.slideId).style.display = "flex";
		document.querySelector("."+object.presentationClass).style.display = "flex";
		showNavButtons(object);
		showSlides(1,object.slideClass,true);
    }
}

function showNavButtons(object){
	var elements = document.getElementsByClassName('slide-nav');
	if(object.pictures.length + object.videos.length >1){
		for(var i=0; i<elements.length; i++) {
			elements[i].style.display = "block";
		}
	}else{
		for(var i=0; i<elements.length; i++) {
			elements[i].style.display = "none";
		}
	}
}

function dispatchOnClickModal(){
    modals.forEach(modal => {
        onClickModal(modal);
    });
}

function plusSlides(n) {
	showSlides((slideIndex += n), actualModal, false);
}

function currentSlide(n) {
	showSlides((slideIndex = n), actualModal, false);
}

function showSlides(n = 1, elements, isFirst) {
	actualModal = elements;
	if (isFirst) slideIndex = 1;
	var slides = document.getElementsByClassName(actualModal);
	var dots = createDotsElements(slides.length);
	if (slides.length <= 1){
		for(let i=0; i<dots.length; i++){
			dots[i].style.display = "none";
		}
	}else{
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for(let i=0; i<slides.length; i++){
			slides[i].style.display = "none";
		}
		for(let i=0; i<dots.length; i++){
			dots[i].style.display = "inline-block";
			dots[i].classList.remove('active');
		}
		dots[slideIndex - 1].className += " active";
	}
	slides[slideIndex - 1].style.display = "flex"; 
}

function createDotsElements(numberOfDots){
	let dotnav = document.getElementsByClassName("dotnav")[0];
	dotnav.innerHTML = '';
	for(let i=0; i<numberOfDots; i++){
		let dot = document.createElement('span');
		dot.classList.add('dot');
		dot.onclick = () => currentSlide(i+1);
		dotnav.appendChild(dot);
	}
	return dotnav.children;
}

dispatchOnClickModal();