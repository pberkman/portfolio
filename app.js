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
	$("nav a").click(function(evn) {
		evn.preventDefault();
		$("nav a").css('color','#000000');
		$("html, body").scrollTo(this.hash, this.hash);
		$(this).css('color','white');
	});

	// color the navigation font while scrolling through each section
	var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }

	$(window).scroll(function() {

        var windowPos = $(window).scrollTop(); // get the position of where the window is from the top
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var sectionPos = $(theID).offset().top; // get the offset of the section from the top of page
            var sectionHeight = $(theID).height(); // get the height of the section in question
            if (windowPos >= sectionPos && windowPos < (sectionPos + sectionHeight)) {
                $("a[href='" + theID + "']").css('color','white');
            } else {
                $("a[href='" + theID + "']").css('color','#000000');
            }
        }
	}); // end window scroll

}); //end ready