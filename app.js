//notes on how to switch between visible and hidden for profile info
$(document).ready(function() {


$('#learn').click(function() {
	var learn = $(".learnInfo");
  if (learn.css('visibility') == 'hidden') {
    learn.css('visibility','visible');
  } else {
    learn.css('visibility','hidden');
   }
});

}); //end ready