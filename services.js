var $app_dev_expanded;
var $corporate_expanded;
var $consulting_expanded;

$(document).ready(function() {
	
	// Prepare animation.
//	$('#services-intro-hero').css('left', '-=1000px)');
//	$('#services-intro-title').css('left', '+=1000px)');
//	$('#services-intro-subtitle').css('left', '+=1000px)');
	
	$('#services-intro-hero').css('transform', 'translate3d(-1000px, 0px, 0px)');
	$('#services-intro-title').css('transform', 'translate3d(1000px, 0px, 0px)');
	$('#services-intro-subtitle').css('transform', 'translate3d(1000px, 0px, 0px)');
	
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
 	  $('.services-details-container').css({'transform': 'scale(0,0)', 'opacity' : '1'});
 	}

	
	//$('.services-details-container').css('transform', 'scale(0)');
	
	$app_dev_expanded = false;
	$corporate_expanded = false;
	$consulting_expanded = false;
	
	$('#service-head-app-dev').click( function() { expandServiceDescription('app_development'); } );
	$('#service-head-corporate').click( function() { expandServiceDescription('corporate'); } );
	$('#service-head-consulting').click( function() { expandServiceDescription('consulting'); } );	
	
	
	setTimeout("animateServicesIntro()",600);
});

function expandServiceDescription(service) {
	if (service == 'app_development') {
		if (!$app_dev_expanded) {
			$('#service-description-app-dev').css('height', '1200px');
		}
		else {
			$('#service-description-app-dev').css('height', '106px');
		}
		$app_dev_expanded = !$app_dev_expanded;
	}
	else if (service == 'corporate') {
		if (!$corporate_expanded) {
			$('#service-description-corporate').css('height', '350px');
		}
		else {
			$('#service-description-corporate').css('height', '106px');
		}
		$corporate_expanded = !$corporate_expanded;
	}
	else if (service == 'consulting') {
		if (!$consulting_expanded) {
			$('#service-description-consulting').css('height', '250px');
		}
		else {
			$('#service-description-consulting').css('height', '106px');
		}
		$consulting_expanded = !$consulting_expanded;
	}
	
}

function animateServicesIntro() {
	$('#services-intro-hero').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#services-intro-title').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#services-intro-subtitle').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('.services-details-container').css({'transition-property': 'all','transform': 'scale(1,1)', 'opacity' : 1});
}