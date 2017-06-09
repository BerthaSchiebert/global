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

	$(".sec-6-item").click(function(){
		$(this).find(".sec-6-text").slideToggle(300);
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

});

function toggleCP() {
	var cp = document.getElementById("cp");
	cp.style.height = window.innerHeight - 0+"px";
	if(cp.style.left == "0px"){
		cp.style.left = "-320px";
	} else {
		cp.style.left = "0px";
	}
}