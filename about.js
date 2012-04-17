var $vP;
var $transitionEnd;
$(document).ready(function() {
	
	// Prepare animation.
	$('#founderPicture').css('transform', 'translate3d(-1000px, 0px, 0px)');
	$('#about-founder-title').css('transform', 'translate3d(1000px, 0px, 0px)');
	$('#about-finder-description').css('transform', 'translate3d(1000px, 0px, 0px)');
	
	$vP = "";
	if ($.browser.webkit) {
 		$vP = "-webkit-";
 		$transitionEnd = "webkitTransitionEnd";
 	} else if ($.browser.msie) {
 		$vP = "-ms-";
 		$transitionEnd = "msTransitionEnd";	
 	} else if ($.browser.mozilla) {
 		$vP = "-moz-";
 		$transitionEnd = "transitionend";
 	} else if ($.browser.opera) {
 		$vP = "-o-";
 		$transitionEnd = "oTransitionEnd";
 	}
 	
 	if($vP != '-ms-') {
 	  $('.person-introduction-container').css({'transform': 'scale(0,0)', 'opacity' : '1'});
 	}

	setTimeout("animateAboutIntro()",600);
});

function animateAboutIntro() {
	$('#founderPicture').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#about-founder-title').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#about-finder-description').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('.person-introduction-container').css({'transition-property': 'all','transform': 'scale(1,1)', 'opacity' : '1'});
}