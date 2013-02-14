/*-----------------------------------------------
					QUIZ GAME!!!!!!!!

-----------------------------------------------*/

/*INITIALIZE CURRENT QUESTION*/
var curQuestion = -1;
var curChoices = -1;
var scoreTrack = 0;
var curExplain = -1;	
var curAnswers = -1;	


/* AUDIO FUNCITONS */

function clickSound(soundfile) {
	document.getElementById("dummy").innerHTML= "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	}

/*THIS CONTAINS ALL THE QUIZ ASSETS*/ 
var quiz = {
	title:"Final Fantasy Quiz!!!!",
	questions: 	[
					"Prop 35 aims to protect people, especially minors, from all forms of sexual exploitation. How many American children are at risk of being sexually exploited?",


					"In general, what does Prop 35 aim to do if approved by voters?",

					"Prop 35 states the following excuse can be used as a defense by individuals charged with trafficking a minor: ",

					"A man tells his girlfriend that he will kick her out of the house if she does not perform a sex act for money. She’s strapped for cash and can’t afford to live anywhere else. Could this man be charged with trafficking under Prop 35?",

					"What percentage of assets seized due to a trafficking arrest would go directly to public agencies and nonprofits that provide shelter, counseling and other services to trafficking victims?",

					"People convicted of trafficking must register as sex offenders and disclose all their online identities. If they change internet providers or change online identities, how long would they have to notify authorities?", 

					"Under the current law, training about human-trafficking is voluntary for law enforcement. Prop 35 aims to increase awareness amongst law enforcement officers by:"
					],
	option: 	[
						["10,000", "100,000", "300,000"],
						["Make prostitution illegal", "Make it illegal for prostitutes to post profiles online", "Impose harsher punishments on traffickers and recognize trafficked individuals as victims"],
						["The minor consented", "They did not know the minor was underage", "There is no permissible excuse for trafficking a minor"],
						["Yes", "No", "Unsure"],
						["100 percent" , "70 percent" , "30 percent"],
						["24 hours" , "72 hours" , "1 week"],
						["Requiring two hours of mandatory human trafficking training for all police officers" , "Offering incentives to police departments to train their officers" , "Educating officers on how to look for the warning signs of human trafficking"],
				],	
	answerkey: 	
					[2, 2, 2, 0, 1, 0, 0],
	
	explain: [
					"The U.S. Department of Justice estimates that 300,000 American children are at risk of being enticed or forced into the sex trade. Many enter the trade at 12 to 14 years old, but some are trafficked as young as four.", 

					"The CASE Act, as Proposition 35 is called,  imposes harsher punishments on individuals engaged in trafficking, recognizes trafficked women as victims, not criminals, and strengthens sex-offender registration requirements. Prostitution is already illegal in 49 of 50 U.S. states, including California.",

					"If passed, the CASE Act would specifically amend the law to note that consent is not a defense in a criminal case, because minors by nature are too young to consent to sexual activity. It also notes that not knowing she was a minor can't be used as a defense.",

					"The CASE Act defines coercion as any scheme, plan or pattern intended to cause a person to believe that if they don't do it, they'll be harmed. It defines serious harm to include nonphysical harm, like financial harm. If a man were to threaten his girlfriend financially -- such as kicking her out of the house -- that could meet the definition of coercion and he could be charged with human trafficking.",

					"Seventy percent of the money from fines will go to public agencies and nonprofits that provide shelter, counseling and other direct services to victims of human trafficking. The other 30 percent will go to law enforcement to fund human trafficking prevention, witness protection and rescue operations.",

					"The CASE Act would require sex offenders to send written notice to law enforcement within 24 hours of changing Internet Service Providers or creating a new online identity." ,

					"The CASE Act would make at least two hours of human trafficking training mandatory for all officers working in the field. Some departments have started giving this training to officers on their own."
					]				
		 					
}	


/* THIS CHANGES THE QUESTION DISPLAYED */

function changeQuestion() {
	curQuestion ++;
	curChoices ++;
	quizquestion.innerHTML = quiz.questions[curQuestion];
	but1.innerHTML = quiz.option[curChoices][0];
	but2.innerHTML = quiz.option[curChoices][1];
	but3.innerHTML = quiz.option[curChoices][2];
	
		
	if (curQuestion == 0) {
		scoreTrack = 0;
		scoreshow.innerHTML = scoreTrack;
	}
	

	
	document.getElementById('explaination').style.display = "none";
	document.getElementById('but1').style.display = "block";
	document.getElementById('but2').style.display = "block";
	document.getElementById('but3').style.display = "block";
}

/* RESET GAME */
function resetGame() {
	curQuestion = -1;
	curChoices = -1;
	curExplain = -1; 
	scoreTrack = 0;
	scoreshow.innerHTML = scoreTrack;
}	

/* SCORE CALCULATION */
function updateScore(d) {
	if (d == quiz.answerkey[curQuestion]){ 
		scoreTrack ++;   
		scoreshow.innerHTML = scoreTrack;				
	}	
}

/* CORRECT OR INCORRECT */
function verdictCheck(d) {
	if (d == quiz.answerkey[curQuestion]){ 
		verdict.innerHTML = "CORRECT!";				 
	}	
	else {
		verdict.innerHTML = "INCORRECT!";
	}
	if (curQuestion == 6) {
		document.getElementById('nextbut').style.display = "none";
		document.getElementById('startover').style.display = "block";
	}
	else {
		document.getElementById('nextbut').style.display = "block";
		document.getElementById('startover').style.display = "none";
	}
	
	document.getElementById('explaintext').innerHTML = quiz.explain[curQuestion];
	
	document.getElementById('explaination').style.display = "block";
	document.getElementById('but1').style.display = "none";
	document.getElementById('but2').style.display = "none";
	document.getElementById('but3').style.display = "none";
}