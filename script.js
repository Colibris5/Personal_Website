$(document).ready(function(){
		$('.handle').on('click', function(){
			$("header nav ul").toggleClass("open");
		});
});

$(".new li a").on("click", function(){
 	 $(".handle").click();
});


