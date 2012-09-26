//var $slides = [$('#slide-0'), $('#slide-1'), $('#slide-2'), $('#slide-3'), $('#slide-4'), $('#slide-5'), $('#slide-6'), $('#slide-7'), $('#slide-8')];
var $slides;
var $activeSlide = 0;
var $slide_width = 1200;
var $currentlyAppliedXTransformation = 0;
var $vP;
var $transitionEnd;

$(document).ready(function() {
   $slides = [$('#slide-0'), $('#slide-1'), $('#slide-2'), $('#slide-3'), $('#slide-4'), $('#slide-5'), $('#slide-6')];
   
   $('.hero').css('transform', 'translate3d(-1000px, 0px, 0px)');
   $('#heroTitle').css('transform', 'translate3d(1000px, 0px, 0px)');
   $('#button-start').css('transform', 'translate3d(1000px, 0px, 0px)');
   $('#hint').css('transform', 'translate3d(1000px, 0px, 0px)');
   
   
   $('#nav-slide-0').click(function() { goToSlide(0); });
   $('#nav-slide-1').click(function() { goToSlide(1); });
   $('#nav-slide-2').click(function() { goToSlide(2); });
   $('#nav-slide-3').click(function() { goToSlide(3); });
   $('#nav-slide-4').click(function() { goToSlide(4); });
   $('#nav-slide-5').click(function() { goToSlide(5); });
   $('#nav-slide-6').click(function() { goToSlide(6); });
   $('#nav-slide-7').click(function() { goToSlide(7); });
   $('#nav-slide-8').click(function() { goToSlide(8); });
   
   $('#nextSlideButton').click(function() { 
   								if ($activeSlide < $slides.length-1) {
   									goToSlide($activeSlide+1); 
   								}	
   							});
   							
   $('#prevSlideButton').click(function() { 
   								if ($activeSlide > 0) {
   									goToSlide($activeSlide-1); 
   								}	
   							});
   
   $('#button-start').click(function() { goToSlide(1); });
   $('#go-to-step-button-2').click(function() { goToSlide(2); });
   $('#go-to-step-button-3').click(function() { goToSlide(3); });
   $('#go-to-step-button-4').click(function() { goToSlide(4); });
   $('#go-to-step-button-5').click(function() { goToSlide(5); });
   $('#go-to-step-button-6').click(function() { goToSlide(6); });
   $('#contact-button').click(function () {
      window.location = "contact.html";
    });
    
    //Swipe support for multi-touch devices.
    $('#slider').bind('swipeleft',function() { 
   								if ($activeSlide < $slides.length-1) {
   									goToSlide($activeSlide+1); 
   								}	
   							});
   	$('#slider').bind('swiperight',function() { 
   								if ($activeSlide > 0) {
   									goToSlide($activeSlide-1); 
   								}	
   							});
    
//   $('#go-to-step-button-8').click(function() { goToSlide(8); });
   
   $(window).bind("load", function() { 
       
       var footerHeight = 0,
           footerTop = 0,
           $footer = $(".footer-container");
           
       positionFooter();
       
       function positionFooter() {
       
                footerHeight = $footer.height();
                footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
       
               if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        top: footerTop
                   })
               } else {
                   $footer.css({
                        position: "static"
                   })
               }
               
       }

       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)
               
               });
   
   initSlides();
   refreshSlideNavigation();
   
   setTimeout("triggerStartAnimation()", 400);
 });
 
 function adjustForScreenResolution() {
	 var sliderContainerWidth = $('.slideshow-container').width();
	 if (sliderContainerWidth < 1200) {
	 	var currentPosition = parseInt(cleanValue($(this).css('left')));
 		var newPosition = currentPosition + i*$slide_width;
		 $('.start-tour-button').css('right', '');
	 }
 }
 
 function refreshSlideNavigation() {
 	$('#prevSlideButton').removeClass('hidden');
 	$('#nextSlideButton').removeClass('hidden');
 	
 	if($activeSlide == 0) {
 		$('#prevSlideButton').addClass('hidden');
 	}
 	else if ($activeSlide == $slides.length-1) {
 		$('#nextSlideButton').addClass('hidden');
 	}
 }
 
 function triggerStartAnimation() {
    $('.animated').css('transition-property', 'all');
 	$('.hero').css({'transform': 'translate3d(0px, 0px, 0px)', 'opacity' : 1});
 	$('#heroTitle').css({'transform': 'translate3d(0px, 0px, 0px)', 'opacity' : 1});
 	$('#button-start').css({'transform': 'translate3d(0px, 0px, 0px)', 'opacity' : 1});
 	$('#hint').css({'transform': 'translate3d(0px, 0px, 0px)', 'opacity' : 1});
 }
 
 function initSlides() {
 	//alert('init slides called');
 	$.each($slides, function (i) {
 		//alert('setting positions for slide ' + i);
 		var children = $(this).children('*'); 
 		//alert('children: ' + children.toString());
 		$(this).children('*').each(function () {
 			if($vP == "-ms-") {
 				$(this).css('transition-property', 'none');
 				$(this).css('transition-duration', '0ms');
 				
 			}
 			
 			if($(this).css('left') != "auto") {
 				var currentPosition = parseInt(cleanValue($(this).css('left')));
 				var newPosition = currentPosition + i*$slide_width;
 				var sliderContainerWidth = $('.slideshow-container').width();
 				if (sliderContainerWidth < 1200 && i != 0) {
 					if (i == 5) {
	 					newPosition -= 30;
 					}
 					else {
	 					newPosition -= 50;	
 					}
 				}
 				$(this).css('left', newPosition + 'px');
 				//$(this).css('opacity', 1); 
 			}
 			else if($(this).css('right') != "auto"){
 				var currentPosition = parseInt(cleanValue($(this).css('right')));
 				var newPosition = currentPosition - i*$slide_width;
 				var sliderContainerWidth = $('.slideshow-container').width();
 				if (sliderContainerWidth < 1200) {
	 				newPosition -= 140;
 				}
 				$(this).css('right', newPosition + 'px');
 					
 				//$(this).css('opacity', 1); 
 			}
 			
 		});
 	});
 	
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
 	
 }
 
 function cleanValue(value) {
 	return value.replace(/[^-\d\.]/g, '');
 }
 
 // This function moves the whole content of a slide by the amount of pixel as specified in pixelOffset.
 function transformSlideContent(slide, pixelOffset) {
 	var addCallback = true;
 	$.each($slides, function (i) {
 		$(this).children('*').each(function () {
 			$(this).css('opacity', "1");
 			// Fallback for browsers that don't support CSS3.
 			if ($vP == "-ms-") {
 				if($(this).css('left') != "auto") {
 					var currentPosition = parseInt(cleanValue($(this).css('left')));
 					var newPosition = currentPosition + pixelOffset;
// 					if (pixelOffset > 0) {
// 						$(this).animate({left: '+=' + pixelOffset.toString()}, 1000);
// 					}
// 					else {
// 						$(this).animate({left: '-=' + pixelOffset.toString()}, 1000);
// 					}
					// Required to support animation on user interface slide.
					if(addCallback && ($activeSlide == 2 || $activeSlide == 3 || $activeSlide == 4)) {
						if ($activeSlide == 2) {
							$(this).stop().animate({left: newPosition}, 1000, function () {
								userInterfaceSlideAnimation();
							});
							addCallback = false;
						}
						else if ($activeSlide == 3) {
							$(this).stop().animate({left: newPosition}, 1000, function () {
								architectureSlideAnimation();
							});
							addCallback = false;
						}
						else if ($activeSlide == 4) {
							$(this).stop().animate({left: newPosition}, 1000, function () {
								qmSlideAnimation();
							});
							addCallback = false;
						}
						
						
					}
					else {
						$(this).stop().animate({left: newPosition}, 1000);
					}
 					
 				}
 				else if($(this).css('right') != "auto") {
 					var currentPosition = parseInt(cleanValue($(this).css('right')));
 					var newPosition = currentPosition - pixelOffset;
 					$(this).stop().animate({right: newPosition}, 1000);
 				}
 			}
 			else {
 				if($(this).hasClass('qm-magnifier')) {
 					$(this).css('transform', 'translate3d(' + (pixelOffset + 70).toString() + 'px, 0px, 0px) rotate(45deg)');
 				}
 				else {
 					$(this).css('transform', 'translate3d(' + pixelOffset.toString() + 'px, 0px, 0px)');
 				}
 				
 			}
 			if(i == $activeSlide) {
	 			if ($vP == "-ms-") {
	 				//$(this).animate({opacity: 1}, 1000);
	 			}
	 			else {
	 				if($(this).hasClass('qm-code-snippet') || $(this).hasClass('qm-stability-approved')) {
	 					$(this).css('opacity', "0");
	 				}
	 				else {
	 					$(this).css('opacity', "1");
	 				}
 				}
 			}
 			else {
 				if ($vP == "-ms-") {
 					//$(this).animate({opacity: 0.2}, 1000);
 				}
 				else {
 					$(this).css('opacity', "0.2");
 				}
 			}
 			//alert($(this).css('-webkit-transform'));
 		});
 	});
 }
 
 function goToSlide(slideNumber) {
 	var fromSlide = 0;
 	if ($vP == "-ms-") {
 		fromSlide = $activeSlide;
 	}
 	animateSlideTransition(fromSlide, slideNumber);
 }
 
 function animateSlideTransition(fromSlide, toSlide) {
 	// Calculate transition offset
 	var slideOffset = fromSlide - toSlide;
 	var pixelOffset = slideOffset * $slide_width;
 	
 	$currentlyAppliedXTransformation = pixelOffset;
 	
 	// Update page indicator.
 	$('#nav-slide-' + $activeSlide).removeClass('active');
 	
 	if ($activeSlide == 2) {
 		resetUserInterfaceSlideAnimation();
 	}
 	else if ($activeSlide == 3) {
 		resetArchitectureSlideAnimation();
 	}
 	
 	// Set new active slide.
 	$activeSlide = toSlide;
 	refreshSlideNavigation();
 	
 	// Update page indicator.
 	$('#nav-slide-' + $activeSlide).addClass('active');
 	
 	// When user interface slide is loaded, start user interface animation.
 	if($activeSlide == 2) {
 		$('#ui-wireframe').one($transitionEnd, function () {
 			userInterfaceSlideAnimation();
 		});
 	}
 	else if($activeSlide == 3) {
 		$('#architecture-icon-back').one($transitionEnd, function () {
 			architectureSlideAnimation();
 		});
 	}
 	else if($activeSlide == 4) {
 		$('#qmScreenshotIcon').one($transitionEnd, function () {
 			qmSlideAnimation();
 		});
 	}
 	
 	// Move every element of every slide pixelOffset pixels (will move to left if negative and to right if positive).
 	for (var i=0; i < $slides.length; i++) {
 		transformSlideContent($slides[i], pixelOffset);
 	}
 	
 }
 
 // This function is responsible for performing the animation on the user interface slide.
 function userInterfaceSlideAnimation() {
 	// Move wireframe to the left and finished user interface to the right.
 	
 	if($vP == '-ms-') {
 		$('#ui-wireframe').stop().animate({left: '-=150px'}, 1000);
 		$('#ui-finished').stop().animate({left: '+=150px'}, 1000);
 		if (parseInt($.browser.version, 10) === 9) {
 			$("#ui-wireframe").rotate({duration:1000, angle: 0, animateTo:-2});
 			$("#ui-finished").rotate({duration:1000, angle: 0, animateTo:2});
		} 
 		
 	}
 	else {
 		var translateWireframe = $currentlyAppliedXTransformation - 150;
 		var translateFinished = $currentlyAppliedXTransformation + 150;
 		
 		var sliderContainerWidth = $('.slideshow-container').width();
		if (sliderContainerWidth < 1200) {
			translateWireframe += 20;
			translateFinished -= 20;
		}
 		
 		$('#ui-wireframe').css('transform', 'translate3d(' + translateWireframe + 'px, 0px, 0px) rotate(-2deg)');
 		$('#ui-finished').css('transform', 'translate3d(' + translateFinished + 'px, 0px, 0px) rotate(2deg)');
 	}
 	
 }
 
 function resetUserInterfaceSlideAnimation() {
 	if($vP == '-ms-') {
 		$('#ui-wireframe').css('left','+=150px');
 		$('#ui-finished').css('left' ,'-=150px');
 		if (parseInt($.browser.version, 10) === 9) {
 			$("#ui-wireframe").rotate(0);
 			$("#ui-finished").rotate(0);
 		}
 		
 	}
 }
 
 // This function is responsible for performing the animation on the architecture slide.
 function architectureSlideAnimation() {
 	// Move wireframe to the left and finished user interface to the right.
 	
 	if($vP == '-ms-') {
 		if(parseInt($.browser.version, 10) === 9) {
	 		$("#architecture-icon-back").rotate({duration:1000, angle: 0, animateTo:5});
	 		$("#architecture-icon-front").rotate({duration:1000, angle: 0, animateTo:-5});	
 		}
 		
 	}
 	else {
 		$('#architecture-icon-back').css('transform', 'translate3d(' + $currentlyAppliedXTransformation  + 'px, 0px, 0px) rotate(5deg)');
 		$('#architecture-icon-front').css('transform', 'translate3d(' + $currentlyAppliedXTransformation  + 'px, 0px, 0px) rotate(-5deg)');
 	}
 }
 
 function resetArchitectureSlideAnimation() {
 	if($vP == '-ms-' && parseInt($.browser.version, 10) === 9) {
 		$("#architecture-icon-back").rotate(0);
 		$("#architecture-icon-front").rotate(0);
 		
 	}
 }
 
 // This function is responsible for performing the animation on the quality management slide.
 function qmSlideAnimation() { 	
 	if($vP == '-ms-') {
 		
 	}
 	else {
 		$('.qm-magnifier').css('transform', 'translate3d(' + $currentlyAppliedXTransformation  + 'px, 0px, 0px) rotate(0deg)');
 		$('.qm-magnifier').one($transitionEnd, function() { qmSlideAnimationStep2(); } );
 	}
 }
 
 function qmSlideAnimationStep2() {
 	$('.qm-code-snippet').css('opacity', '1');
 	$('.qm-code-snippet').one($transitionEnd, function() { qmSlideAnimationStep3(); } );
 }
 
 function qmSlideAnimationStep3() {
 	$('.qm-stability-approved').css('opacity', 1);
 }
 
 
 