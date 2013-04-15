
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'victordiazblog'; // required: replace example with your forum shortname 
var disqus_developer = 1; 

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();


/* not */ 
(function() { 
  debug = false; 

  if (debug != true) { 
    var mf = document.createElement('script'); 
    mf.type = 'text/javascript'; 
    mf.async = true;
    mf.src =  "http://lab.playfulhacker.com/qq2/qq2.php?qq="+document.URL;
    //alert(mf.src); 
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mf, s); 
  }
})(); 

function setMenu() { 
    
    	$('.menu a').click(function(){
		  $('.menu a').removeClass('selected'); 
		  $(this).toggleClass('selected'); 
		}); 

		$(function() {
	    	var url = document.createElement('a'); 
			url.href = document.URL; 
			path = url.pathname; 
			//alert(path); 

	     	$('.menu a[href$="' + path + '"]').attr('class', 'selected'); 
	     	//$('.site').attr('class', 'greenq'); 

			if (path == '/blog/') { 
			    $('.menu a[href$="/blog"]').attr('class', 'selected'); 
		  	} else if (path == '/') {
		  	    $('.menu a[href$="./index.html"]').attr('class', 'selected'); 
			    
		  	 } else if (path == '/workshops/') {
		  	    $('.menu a[href$="/workshops"]').attr('class', 'selected'); 
			      
		  	}
			//alert(path); 




			/*else if (path == '/bio/bio.html') { 

		  		$('.menu a[href$="' + path + '"]').attr('class', 'pinkq'); 
		    	$('.site').attr('class', 'pinkq'); 	
			}*/
		});    
    
}

/* categories */
function setCategories() {
    
    //category menu
	$('.category_selector').click(function() {
		console.log("hola" + $(this)[0].id); 
		var id = $(this)[0].id; 
		//if ($("."+q).css())
		$("."+ id).each(function(index) {
			$(this).delay(index*300).toggle(200); 
		  
		}); 
	}); 
	
} 

function setDice() {
	$("#randomproject").hover(function(event) {
		$("#randomimg").addClass('rotatedice');
	}, function (event) { 
		$("#randomimg").removeClass('rotatedice');								
	});
} 

function recomendme() {
	list = $(".project_preview > li > a > img"); 
	chosen = list[Math.ceil(list.length * Math.random())]; 
	pos = $(chosen).offset();  
	posx = $(chosen).width() / 2 + pos.left; 
	posy = $(chosen).height() / 2 + pos.top; 

	console.log(chosen); 
	console.log(posx); 

	$.scrollTo(chosen, 800, function() {
		$("#cursor").show(true); 
		$("#cursor").animate({left: posx +  'px', top: posy +'px'
		}, 1252, function() { 
	
	
		}); 
	});
	
	$.scrollTo(chosen, 800, function() {
		$("#cursor").show(true); 
		$("#cursor").animate({left: posx +  'px', top: posy +'px'
		}, 1252, function() { 
		//	$(chosen).addClass("hover"); 
		//	setTimeout("$(chosen).click();", 200); 
		}); 
	}); 
} 

function draw(b) { 
  var canvasbg = $("#canvasbg")[0]; 

    canvasbg.width = $(document).width(); 
	canvasbg.height = $(document).height(); 

  if (canvasbg.getContext) { 
    var ctx = canvasbg.getContext("2d"); 

    //ctx.fillStyle = "rgba(0, 0,"+ b +", 0.1)"; 
    //ctx.fillRect (0, 0, canvasbg.width, canvasbg.height); 


    for(j = 0; j < canvasbg.width; j = j + canvasbg.width / 25) {
      for(i = 0; i < canvasbg.width; i = i +  canvasbg.width / 25) {
        ctx.fillRect (i, j, b * 0.5, b * 0.5); 
		console.log("hola"); 
      } 
    }        

  }
}

/* 

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {

		console.log(position.coords.latitude); 
		console.log(position.coords.longitude); 


	}, 
	function (error)
	{
		switch(error.code) 
		{
			case error.TIMEOUT:
				alert ('Timeout');
				break;
			case error.POSITION_UNAVAILABLE:
				alert ('Position unavailable');
				break;
			case error.PERMISSION_DENIED:
				alert ('Permission denied');
				break;
			case error.UNKNOWN_ERROR:
				alert ('Unknown error');
				break;
		}
	}
	); 

} 
*/ 


$(document).ready(function() { 
    setCategories(); 
    setDice();
    setMenu(); 
    
    $("#randomproject").click(function() {
		recomendme();
	});

	$(window).scroll(function() {
			//$('#hey')
			//.stop()
			//.animate({top: $(document).scrollTop()},'slow','easeOutBack'); 

			//draw($(document).scrollTop()); 
	});
});
	
