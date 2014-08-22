//notes on how to switch between visible and hidden for profile info
$(document).ready(function() {



	$('#learn, #skills, #interests').click(function() {
		if ($(this).siblings().css('display') == 'none') {
			$(".aboutInfo").css('display','none');
			$(this).siblings().css('display','inline-block');
		}

		else {
			$(this).siblings().css('display','none');
		}
	});

	$('#profile').click(function() {
		if ($(this).siblings().css('display') == 'none') {
			$(".aboutInfo").css('display','none');
			$(this).siblings().css('display','inline-block');
			$("#profile2ndP").css('display','inline-block');
		}

		else {
			$(this).siblings().css('display','none');
		}

	});

	$(".projImage").hover(function() {
		$(".projHover").show();

	});

}); //end ready