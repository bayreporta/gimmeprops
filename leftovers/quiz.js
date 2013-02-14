	var quiz = {
		"title"		:"The CASE Quiz",
		"questions"	: [
						"Q1: The California Against Sexual Exploitation (CASE) Act aims to protect people, especially 	children, from all forms of sexual exploitation. How many American children are at risk of being sexually exploited?",
						"Q2: The CASE Act aims to",
						"Q3: The CASE Act says the following excuse can be used as a defense by individuals charged with trafficking a minor: ",
						"Q4: A man tells his girlfriend that he will kick her out of the house if she does not perform a sex act in exchange for money. She’s strapped for cash and can’t afford to live anywhere else. Under the CASE Act’s definition of “coercion” and “serious harm,” could this man be charged with trafficking?",
						"Q5: Under the CASE Act, fines imposed and collected from individuals charged with human trafficking will be deposited into the California Victim-Witness Assistance Fund to fund grants for services for victims of human trafficking. What percentage will go directly to public agencies and nonprofits that provide shelter, counseling and other services?",
						"Q6: The CASE Act aims to strengthen sex-offender registration requirements, because the Internet has made keeping track of sex offenders more difficult. The Act would require sex offenders to send written notice to law enforcement after he or she changes Internet Service Providers, or adds or changes an online identity within",
						"Q7: Under the current law, human-trafficking training is voluntary for peace officers and law enforcement. The CASE Act aims to increase awareness amongst law enforcement by",
		
						],
		"options"	: [
						["10,000", "100,000", "300,000"],
						["Make prostitution illegal", "Make it illegal for prostitutes to post profiles online", "Impose harsher punishments on traffickers, recognize trafficked individuals as victims, and strengthen sex-offender requirements"],
						["The minor consented", "They did not know the minor was underage", "There is no permissible excuse for trafficking a minor"],
						["Yes", "No", "What a jerk"],
						["100 percent" , "70 percent" , "30 percent"],
						["24 hours" , "72 hours" , "1 week"],
						["Requiring two hours of mandatory human trafficking training for all police officers" , "Offering incentives to police departments to train their officers" , "Distributing pamphlets and other materials with information including how to look for the warning signs of human trafficking"],
					
					],
		"correct-answers":
						[2, 2, 2, 0, 1, 0, 0],
	
		"explanations": [
							["Incorrect! The U.S. Department of Justice estimates that 300,000 American children are at risk of being enticed or forced into the sex trade. Many enter the trade at 12 to 14 years old, but some are trafficked as young as four.", "Incorrect! The U.S. Department of Justice estimates that 300,000 American children are at risk of being enticed or forced into the sex trade. Many enter the trade at 12 to 14 years old, but some are trafficked as young as four.", "Correct. The U.S. Department of Justice estimates that 300,000 American children are at risk of being enticed or forced into the sex trade. Many enter the trade at 12 to 14 years old, but some are trafficked as young as four."],
							["Incorrect! The CASE Act aims to impose harsher punishments on individuals engaged in trafficking, recognize trafficked women as victims, not criminals, and strengthen sex-offender registration requirements. Prostitution is already illegal in 49 of 50 U.S. states, including California.", "Incorrect! The CASE Act aims to impose harsher punishments on individuals engaged in trafficking, recognize trafficked women as victims, not criminals, and strengthen sex-offender registration requirements. Prostitution is illegal in California, regardless of how a women solicits herself.", "Correct! The CASE Act aims to impose harsher punishment on individuals engaged in trafficking, recognize trafficked women and children as victims, not criminals, and strengthen sex-offender registration requirements."],
							["Incorrect! If passed, the CASE Act would specifically amend the law to note that consent is not a defense in a criminal case, because minors by nature are too young to consent to sexual activity. It also notes that not knowing she was a minor can't be used as a defense.", "Incorrect! If passed, the CASE Act would specifically amend the law to note that consent is not a defense in a criminal case, because minors by nature are too young to consent to sexual activity. It also notes that not knowing she was a minor can't be used as a defense.", "Correct! If passed, the CASE Act would specifically amend the law to note that consent is not a defense in a criminal case, because minors by nature are too young to consent to sexual activity. It also notes that not knowing she was a minor can't be used as a defense."],
							["Correct. The CASE Act defines coercion as any scheme, plan or pattern intended to cause a person to believe that if they don't do it, they'll be harmed. It defines serious harm to include nonphysical harm, like financial harm. If a man were to threaten his girlfriend financially -- like by kicking her out of the house -- he could be found guilty of coercion, which constitutes human trafficking.", "Incorrect. The CASE Act defines coercion as any scheme, plan or pattern intended to cause a person to believe that if they don't do it, they'll be harmed. It defines serious harm to include nonphysical harm, like financial harm. If a man were to threaten his girlfriend financially -- like by kicking her out of the house -- he could be found guilty of coercion, which constitutes human trafficking." , "Indeed, and he could be charged with human trafficking. The CASE Act defines coercion as any scheme, plan or pattern intended to cause a person to believe that if they don't do it, they'll be harmed. It defines serious harm to include nonphysical harm, like financial harm. If a man were to threaten his girlfriend financially - like by kicking her out of the house - he could be found guilty of coercion, which constitutes human trafficking."],
							["Incorrect! 70 percent of fines will go towards public agencies and nonprofits that provide shelter, counseling and other direct services to victims of human trafficking. The other 30 percent will go towards law enforcement to fund human trafficking prevention, witness protection and rescue operations.", "Correct! 70 percent of fines will go towards public agencies and nonprofits that provide shelter, counseling and other direct services to victims of human trafficking. The other 30 percent will go towards law enforcement to fund human trafficking prevention, witness protection and rescue operations.", "Incorrect! 70 percent of fines will go towards public agencies and nonprofits that provide shelter, counseling and other direct services to victims of human trafficking. The other 30 percent will go towards law enforcement to fund human trafficking prevention, witness protection and rescue operations."],
							["Correct! The CASE Act would require sex offenders to send written notice to law enforcement within 24 hours of changing Internet Service Providers or creating a new online identity." , "Incorrect! The CASE Act would require sex offenders to send written notice to law enforcement within 24 hours of changing Internet Service Providers or creating a new online identity." , "Incorrect! The CASE Act would require sex offenders to send written notice to law enforcement within 24 hours of changing Internet Service Providers or creating a new online identity."],
							["Correct! The CASE Act would make at least two hours of human trafficking training mandatory for all officers working in the field. Some departments have started giving this training to officers on their own accord." , "Incorrect! The CASE Act would make at least two hours of human trafficking training mandatory for all officers working in the field. Some departments have started giving this training to officers on their own accord." , "Incorrect! The CASE Act would make at least two hours of human trafficking training mandatory for all officers working in the field. Some departments have started giving this training to officers on their own accord."],
		
						],

		
		
	};
	
	var currentQuestion = 0;
	
	function loadQuestion(){
		
		document.getElementById('o1').innerHTML = quiz["options"][currentQuestion][0];
		document.getElementById('o2').innerHTML = quiz["options"][currentQuestion][1];
		document.getElementById('o3').innerHTML = quiz["options"][currentQuestion][2];
		document.getElementById('question').innerHTML = quiz["questions"][currentQuestion];
		
		document.getElementById('o1').style.color = "black";
		document.getElementById('o2').style.color = "black";
		document.getElementById('o3').style.color = "black";
		
		document.getElementsByName('quiz')[0].checked = false;
		document.getElementsByName('quiz')[1].checked = false;
		document.getElementsByName('quiz')[2].checked = false;
		
		if(currentQuestion < quiz ["questions"].length - 1){
			currentQuestion++; 
			
		} 
		
	}
	
		function checkAnswer(){
			
			document.getElementsByTagName('label')[quiz["correct-answers"][currentQuestion-1]].style.color = "Green";
			
			//if they select A
			if(document.getElementsByName("quiz")[0].checked){
				document.getElementById('explanation').innerHTML = quiz["explanations"][currentQuestion-1][0];
			}
			
			//if they select B
			if(document.getElementsByName("quiz")[1].checked){
				document.getElementById('explanation').innerHTML = quiz["explanations"][currentQuestion-1][1];
			}
			
			//if they select C
			if(document.getElementsByName("quiz")[2].checked){
				document.getElementById('explanation').innerHTML = quiz["explanations"][currentQuestion-1][2];
			}
			
		}

		window.onload = loadQuestion;