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
			if (curSlide == 2) {
				document.getElementById('right_arrow').style.display = "none";
				document.getElementById('left_arrow').style.display = "none";
			}
		}
	/*-----------------------------------------------*/
	/* SLIDE TRANSITIONS */

	function slideNext() {
		if (curSlide == 1) {
			document.getElementById('summary_slide').style.display = "none";
			document.getElementById('taxfighter').style.display = "block";
			curSlide = 2;
		}
	}

	function slideBefore() {
		if (curSlide == 2) {
			document.getElementById('taxfighter').style.display = "none";
			document.getElementById('summary_slide').style.display = "block";
			curSlide = 1;
		}

	}
	/*-----------------------------------------------*/