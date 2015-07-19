// JavaScript Document
$(document).ready(function(){
	var beerRequests = [];
	$('.drink-names').click(function(){
		showDrinks($(this).text());
	});
	$('.drink-names').hover(function(){
		$(this).css('cursor', 'pointer');
	});
	$('.pizza-menu').scroll(function(){
		$('.scroll-bottom').fadeOut();
	});
	$('.pizza-menu-lunch').scroll(function(){
		$('.scroll-bottom-lunch').fadeOut();
	});
	$("#tooltip").tooltip();
	$( "#tooltip" ).tooltip({
	  tooltipClass: "custom-tooltip-styling"
	});
});



function showDrinks(type){
	if (type=='Beer'){
		$('.wine-list').hide();
		$('.request').hide();
		$('.beer-list').fadeIn('slow', function(){
			
		});	
	} else if (type=='Wine'){
		$('.beer-list').hide();
		$('.request').hide();
		$('.wine-list').fadeIn('slow', function(){
			
		});
	}	
}

function logBeer(beer){
	$.ajax({ 
	  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
	  type: 'post',
	  data: {
		  'key': 'mgUDBQIL9DT47QNAPNb-SQ',
		  'message': {
			'from_email': 'whileryan@gmail.com',
			'to': [
				{
					'email': 'whileyryan@gmail.com',
					'name': 'Ryan',
					'type': 'to'	
				}
			],
			'autotext': 'true',
			'subject': 'Beer Request',
			'html': beer  
		}
	  }
	}).done(function(response){
		$('.request').append('Thank you for your request, we will look into getting this beer on tap!');
		$('.beerInput')[0]['value'] = '';
	});
	
}
 
