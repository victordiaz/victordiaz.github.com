$(document).ready(function() { 
    
    $('body').append('<div id = "notocar"></div>'); 
    $('#notocar').css({ 
    	position: 'fixed',
    	width: '52px',
    	height: "52px", 
    	top: '10%', 
    	left: 0,	
    	opacity: '0.5',		
    	background: 'black',
    	'z-index': 2,
    	display: 'none'
    });
});

function monstruito() {
	$('body').prepend('<div id = "q1"><div id ="ojoiz"></div><div id ="ojoder"></div></div>'); 
	$('body').append('<div id = "q2"></div>'); 
	$('#q1, #q2').css({ 
		position: 'absolute',
		width: '100%',
		height: ($(window).height() / 2) + 1, 
		top: 0, 
		left: 0,	
		opacity: '0.5',		
		background: 'black',
		'z-index': 2
			
	}); 

	$('#q1').css({ 
		top: ( $(window).height() / 2 ) * -1, 
		'border-bottom': '2px solid white'
	}); 
			
	$('#q2').css({
		top: $(window).height() + $(window).height() / 2, 
		'border-top': '5px solid white'
	}); 
	
	$('#ojoiz, #ojoder').css({ 
		width: '150px',
		height: '150px',
		'background-color': 'white',
		top: '10%',
		position: 'absolute',
	}); 

	$('#ojoiz').css({ 
		left: '10%'
	}); 

	$('#ojoder').css({ 
		right: '10%'
	}); 


	$(window).scroll(function() { 
		$('#q1').css('top', $(document).scrollTop());
		$('#q2').css('top', $(document).scrollTop() + $(window).height() / 2);
	
	});

	var q = $('.site')[0]; 
	q.style.webkitTransition = "all 2s ease-out"; 
	q.style.webkitTransformOrigin = "50% 0%";
	q.style.webkitTransform = "scale(0.5)";

	$('#q1').animate({  
		top: '0px', 
    	opacity: 1,
  	}, 2500, function() {
    	// Animation complete.
  	}); 


	$('#q2').animate({  
		top: $(window).height() - $(window).height() / 2, 
    	opacity: 1,
  	}, 2500, function() {
    	// Animation complete.
  	}); 

	$().mousemove(function(e){  
		//display the x and y axis values inside the div with the id XY  
		console.log("X Axis : " + e.pageX + " | Y Axis " + e.pageY);  
	});  
	
	

} 


function nomonstruo() {
	var q = $('.site')[0]; 
	q.style.webkitTransition = "all 2s ease-out"; 
	q.style.webkitTransformOrigin = "50% 0%";
	q.style.webkitTransform = "scale(1)";

	$('#q1').animate({  
		top: - $(window).height() / 2,
    	opacity: '0.5',
  	}, 2500, function() {
		$('#q1').remove();
  	}); 


	$('#q2').animate({  
		top: $(window).height(), 
    	opacity: '0.5',
  	}, 2500, function() {
		$('#q2').remove();
  	}); 

}