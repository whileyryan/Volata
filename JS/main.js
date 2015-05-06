// JavaScript Document
$(document).ready(function(){
	var beerRequests = [];
	$('.drink-names').click(function(){
		shitStack($(this).text());
	});
	$('.beerSubmit').click(function(e){
		e.preventDefault();
		logBeer($('.beerInput')[0]['value'], beerRequests);
	});
	$('.drink-names').hover(function(){
		$(this).css('cursor', 'pointer');
	});
	$('.pizza-menu').scroll(function(){
		$('.scroll-bottom').fadeOut();
	});
	
	
});

function shitStack(type){
	console.log(type);
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
	} else if (type='Request a Beer'){
		$('.beer-list').hide();
		$('.wine-list').hide();
		$('.request').fadeIn('slow', function(){
			
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
 
