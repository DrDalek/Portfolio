$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Amateur de design", "Prêt à en découdre"],
        typeSpeed: 80,
        backSpeed: 20,
        loop: true
    });

    $('#cmf2019').click(function () {
        $('.modal').css('display', 'block');
        $('#slide_cmf').css('display','block');
        $('#caption').html('Coupe du monde féminine : Projet universitaire');
        showSlides(1, '-cmf', true);
    });

    $('#dumbo').click(function () {
        $('.modal').css('display', 'block');
        $('#slide_dumbo').css('display','block');
        $('#caption').html('DumboNetwok : Application de transfert d\'archives');
        showSlides(1, '-dumbo', true);
    });

    $('#simer').click(function () {
        $('.modal').css('display', 'block');
        $('#slide_simer').css('display','block');
        $('#caption').html('Simer : Logiciel de simulation hydraulique');
        showSlides(1, '-simer', true);
    });

    $('.close').click(function () {
        $('.modal').css('display', 'none');
        $('#slide_cmf, #slide_dumbo, #slide_simer').css('display','none');
    });
});

var slideIndex = 1;
var actualModal;

function plusSlides(n) {
    showSlides(slideIndex += n, actualModal, false);
}

function currentSlide(n) {
    showSlides(slideIndex = n, actualModal, false);
}

function showSlides(n = 1, elements, isFirst) {
    actualModal = elements;
    if(isFirst) slideIndex = 1;
    var slides = document.getElementsByClassName('modal-content'+actualModal);
    //var slides = document.querySelector(elements+'>modal-content');
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


