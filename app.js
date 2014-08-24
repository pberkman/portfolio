//notes on how to switch between visible and hidden for profile info
$(document).ready(function() {



	$('#learn, #skills, #interests, #profile').click(function() {
		if ($(this).siblings().css('display') == 'none') {
			$(".aboutInfo").css('display','none');
			$(this).siblings().css('display','inline-block');
		}

		else {
			$(this).siblings().css('display','none');
		}
	});




	$(".proj").mouseenter(function() {
		$(this).children(".projHover").show();
	})
		.mouseleave(function() {
		$(this).children(".projHover").hide();
	});

	window.location.hash = "#about";


}); //end ready