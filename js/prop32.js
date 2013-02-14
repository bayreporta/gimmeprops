/*GLOBAL VARIABLES*/
var curSlide = 1;

/*LIGHT UP/DARKEN THE RIGHT ARROW*/
$(document).ready(function(){
	$('.right_arrow').show();
	$('.right_arrow').hover(function(){
		$('.right_arrow_solid').show();
	},function (){
		$('.right_arrow_solid').hide();
	});

});

/*LIGHT UP/DARKEN THE LEFT ARROW*/
$(document).ready(function(){
	$('.left_arrow').show();
	$('.left_arrow').hover(function(){
		$('.left_arrow_solid').show();
	},function (){
		$('.left_arrow_solid').hide();
	});
});

/*-----------------------------------------------*/
/*ARROW HIDE 1ST and LAST --> ONLOAD IN BODY*/

	function arrowCleaning() {
		if (curSlide ==1) {
			document.getElementById('left_arrow').style.display = "none";
		}
		else {
			document.getElementById('left_arrow').style.display = "block";
		}
		if (curSlide == 5) {
			document.getElementById('right_arrow').style.display = "none";
		}
		else {
			document.getElementById('right_arrow').style.display = "block";
		}
	}
/*-----------------------------------------------*/

/* SLIDE TRANSITIONS */

function slideNext() {
	if (curSlide == 1) {
		document.getElementById('summary_slide').style.display = "none";
		document.getElementById('trojan_s2').style.display = "block";
		curSlide = 2;
	}
	else if (curSlide == 2) {
		document.getElementById('trojan_s2').style.display = "none";
		document.getElementById('dataviz_s3').style.display = "block";
		curSlide = 3;
		
	}
	else if (curSlide == 3) {
		document.getElementById('dataviz_s3').style.display = "none";
		document.getElementById('quiz_s4').style.display = "block";
		curSlide = 4;
		
	}
	else if (curSlide == 4) {
		document.getElementById('quiz_s4').style.display = "none";
		document.getElementById('related_links').style.display = "block";
		curSlide = 5;
		
	}
	
}

function slideBefore() {
	if (curSlide == 5) {
		document.getElementById('related_links').style.display = "none";
		document.getElementById('quiz_s4').style.display = "block";
		curSlide = 4;
	}
	else if (curSlide == 4) {
		document.getElementById('quiz_s4').style.display = "none";
		document.getElementById('dataviz_s3').style.display = "block";
		curSlide = 3;
		
	}
	else if (curSlide == 3) {
		document.getElementById('dataviz_s3').style.display = "none";
		document.getElementById('trojan_s2').style.display = "block";
		curSlide = 2;
		
	}
	else if (curSlide == 2) {
		document.getElementById('trojan_s2').style.display = "none";
		document.getElementById('summary_slide').style.display = "block";
		curSlide = 1;
		
	}
}
/*-----------------------------------------------*/
/* INTERACTIVITY */
$(document).ready(function(){			
	
	$('.selectable').hover(function(){
		$(this).css({'opacity':'0.7'});
	}, function(){
		$(this).css('opacity', '1');
	});
	
});

/* TOOLBAR POPUP */

	$(document).ready(function() {

		//Select all anchor tag with rel set to tooltip
		$('a[rel=tooltip]').mouseover(function(e) {
			//Grab the title attribute's value and assign it to a variable
			var tip = $(this).attr('title');	

			//Remove the title attribute's to avoid the native tooltip from the browser
			$(this).attr('title','');

			//Append the tooltip template and its value
			$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');		

			//Show the tooltip with fadeIn effect
			$('#tooltip').fadeIn('500');
			$('#tooltip').fadeTo('10',0.9);

		}).mousemove(function(e) {
			
			if(860 - e.pageX < 185){
				var posX = e.pageX - 180;
			} else {
				var posX = e.pageX + 20;
			}
			if(640 - e.pageY < 250){
				var posY = e.pageY - 200;
			} else {
				var posY = e.pageY + 10;
			}

			//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
			$('#tooltip').css('top', posY );
			$('#tooltip').css('left', posX );
			console.log(e);

		}).mouseout(function() {

			//Put back the title attribute's value
			$(this).attr('title',$('.tipBody').html());

			//Remove the appended tooltip template
			$(this).children('div#tooltip').remove(); 
		});
	});
		

/*-----------------------------------------------*/

/* QUIZ */

$(document).ready(function() {

	$curtainopen = false;

	$(".rope").click(function(){
		$(this).blur();
		if ($curtainopen == false){ 
			$(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
			$(".leftcurtain").stop().animate({width:'60px'}, 2000 );
			$(".rightcurtain").stop().animate({width:'60px'},2000 );
			$curtainopen = true;
		}else{
			$(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'}); 
			$(".leftcurtain").stop().animate({width:'50%'}, 2000 );
			$(".rightcurtain").stop().animate({width:'51%'}, 2000 );
			$curtainopen = false;
		}
		return false;
	});
});			