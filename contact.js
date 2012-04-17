var $vP;
var $transitionEnd;

$(document).ready(function() {
	
	// Prepare animation.
	$('#contact-intro-hero').css('transform', 'translate3d(-1000px, 0px, 0px)');
	$('#contact-intro-title').css('transform', 'translate3d(1000px, 0px, 0px)');
	$('#contact-intro-subtitle').css('transform', 'translate3d(1000px, 0px, 0px)');
	
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
 	  $('.contact-info-container').css({'transform': 'scale(0,0)', 'opacity' : '1'});
 	}

	setTimeout("animateAboutIntro()",600);
});

function animateAboutIntro() {
	$('#contact-intro-hero').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#contact-intro-title').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#contact-intro-subtitle').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('.contact-info-container').css({'transition-property': 'all','transform': 'scale(1,1)', 'opacity' : '1'});
}