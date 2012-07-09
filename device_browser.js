var $activeScreenshot = {};
var $currentScreenshot;
var $SCREENSHOT_WIDTH_IPAD_HORIZONTAL;
var $SCREENSHOT_WIDTH_IPAD_PORTRAIT;
var $SCREENSHOT_WIDTH_IPHONE_HORIZONTAL;
var $SCREENSHOT_WIDTH_IPHONE_PORTRAIT;
var $vP;
var $numberOfSlides;
var $currentMode;
var $transitionEnd;
var $iPadHorizontalLoaded;
var $iPadPortraitLoaded;
var $iPhoneHorizontalLoaded;
var $iPhonePortraitLoaded;
var $currentProject;
var $content = {};


$(document).ready(function() {

		// Settings for eSense Project.
		/*
$content['esense'] = {};
		$content['esense']['imagePath'] = 'images/portfolio/deviceBrowser/esense/';
		$content['esense']['defaultView'] = 'iPadHorizontal';
		$content['esense']['supported'] = {};
		$content['esense']['supported']['iPadHorizontal'] = true;
		$content['esense']['supported']['iPadPortrait'] = true;
		$content['esense']['supported']['iPhoneHorizontal'] = true;
		$content['esense']['supported']['iPhonePortrait'] = true;
		$content['esense']['screenshotCount'] = {};
		$content['esense']['screenshotCount']['iPadHorizontal'] = 3;
		$content['esense']['screenshotCount']['iPadPortrait'] = 3;
		$content['esense']['screenshotCount']['iPhoneHorizontal'] = 3;
		$content['esense']['screenshotCount']['iPhonePortrait'] = 3;
*/
		
		
		

		$transitionEnd = "transitionEnd";
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
		
	 	/*

         if($vP != '-ms-') {
           $('.portfolio').css({'transform': 'scale(0,0)', 'opacity' : '1'});
         }

		$activeScreenshot['iPadHorizontal'] = 0;
		$activeScreenshot['iPadPortrait'] = 0;
		$activeScreenshot['iPhoneHorizontal'] = 0;
		$activeScreenshot['iPhonePortrait'] = 0;
		$currentScreenshot = 0;
		$SCREENSHOT_WIDTH_IPAD_HORIZONTAL = 577;
		$SCREENSHOT_WIDTH_IPAD_PORTRAIT = 349;
		$SCREENSHOT_WIDTH_IPHONE_HORIZONTAL = 333;
		$SCREENSHOT_WIDTH_IPHONE_PORTRAIT = 222;
		$numberOfSlides = 0;
		$currentMode = "iPadHorizontal";
		$iPadHorizontalLoaded = false;
		$iPadPortraitLoaded = false;
		$iPhoneHorizontalLoaded = false;
		$iPhonePortraitLoaded = false;
*/
		
		
		/*
$('.fancybox').fancybox({openEffect : 'elastic',
								openSpeed  : 250,
								closeBtn : true});
//		$('#nav-left').click(function() { goToSlide($currentScreenshot-1); });
		$('#nav-right').click(function() { goToSlide($currentScreenshot+1); });
		
		$('#esenseBrowser').click(function() { initDeviceBrowser('esense'); });
*/
		
		$('#portfolio-intro-hero').css('transform', 'translate3d(-1000px, 0px, 0px)');
		$('#portfolio-intro-title').css('transform', 'translate3d(1000px, 0px, 0px)');
		$('#portfolio-intro-subtitle').css('transform', 'translate3d(1000px, 0px, 0px)');
		
		setTimeout("animatePortfolioIntro()",600);
		
//		$('#iPadHorizontalButton').click(function() { setDeviceBrowserMode("iPadHorizontal"); });
//		$('#iPadPortraitButton').click(function() { setDeviceBrowserMode("iPadPortrait"); });
//		$('#iPhoneHorizontalButton').click(function() { setDeviceBrowserMode("iPhoneHorizontal"); });
//		$('#iPhonePortraitButton').click(function() { setDeviceBrowserMode("iPhonePortrait"); });
		
		//setDeviceBrowserMode("iPadHorizontal");
		
//		loadScreenshots($content['esense']['defaultView'], 3);
//		$(getScreenshotQuery()).css('opacity', '1');
	});
	
