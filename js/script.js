$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true
	});

	$('.popup-img').magnificPopup({
	  type: 'image'
	  // other options
	});

	$('.btn-popup').magnificPopup({
		type: 'inline'
	});

	$(".sec-6-item").click(function(){
		$(this).find(".sec-6-text").slideToggle(300);
		$(this).find(".sec-6-top").toggleClass("btn-down");
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".btn").click(function(){
		$(".gallery-hidden").show(300);
	});

	$(".btn2").click(function(){
		$(".sec-2-hidden").show(300);
	});

});

function toggleCP() {
	var cp = document.getElementById("cp");
	cp.style.height = window.innerHeight - 0+"px";
	if(cp.style.left == "0px"){
		cp.style.left = "-220px";
	} else {
		cp.style.left = "0px";
	}
}

$(window).scroll(function(){

	if($(this).scrollTop() >= 300){
		$(".top-menu2").addClass("header-visible");
	}
	else{
		$(".top-menu2").removeClass("header-visible");
	}

});