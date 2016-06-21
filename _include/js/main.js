function validateMobileNumber(mobile){
	if(!isNaN(parseFloat(mobile))){return true;}
	else{return false;}
}

function showLogin(){
	var loggedIn = false;
	
	$.ajax({
		url:'https://mypoolin.com/Organize/Userlogin/checkLoginSession',
		method:'GET',
		success:function(response) {
		console.log(response);
			if(response === true || response === '1' || response === 1){
				loggedIn = true;
			}
			if(loggedIn === false){
				$("#login").css('display','block');
				$("html, body").animate({scrollTop:$('#login').offset().top},450);
			}else{
				window.location = "../Organize/MyPools";
			}
			return false;			
		}
	});	
}


jQuery(function($){var BRUSHED=window.BRUSHED||{};var mobileMenuClone=$('#menu').clone().attr('id','navigation-mobile');BRUSHED.mobileNav=function(){var windowWidth=$(window).width();if(windowWidth<=979){if($('#mobile-nav').length>0){mobileMenuClone.insertAfter('#menu');$('#navigation-mobile #menu-nav').attr('id','menu-nav-mobile');}}else{$('#navigation-mobile').css('display','none');if($('#mobile-nav').hasClass('open')){$('#mobile-nav').removeClass('open');}}}
BRUSHED.listenerMenu=function(){$('#mobile-nav').on('click',function(e){$(this).toggleClass('open');if($('#mobile-nav').hasClass('open')){$('#navigation-mobile').slideDown(200,'easeOutExpo');}else{$('#navigation-mobile').slideUp(200,'easeOutExpo');}
e.preventDefault();});$('#menu-nav-mobile a').on('click',function(){$('#mobile-nav').removeClass('open');$('#navigation-mobile').slideUp(200,'easeOutExpo');});}
BRUSHED.nav=function(){$('.sticky-nav').waypoint('sticky');}
BRUSHED.filter=function(){if($('#projects').length>0){var $container=$('#projects');$container.imagesLoaded(function(){$container.isotope({animationEngine:'best-available',itemSelector:'.item-thumbs',layoutMode:'fitRows'});});var $optionSets=$('#options .option-set'),$optionLinks=$optionSets.find('a');$optionLinks.click(function(){var $this=$(this);if($this.hasClass('selected')){return false;}
var $optionSet=$this.parents('.option-set');$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');var options={},key=$optionSet.attr('data-option-key'),value=$this.attr('data-option-value');value=value==='false'?false:value;options[key]=value;if(key==='layoutMode'&&typeof changeLayoutMode==='function'){changeLayoutMode($this,options)}else{$container.isotope(options);}
return false;});}}
BRUSHED.fancyBox=function(){if($('.fancybox').length>0||$('.fancybox-media').length>0||$('.fancybox-various').length>0){$(".fancybox").fancybox({padding:0,beforeShow:function(){this.title=$(this.element).attr('title');this.title='<h4>'+this.title+'</h4>'+'<p>'+$(this.element).parent().find('img').attr('alt')+'</p>';},helpers:{title:{type:'inside'},}});$('.fancybox-media').fancybox({openEffect:'none',closeEffect:'none',helpers:{media:{}}});}}
BRUSHED.menu=function(){$('#menu-nav, #menu-nav-mobile').onePageNav({currentClass:'current',changeHash:false,scrollSpeed:600,scrollOffset:30,scrollThreshold:0.5,easing:'easeOutExpo',filter:':not(.external)'});}
BRUSHED.goSection=function(){$('#nextsection').on('click',function(){$target=$($(this).attr('href')).offset().top-30;$('body, html').animate({scrollTop:$target},500,'easeOutExpo');return false;});}
BRUSHED.goUp=function(){$('#goUp').on('click',function(){$target=$($(this).attr('href')).offset().top-30;$('body, html').animate({scrollTop:$target},500,'easeOutExpo');return false;});}
BRUSHED.scrollToTop=function(){var windowWidth=$(window).width(),didScroll=false;var $arrow=$('#back-to-top');$arrow.click(function(e){$('body,html').animate({scrollTop:"0"},600,'easeOutExpo');e.preventDefault();})
$(window).scroll(function(){didScroll=true;});setInterval(function(){if(didScroll){didScroll=false;if($(window).scrollTop()>1000){$arrow.css('display','block');}else{$arrow.css('display','none');}}},150);}
BRUSHED.utils=function(){$('.item-thumbs').bind('touchstart',function(){$(".active").removeClass("active");$(this).addClass('active');});$('.image-wrap').bind('touchstart',function(){$(".active").removeClass("active");$(this).addClass('active');});$('#social ul li').bind('touchstart',function(){$(".active").removeClass("active");$(this).addClass('active');});}
BRUSHED.accordion=function(){var accordion_trigger=$('.accordion-heading.accordionize');accordion_trigger.delegate('.accordion-toggle','click',function(event){if($(this).hasClass('active')){$(this).removeClass('active');$(this).addClass('inactive');}
else{accordion_trigger.find('.active').addClass('inactive');accordion_trigger.find('.active').removeClass('active');$(this).removeClass('inactive');$(this).addClass('active');}
event.preventDefault();});}
BRUSHED.toggle=function(){var accordion_trigger_toggle=$('.accordion-heading.togglize');accordion_trigger_toggle.delegate('.accordion-toggle','click',function(event){if($(this).hasClass('active')){$(this).removeClass('active');$(this).addClass('inactive');}
else{$(this).removeClass('inactive');$(this).addClass('active');}
event.preventDefault();});}
BRUSHED.toolTip=function(){$('a[data-toggle=tooltip]').tooltip();}
$(document).ready(function(){BRUSHED.nav();BRUSHED.mobileNav();BRUSHED.listenerMenu();BRUSHED.menu();BRUSHED.goSection();BRUSHED.goUp();BRUSHED.filter();BRUSHED.fancyBox();BRUSHED.scrollToTop();BRUSHED.utils();BRUSHED.accordion();BRUSHED.toggle();BRUSHED.toolTip();});$(window).resize(function(){BRUSHED.mobileNav();});});
