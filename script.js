$(document).ready(function(){
		$('.handle').on('click', function(){
			$("header nav ul").toggleClass("open");
		});
});

$(".menu li a").on("click", function(){
 	 $(".handle").click();
});


AOS.init({
	duration: 1200,
});


