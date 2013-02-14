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
	
	$(document).ready(function(){			
		
		$('.selectable').hover(function(){
			$(this).css({'opacity':'0.4'});
		}, function(){
			$(this).css('opacity', '1');
		});
		
	});
	
	/* TOOLBAR POPUP */
	
		var scrollContents =	{
									target:  ["slide2_reg","slide2_insurance","slide2_kid","slide2_unemploy","slide2_soldier","slide2_car"],
									content: [
												"slide_reg": "For most people, as long as you don’t have a lapse in coverage that’s more than 90 days total over a five year period, you get a discount. If not, you could see a rate increase.",
												"Insurance companies don’t have to give you this discount. If they do, the discount would be given based on how many years over the past five years you had coverage, rounded up. So if you had coverage for two out of five years, you would get 40 percent of the discount. Win!",
												"Minors have never driven so they can’t start off with a discount, unless a parent applies for the discount, that is. Otherwise, a higher insurance rate could come with John or Jane’s first car.",
												"The economy has taken its toll on many, and a lapse in coverage due to unemployment won’t count against you if it’s no more than 18 months total in a five year period.",
												"Whether you’re fighting overseas or defending the homefront, active military services won’t count against you if there’s a lapse in coverage.",
												"Voters made the choice to regulate the auto insurance industry. As such, a company must base its rate on a driver’s safety record, the number of miles driven each year, and the number of years they have been driving. Those rates must be approved by the State. There are also 16 optional factors that a company could use, like loyalty discounts."
											 ]
								}
								

		$(document).ready(function() {

			//Select all anchor tag with rel set to tooltip
			$('a[rel=tooltip]').mouseover(function(e) {
				//Grab the title attribute's value and assign it to a variable
				/*var tip = $(this).attr('title');*/	
				var tip = $(this).attr(scrollContents[0]);

				//Remove the title attribute's to avoid the native tooltip from the browser
				$(this).attr('title','');

				//Append the tooltip template and its value
				$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + scrollContents[this][] + '</div><div class="tipFooter"></div></div>');		

				//Show the tooltip with fadeIn effect
				$('#tooltip').fadeIn('500');
				$('#tooltip').fadeTo('10',0.9);

			}).mousemove(function(e) {

				//Keep changing the X and Y axis for the tooltip, thus, the tooltip move along with the mouse
				$('#tooltip').css('top', e.pageY + 10 );
				$('#tooltip').css('left', e.pageX + 20 );

			}).mouseout(function() {

				//Put back the title attribute's value
				$(this).attr('title',$('.tipBody').html());

				//Remove the appended tooltip template
				$(this).children('div#tooltip').remove();
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
			if (curSlide == 4) {
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
			document.getElementById('interactive_slide').style.display = "block";
			curSlide = 2;
		}
		else if (curSlide == 2) {
			document.getElementById('interactive_slide').style.display = "none";
			document.getElementById('dataviz_slide').style.display = "block";
			curSlide = 3;
		}
		else if (curSlide == 3) {
			document.getElementById('dataviz_slide').style.display = "none";
			document.getElementById('links_slide').style.display = "block";
			curSlide = 4;
		}
	}
	
	function slideBefore() {
		if (curSlide == 2) {
			document.getElementById('interactive_slide').style.display = "none";
			document.getElementById('summary_slide').style.display = "block";
			curSlide = 1;
		}
		else if (curSlide == 3) {
			document.getElementById('dataviz_slide').style.display = "none";
			document.getElementById('interactive_slide').style.display = "block";
			curSlide = 2;
		}
		else if (curSlide == 4) {
			document.getElementById('links_slide').style.display = "none";
			document.getElementById('dataviz_slide').style.display = "block";
			curSlide = 3;
		}
	}
	

	
	
