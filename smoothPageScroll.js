/* http://blog.bassta.bg/2013/05/smooth-page-scrolling-with-tweenmax/ */

$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.6;			//Scroll time
	var scrollDistance = 290;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});

function toggleHorizontal() {
    [].forEach.call(
        document.getElementById('menu').querySelectorAll('.custom-can-transform'),
        function(el){
            el.classList.toggle('pure-menu-horizontal');
        }
    );
};

function toggleMenu() {
	var h;
    // set timeout so that the panel has a chance to roll up
    // before the menu switches states
    if (menu.classList.contains('open')) {
		h = mClosed;
        setTimeout(toggleHorizontal, 500);
    }
    else {
		h = mOpen;
        toggleHorizontal();
    }
    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('x');
    //TOGGLE elements that need to change
    document.getElementById('lastpar').classList.toggle('lastparopen');
    document.getElementById('mainc').classList.toggle('opencw');
    $('.whitespace').css('height', h);
};

//backup
//$('a[href*=#]').each(function() {
			/*var thisPath = filterPath(this.pathname) || locationPath;
			if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'') ) {*/
				//var $target = $(this.hash), target = this.hash;
				//if (target) {
					//var targetOffset = $target.offset().top - mClosed;
					/*$(this).click(function(event) {
						event.preventDefault();
						var targetOffset;
						var menu = document.getElementById('menu');
						if (menu.classList.contains('open')) {
							toggleMenu();
							targetOffset = $target.offset().top - mOpen;
							alert(targetOffset);
						}
						else {
							targetOffset = $target.offset().top - mClosed;
							alert(targetOffset);
						}
						$(scrollElem).animate({scrollTop: targetOffset}, 500, function() {
									location.hash = target;
						});
						
						
					});
				}
			//}
		});*/
