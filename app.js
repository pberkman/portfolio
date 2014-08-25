//notes on how to switch between visible and hidden for profile info
$(document).ready(function() {
	
	// About section - click each header to make their info appear and disappear
	$('#learn, #skills, #interests, #profile').click(function() {
		if ($(this).siblings().css('display') == 'none') {
			// stop displaying any info already showing
			$(".aboutInfo").css('display','none');
			$(this).siblings().css('display','inline-block');
		}
		else {
			$(this).siblings().css('display','none');
		}
	});

	// Project Section - show paragraphs when hovering over pic
	$(".proj").mouseenter(function() {
		$(this).children(".projHover").show();
	})
		.mouseleave(function() {
		$(this).children(".projHover").hide();
	});

	// Scroll to each section
	$("#homeNav").click(function() {
		$(".navItems").css('color','#000000');
		$(this).css('color','white');
		$("#home").ScrollTo();
	});
	$("#aboutNav").click(function() {
		$(".navItems").css('color','#000000');
		$(this).css('color','white');
		$("#about").ScrollTo();
	});
	$("#projectsNav").click(function() {
		$(".navItems").css('color','#000000');
		$(this).css('color','white');
		$("#projects").ScrollTo();
	});
	$("#contactNav").click(function() {
		$(".navItems").css('color','#000000');
		$(this).css('color','white');
		$("#contact").ScrollTo();
	});

	// Navigation bar - Change font color to white when hovering
	$('.navItems').hover(function() {
		$(this).toggleClass('linkStyle');
	});

}); //end ready