	var curProp;

	$(document).ready(function(){

		//this is the function when people click on a prop in the top nav
		$('.button').click(function(){
			$('iframe').attr('src', $(this).attr("name"));
			
			curProp = ($(this).attr('name'));
		});
	});	
