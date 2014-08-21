//notes on how to switch between visible and hidden for profile info
$(document).ready(function() {



	$('#learn, #skills, #interests').click(function() {
		if ($(this).siblings().css('display') == 'none') {
			$(".profileInfo").css('display','none');
			$(this).siblings().css('display','inline-block');
		}

		else {
			$(this).siblings().css('display','none');
		}
	});

	$('#about').click(function() {
		if ($(this).siblings().css('display') == 'none') {
			$(".profileInfo").css('display','none');
			$(this).siblings().css('display','inline-block');
			$("#about2ndP").css('display','inline-block');
		}

		else {
			$(this).siblings().css('display','none');
		}
	});
}); //end ready