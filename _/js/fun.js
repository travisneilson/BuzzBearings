$(function() {

	slidey();
	pics();
	sitecreds();
	paypal();
	
});
 
function slidey() {

	$('h1 span').click(function() {
		
		if ($('header').hasClass('state-up')){
			$('.wrap.above, .wrap.below').animate({top: '0%'});
			$('header').removeClass('state-up').addClass('state-down').animate({marginTop: '-150px', top: '100%'});
		
		} else {
			$('.wrap.above, .wrap.below').animate({top: '-100%'});
			$('header').addClass('state-up').removeClass('state-down').animate({marginTop: '0px', top: '0%'});
		}
	});

}


function pics() {

	$('.p > a').click(function() {
		
		var name = $(this).attr('href').slice(1),
			title = $(this).attr('title');
		
		$('.lightbox').find('img').attr('src','_/img/' + name + '.jpg')
					  .next('.title').html(title);
		
		$('.wrap.above, .wrap.below, header').animate({left: '-100%'});
		$('.lightbox').animate({left: '0%'});
		return false;
	});
	
	$('.lightbox').click(function() {
		$('.wrap.above, .wrap.below, header').animate({left: '0%'});
		$('.lightbox').animate({left: '100%'});
	});
	
}

function sitecreds() {

	$('.site-info-link').click(function() {
		
		$('.wrap.above, .wrap.below, header').animate({left: '100%'});
		$('.site-info').animate({left: '0%'});
		return false;
	});
	
	$('.site-info').click(function() {
		$('.wrap.above, .wrap.below, header').animate({left: '0%'});
		$('.site-info').animate({left: '-100%'});
	});
}

function paypal() {

	$('.button').click(function() {
		$('.paypal').css('display', 'block').animate({opacity: '1'});
		return false;
	});
	
	$('.cancel').click(function() {
		$('.paypal').animate({opacity: '0'}).css('display', 'none');
		return false;
	});
}