function animatePortfolioIntro() {
	$('#portfolio-intro-hero').css({'transition-property': 'all', 'transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#portfolio-intro-title').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('#portfolio-intro-subtitle').css({'transition-property': 'all','transform': 'translate3d(0px, 0px, 0px)', 'opacity': '1'});
	$('.portfolio').css({'transition-property': 'all','transform': 'scale(1,1)', 'opacity' : 1});
}
	
function initDeviceBrowser(project) {
	$currentProject = project;
	// Check for iPad horizontal support.
	if($content[project]['supported']['iPadHorizontal']) {
		$('#iPadHorizontalButton').click(function() { setDeviceBrowserMode("iPadHorizontal"); });
		$('#iPadHorizontalButton').removeClass('hidden');
	}
	else {
		$('#iPadHorizontalButton').addClass('hidden');
	}
	// Check for iPad portrait support.
	if($content[project]['supported']['iPadPortrait']) {
		$('#iPadPortraitButton').click(function() { setDeviceBrowserMode("iPadPortrait"); });
		$('#iPadPortraitButton').removeClass('hidden');
	}
	else {
		$('#iPadPortraitButton').addClass('hidden');
	}
	// Check for iPhone horizontal support.
	if($content[project]['supported']['iPhoneHorizontal']) {
		$('#iPhoneHorizontalButton').click(function() { setDeviceBrowserMode("iPhoneHorizontal"); });
		$('#iPhoneHorizontalButton').removeClass('hidden');
	}
	else {
		$('#iPhoneHorizontalButton').addClass('hidden');
	}
	// Check for iPhone portrait support.
	if($content[project]['supported']['iPhonePortrait']) {
		$('#iPhonePortraitButton').click(function() { setDeviceBrowserMode("iPhonePortrait"); });
		$('#iPhonePortraitButton').removeClass('hidden');
	}
	else {
		$('#iPhonePortraitButton').addClass('hidden');
	}
	
	loadScreenshots($content['esense']['defaultView'], $content['esense']['screenshotCount'][$content['esense']['defaultView']]);
	$(getScreenshotQuery()).css('opacity', '1');
}
	
function setDeviceBrowserMode(newMode) {
	if (newMode == "iPadPortrait" && $content[$currentProject]['supported']['iPadPortrait']) {
		// If current mode is iPad mode trigger rotation animation.
		if ($currentMode == "iPadHorizontal") {
			$('#iPadFrame').css('transform', 'rotate(90deg) scale(0.8)');
			loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPadPortrait']);
			$(getScreenshotQuery()).css('opacity', '0');
			$('#iPadFrame').one($transitionEnd, function () {
				$(getScreenshotQuery()).css('opacity', '1');
			});
			//$('#screenshotContainer').css('transform', 'rotate(90deg) scale(0.8)');
		}
		// Transition from iPhone to iPad frame.
		else {
			$('#iPadFrame').css({'transform': 'rotate(90deg) scale(0.8)'});
			$('#iPhoneFrame').css('opacity', '0');
			$(getScreenshotQuery()).css('opacity', '0');
			$('#iPhoneFrame').one($transitionEnd, function () {
				$('#iPadFrame').css({'opacity': '1', 'transition-duration' : '1000ms'});
				loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPadPortrait']);
				$('img.ipad-screenshot-portrait').css('opacity', '1');
			});			
		}
		$currentMode = 'iPadPortrait';
	}
	else if (newMode == "iPadHorizontal" && $content[$currentProject]['supported']['iPadHorizontal']) {
			// If current mode is iPad mode trigger rotation animation.
			if ($currentMode == "iPadPortrait") {
				$('#iPadFrame').css('transform', 'rotate(0deg) scale(1)');
				//$('#screenshotContainer').css('transform', 'rotate(90deg) scale(0.8)');
				loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPadHorizontal']);
				$(getScreenshotQuery()).css('opacity', '0');
				$('#iPadFrame').one($transitionEnd, function () {
					$(getScreenshotQuery()).css('opacity', '1');
				});
			}
			// Transition from iPhone to iPad frame.
			else {
				$('#iPadFrame').css('transform', 'rotate(0deg) scale(1)');
				$('#iPhoneFrame').css('opacity', '0');
				$(getScreenshotQuery()).css('opacity', '0');
				$('#iPhoneFrame').one($transitionEnd, function () {
						$('#iPadFrame').css({'opacity': '1', 'transition-duration' : '1000ms'});
						loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPadHorizontal']);
						//$('#iPhoneFrame').one($transitionEnd, function () {
							$('img.ipad-screenshot-horizontal').css('opacity', '1');
						//});
					});		
			}
			$currentMode = 'iPadHorizontal';
	}
	else if (newMode == "iPhonePortrait" && $content[$currentProject]['supported']['iPhonePortrait']) {
		// If current mode is iPad mode trigger rotation animation.
		if ($currentMode == "iPhoneHorizontal") {
			
			//$(getScreenshotQuery()).css('opacity', '0');
			
			$('#iPhoneFrame').css('transform', 'rotate(90deg)');
			loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPhonePortrait']);
			$(getScreenshotQuery()).css('opacity', '0');
			$('#iPhoneFrame').one($transitionEnd, function () {
				$('img.iphone-screenshot-portrait').css('opacity', '1');
				$currentMode = 'iPhonePortrait';
			});
			//$('#screenshotContainer').css('transform', 'rotate(90deg) scale(0.8)');
		}
		// Transition from iPad to iPhone frame.
		else {
			$('#iPadFrame').css('opacity', '0');
			$('#iPhoneFrame').css({'transform': 'rotate(90deg)'});
			$(getScreenshotQuery()).css('opacity', '0');
			$('#iPadFrame').one($transitionEnd, function () {
				
				$('#iPhoneFrame').css({'opacity': '1', 'transition-duration' : '1000ms'});
				loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPhonePortrait']);
				$('img.iphone-screenshot-portrait').css('opacity', '1');
				$currentMode = 'iPhonePortrait';
			});			
		}
		
	}
	else if (newMode == "iPhoneHorizontal" && $content[$currentProject]['supported']['iPhoneHorizontal']) {
			// If current mode is iPad mode trigger rotation animation.
			if ($currentMode == "iPhonePortrait") {
				$('#iPhoneFrame').css('transform', 'rotate(0deg)');
				//$('#screenshotContainer').css('transform', 'rotate(90deg) scale(0.8)');
				loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPhoneHorizontal']);
				$(getScreenshotQuery()).css('opacity', '0');
				$('#iPhoneFrame').one($transitionEnd, function () {
					$('img.iphone-screenshot-horizontal').css('opacity', '1');
				});
			}
			// Transition from iPad to iPhone frame.
			else {
				$('#iPadFrame').css('opacity', '0');
				$('#iPhoneFrame').css('transform', 'rotate(0deg)');
				$(getScreenshotQuery()).css('opacity', '0');
				$('#iPadFrame').one($transitionEnd, function () {
						$('#iPhoneFrame').css({'opacity': '1', 'transition-duration' : '1000ms'});
						loadScreenshots(newMode, $content[$currentProject]['screenshotCount']['iPhoneHorizontal']);
						//$('#iPhoneFrame').one($transitionEnd, function () {
							$('img.iphone-screenshot-horizontal').css('opacity', '1');
						//});
					});		
			}
			$currentMode = 'iPhoneHorizontal';
	}
}

function loadScreenshots(deviceType, numberOfSlides) {
	$numberOfSlides = numberOfSlides;
	
	// Hide currently displayed screenshots.
	//$(getScreenshotQuery()).css('opacity', '0');
	
	if(deviceType == "iPadHorizontal" && $content[$currentProject]['supported']['iPadHorizontal']) {
		if(!$iPadHorizontalLoaded) {
			//Create screenshot images
			for(var i=1; i <= numberOfSlides; i++) {
				jQuery('<img>', {
				    src: $content[$currentProject]['imagePath'] + 'ipad/horizontal/' + i + '.png',
				    css: {
				    	'left': ((i-1) * $SCREENSHOT_WIDTH_IPAD_HORIZONTAL).toString() + 'px',
				    	'opacity': 0
				    	},
				    class: 'ipad-screenshot-horizontal'
				}).prependTo('#screenshotContainer');
			}
			$iPadHorizontalLoaded = true;
		}
		var newActiveScreenshot = $currentScreenshot;
		$currentScreenshot = $activeScreenshot['iPadHorizontal'];
		$activeScreenshot[$currentMode] = newActiveScreenshot;
		
		reInitNavigation();
		
		// Hide already loaded screenshots.
		$('.ipad-screenshot-portrait').addClass('hidden');
		$('.ipad-screenshot-horizontal').removeClass('hidden');
		$('#screenshotContainer').removeClass();
		$('#screenshotContainer').addClass('browser-screenshot-ipad-horizontal');
		
		
	}
	else if(deviceType == "iPadPortrait" && $content[$currentProject]['supported']['iPadPortrait']) {
		if(!$iPadPortraitLoaded) {
			//Create screenshot images
			for(var i=1; i <= numberOfSlides; i++) {
				jQuery('<img>', {
				    src: $content[$currentProject]['imagePath'] + 'ipad/portrait/' + i + '.png',
				    css: {
				    	'left': ((i-1) * $SCREENSHOT_WIDTH_IPAD_PORTRAIT).toString() + 'px'
				    	},
				    class: 'ipad-screenshot-portrait'
				}).prependTo('#screenshotContainer');
			}
			$iPadPortraitLoaded = true;
		}
		var newActiveScreenshot = $currentScreenshot;
		$currentScreenshot = $activeScreenshot['iPadPortrait'];
		$activeScreenshot[$currentMode] = newActiveScreenshot;
		
		reInitNavigation();
		
		// Hide already loaded screenshots.
		$('.ipad-screenshot-horizontal').addClass('hidden');
		$('.ipad-screenshot-portrait').removeClass('hidden');
		$('#screenshotContainer').removeClass();
		$('#screenshotContainer').addClass('browser-screenshot-ipad-portrait');
		
	}
	else if(deviceType == "iPhoneHorizontal" && $content[$currentProject]['supported']['iPhoneHorizontal']) {
		if(!$iPhoneHorizontalLoaded) {
			//Create screenshot images
			for(var i=1; i <= numberOfSlides; i++) {
				jQuery('<img>', {
				    src: $content[$currentProject]['imagePath'] + 'iphone/horizontal/' + i + '.png',
				    css: {
				    	'left': ((i-1) * $SCREENSHOT_WIDTH_IPHONE_HORIZONTAL).toString() + 'px',
				    	'opacity': 0
				    	},
				    class: 'iphone-screenshot-horizontal'
				}).prependTo('#screenshotContainer');
			}
			$iPhoneHorizontalLoaded = true;
		}
		var newActiveScreenshot = $currentScreenshot;
		$currentScreenshot = $activeScreenshot['iPhoneHorizontal'];
		$activeScreenshot[$currentMode] = newActiveScreenshot;
		
		reInitNavigation();
		
		// Hide already loaded screenshots.
		$('.iphone-screenshot-portrait').addClass('hidden');
		$('.iphone-screenshot-horizontal').removeClass('hidden');
		$('#screenshotContainer').removeClass();
		$('#screenshotContainer').addClass('browser-screenshot-iphone-horizontal');
		
	}
	else if(deviceType == "iPhonePortrait" && $content[$currentProject]['supported']['iPhonePortrait']) {
		if(!$iPhonePortraitLoaded) {
			//Create screenshot images
			for(var i=1; i <= numberOfSlides; i++) {
				jQuery('<img>', {
				    src: $content[$currentProject]['imagePath'] + 'iphone/portrait/' + i + '.png',
				    css: {
				    	'left': ((i-1) * $SCREENSHOT_WIDTH_IPHONE_PORTRAIT).toString() + 'px'
				    	},
				    class: 'iphone-screenshot-portrait'
				}).prependTo('#screenshotContainer');
			}
			$iPhonePortraitLoaded = true;
		}
		var newActiveScreenshot = $currentScreenshot;
		$currentScreenshot = $activeScreenshot['iPhonePortrait'];
		$activeScreenshot[$currentMode] = newActiveScreenshot;
		
		reInitNavigation();
		
		// Hide already loaded screenshots.
		$('.iphone-screenshot-horizontal').addClass('hidden');
		$('.iphone-screenshot-portrait').removeClass('hidden');
		$('#screenshotContainer').removeClass();
		$('#screenshotContainer').addClass('browser-screenshot-iphone-portrait');
		
	}
}

function goToSlide(slideNumber) {
	var fromSlide = 0;
	if ($vP == "-ms-") {
		fromSlide = $currentScreenshot;
	}
	animateSlideTransition(fromSlide, slideNumber);
}

function getScreenshotWidth() {
	switch($currentMode)
	{
	case 'iPadHorizontal':
	  return $SCREENSHOT_WIDTH_IPAD_HORIZONTAL;
	case 'iPadPortrait':
	  return $SCREENSHOT_WIDTH_IPAD_PORTRAIT;
	case 'iPhoneHorizontal':
	  return $SCREENSHOT_WIDTH_IPHONE_HORIZONTAL;
	case 'iPhonePortrait':
	  return $SCREENSHOT_WIDTH_IPHONE_PORTRAIT;
	default:
	  return 0;
	}
}

function getScreenshotQuery() {
	switch($currentMode)
	{
	case 'iPadHorizontal':
	  return 'img.ipad-screenshot-horizontal';
	case 'iPadPortrait':
	  return 'img.ipad-screenshot-portrait';
	case 'iPhonePortrait':
	  return 'img.iphone-screenshot-portrait';
	case 'iPhoneHorizontal':
	  return 'img.iphone-screenshot-horizontal';  
	default:
	  return '';
	}
}

function reInitNavigation() {
	if($currentScreenshot == 0) {
		 $('#nav-left').removeClass('active');
		 $('#nav-left').unbind('click');
	}
	else if($currentScreenshot >= 1 && !$('#nav-left').hasClass('active')) {
		$('#nav-left').addClass('active');
		$('#nav-left').click(function() { goToSlide($currentScreenshot-1); });
	}
	
	if($currentScreenshot == ($numberOfSlides-1)) {
		 $('#nav-right').removeClass('active');
		 $('#nav-right').unbind('click');
	}
	else if($currentScreenshot <= ($numberOfSlides-2) && !$('#nav-right').hasClass('active')) {
		$('#nav-right').addClass('active');
		$('#nav-right').click(function() { goToSlide($currentScreenshot+1); });
	}
}

function updateNavigation() {
	if($currentScreenshot == 0) {
		 $('#nav-left').removeClass('active');
		 $('#nav-left').unbind('click');
	}
	else if($currentScreenshot == 1 && !$('#nav-left').hasClass('active')) {
		$('#nav-left').addClass('active');
		$('#nav-left').click(function() { goToSlide($currentScreenshot-1); });
	}
	
	if($currentScreenshot == ($numberOfSlides-1)) {
		 $('#nav-right').removeClass('active');
		 $('#nav-right').unbind('click');
	}
	else if($currentScreenshot == ($numberOfSlides-2) && !$('#nav-right').hasClass('active')) {
		$('#nav-right').addClass('active');
		$('#nav-right').click(function() { goToSlide($currentScreenshot+1); });
	}
}

function animateSlideTransition(fromSlide, toSlide) {
	// Calculate transition offset
	var slideOffset = fromSlide - toSlide;
	var pixelOffset = slideOffset * getScreenshotWidth();
		
	// Set new current screenshot.
	$currentScreenshot = toSlide;
	
	updateNavigation();
		
	// Move every screenshot by the calculated pixel offset.
	$(getScreenshotQuery()).each(function() {
		$(this).css('transform', 'translate3d(' + pixelOffset.toString() + 'px, 0px, 0px)');
		});
	
}