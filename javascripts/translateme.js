var modal = '<div id="myModal" class="reveal-modal">\
     <h2>Thanks for helping me out!</h2>\
	 <form class="nice">\
		<label>Just modify the text as you would think it would be better. Feel free! </label>\
		<textarea id="texttochange" style="width=100%"></textarea>\
		<a href="#" id = "submit" class="button">Here we go!</a>\
	 </form>\
     <a class="close-reveal-modal">&#215;</a>\
</div>';

/* 
$(document).ready(function() { 


    //window.alert("hola");
	$('#hey').css({
		"width":"50%",
		"background":"#d0d0ff",
		"border":"solid black 1px",
		"padding":"5px",
		"position":"absolute",
		"z-index":"12555"
	}); 

	$("#hey").hover(function() { 
		$(this).css({
			"background":"#bbb",	
		}); 

		$('#myModal').reveal();

	}); 

	//add css 
	//TODO add to every text in the website 

	$('.correctme').addClass("selected"); 

	$('.correctme').click(function(event) { 
		//alert(event.target.id); 
		$('#texttochange').text($(this).text()); 
		$('#myModal').reveal();

	}); 


	//when clicked on submit then send and close the modal dialog 
	$('#submit').click(function() {
		content = $('#texttochange').val(); 	

		$.ajax({
		   	data: {id:content, qq:5},
		    type: "GET",
	        dataType: "jsonp",
	        url: "http://lab.playfulhacker.com/qq2/echo.php",
       		success: function(data) { 
					alert(content);
				     alert(data.id); 
					//$('p').text(data.id);		 
		   	}
		}); 

        $('#myModal').trigger('reveal:close'); //close modal dialog

	}); 


}); 

*/