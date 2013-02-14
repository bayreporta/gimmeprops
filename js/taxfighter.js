	/* GLOBAL VARIABLES AND CONSTANTS */
		var mungerScore = 0;
		var brownScore = 0;
		var nopropScore = 0;
		var curVictory = 0;
		
	/* AUDIO FUNCITONS */
		
		function clickSound(soundfile) {
		 		document.getElementById("dummy").innerHTML=
		 		"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		function clapSound(soundfile) {
		 		document.getElementById("dummy").innerHTML=
		 		"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
		}
		
	/*--------------------------------------------------------------------------------------*/	
	
	/* MOVES ARRAY */
		var moveState = {
							brown: [false,false,false,false],
							munger: [false,false,false,false],
							noprop: [false,false,false] 
						}	
						
		var explain	= 	["bv1","bv2","bv3","bv4","mv1","mv2","mv3","mv4","nv1","nv2","nv3"]	
		
		/*--------------------------------------------------------------------------------------*/		
			 
	/* GAME PROGRESSION */  
			function checkMoves() {
				/* LOOKING TO SEE WHAT CHECKBOXES ARE CHECKED */
				var m1 = document.getElementById('m1').checked;
				var m2 = document.getElementById('m2').checked;
				var m3 = document.getElementById('m3').checked;
				var m4 = document.getElementById('m4').checked;
				var m5 = document.getElementById('m5').checked;
				var m6 = document.getElementById('m6').checked;
				var m7 = document.getElementById('m7').checked;
				var m8 = document.getElementById('m8').checked;
				var m9 = document.getElementById('m9').checked;
				var m10 = document.getElementById('m10').checked;
				var m11 = document.getElementById('m11').checked;
				
				/* SMAKE SURE PLAYER CHECKS AT LEAST ONE BOX*/					
				if( !m1 && !m2 && !m3 && !m4 && !m5 && !m6 && !m7 && !m8 && !m9 && !m10 && !m11){
						return false;
				}
					
				
				/* SET WHICH CHECKBOXES WERE CHOSEN */
				if (m1 == true) {
					moveState.brown[0] = true;
					brownScore ++;
				}	
				if (m2 == true) {
					moveState.munger[0] = true;
					mungerScore ++;
				}
				if (m3 == true) {
					moveState.brown[1] = true;
					brownScore ++;
				}
				if (m4 == true) {
					moveState.noprop[0] = true;
					nopropScore ++;
				}
				if (m5 == true) {
					moveState.brown[2] = true;
					brownScore ++;
				}
				if (m6 == true) {
					moveState.munger[1] = true;
					mungerScore ++;
				}
				if (m7 == true) {
					moveState.noprop[1] = true;
					nopropScore ++;
				}
				if (m8 == true) {
					moveState.munger[2] = true;
					mungerScore ++;
				}
				if (m9 == true) {
					moveState.brown[3] = true;
					brownScore ++;
				}
				if (m10 == true) {
					moveState.noprop[2] = true;
					nopropScore ++;
				}
				if (m11 == true) {
					moveState.munger[3] = true;
					mungerScore ++; 
				}
				/*--------------------------------------------------------------------------------------*/	
				
				/* CHECK SCORE TO DETECT VICTORY CONDITION */
				if (nopropScore >= 1) {
					document.getElementById('selectmove').style.display = "none";
					document.getElementById('backgroundtext').style.display = "none";
					document.getElementById('results').style.display = "block";
					document.getElementById('resultstext').style.display = "block";
					document.getElementById('resultstext').innerHTML = 
					"<h1>NO PROP WINS!</h1>" + 
					"<p>Based on the choices you made, it seems that you're concerned about using the initiative process for budget purposes or just don't agree with raising taxes to continue current spending. You'd make Grover Norquist proud. </p>";
				}	
				else if (mungerScore > brownScore && mungerScore > nopropScore) {
					document.getElementById('selectmove').style.display = "none";
					document.getElementById('backgroundtext').style.display = "none";
					document.getElementById('results').style.display = "block";
					document.getElementById('resultstext').style.display = "block";
					document.getElementById('resultstext').innerHTML = 
					"<h1>PROP 38 WINS!</h1>" +  
					"<p>Based on your choices, it seems you lean more toward Molly Munger's Prop 38. The prop could raise more revenue annually than its counterpart and the tax increases would last longer. But all but the poorest Californians would be taxed and proceeds would go to schools in grant form. </p>";
					
				} 
				else if (brownScore > mungerScore && brownScore > nopropScore) {
					document.getElementById('selectmove').style.display = "none";
					document.getElementById('backgroundtext').style.display = "none";
					document.getElementById('results').style.display = "block";
					document.getElementById('resultstext').style.display = "block";
					document.getElementById('resultstext').innerHTML = 
					"<h1>PROP 30 WINS!</h1>" + 
					"<p>Based on the choices you made, it seems you lean more toward Governor Jerry Brown's Prop 30. The prop would raise both the sales tax and income tax rates on the rich, and the proceeds would go to K-12 and Community Colleges. But the prop is tied to a budget bomb if not passed, a 5.9 billion slate of cuts. </p>";
				}
				else {
					document.getElementById('selectmove').style.display = "none";
					document.getElementById('backgroundtext').style.display = "none";
					document.getElementById('results').style.display = "block";
					document.getElementById('resultstext').style.display = "block";
					document.getElementById('resultstext').innerHTML = 
					"<h1>BOTH PROPS WIN!</h1>" + 
"<p>Based on the choices you made, it seems like you could go for both props. You could vote for both Prop 30 and Prop 38, and it is possible that both props could be passed. In that event, the Prop with the highest votes would move forward. </p>";					}
					
			}
				

			
			function toVictory() {
				document.getElementById('prop30').style.display = "block";
				/*
	
				/*--------------------------------------------------------------------------------------*/	
									
				/*BROWN LIGHT UP */
				if (moveState.brown[0] == true) {
					document.getElementById(explain[0]).style.border = "2px #00D802 solid";
					document.getElementById(explain[0]).style.background = "rgba(0,216,2,0.1)";
				}					
				if (moveState.brown[1] == true) {
					document.getElementById(explain[1]).style.border = "2px #00D802 solid";
					document.getElementById(explain[1]).style.background = "rgba(0,216,2,0.1)";
				}		
				if (moveState.brown[2] == true) {
					document.getElementById(explain[2]).style.border = "2px #00D802 solid";
					document.getElementById(explain[2]).style.background = "rgba(0,216,2,0.1)";
				}					
				if (moveState.brown[3] == true) {
					document.getElementById(explain[3]).style.border = "2px #00D802 solid";
					document.getElementById(explain[3]).style.background = "rgba(0,216,2,0.1)";
				}					
				/*--------------------------------------------------------------------------------------*/	
				
				/* MUNGER LIGHT UP */
					if (moveState.munger[0] == true) {
						document.getElementById(explain[4]).style.border = "4px #00D802 solid";
						document.getElementById(explain[4]).style.background = "rgba(0,216,2,0.1)";
					}	
					if (moveState.munger[1] == true) {
						document.getElementById(explain[5]).style.border = "4px #00D802 solid";
						document.getElementById(explain[5]).style.background = "rgba(0,216,2,0.1)";
					}	
					if (moveState.munger[2] == true) {
						document.getElementById(explain[6]).style.border = "4px #00D802 solid";
						document.getElementById(explain[6]).style.background = "rgba(0,216,2,0.1)";
					}	
					if (moveState.munger[3] == true) {
						document.getElementById(explain[7]).style.border = "4px #00D802 solid";
						document.getElementById(explain[7]).style.background = "rgba(0,216,2,0.1)";
					}	
					/*--------------------------------------------------------------------------------------*/	
					
					/* NO PROPS LIGHT UP */
					if (moveState.noprop[0] == true) {
						document.getElementById(explain[8]).style.border = "4px #00D802 solid";
						document.getElementById(explain[8]).style.background = "rgba(0,216,2,0.1)";
					}	
					if (moveState.noprop[1] == true) {
						document.getElementById(explain[9]).style.border = "4px #00D802 solid";
						document.getElementById(explain[9]).style.background = "rgba(0,216,2,0.1)";
					}	
					if (moveState.noprop[2] == true) {
						document.getElementById(explain[10]).style.border = "4px #00D802 solid";
						document.getElementById(explain[10]).style.background = "rgba(0,216,2,0.1)";
					}	
			}
			
			function resetGame() {
			 	moveState.brown = [false,false,false,false];
				moveState.munger = [false,false,false,false];
				moveState.noprops = [false,false,false];		
				mungerScore = 0;
				brownScore = 0;
				nopropScore = 0;
				curVictory = 0;
				document.getElementById('noprop').style.display = "none";
				document.getElementById('tutorial').style.display = "block";
				document.getElementById('results').style.display = "none";
				document.getElementById('resultstext').style.display = "none";
				document.getElementById('backgroundtext').style.display = "block";
				
				//COLOR RESET

				document.getElementById(explain[0]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[0]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[1]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[1]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[2]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[2]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[3]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[3]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[4]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[4]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[5]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[5]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[6]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[6]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[7]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[7]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[8]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[8]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[9]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[9]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[10]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[10]).style.background = 'rgba(255, 255, 255,0.1)';
		
			}
			
			function resetGame2() {
			 	moveState.brown = [false,false,false,false];
				moveState.munger = [false,false,false,false];
				moveState.noprops = [false,false,false];		
				mungerScore = 0;
				brownScore = 0;
				nopropScore = 0;
				curVictory = 0;
				document.getElementById('prop30').style.display = "none";
				document.getElementById('tutorial').style.display = "block";
				document.getElementById('results').style.display = "none";
				document.getElementById('resultstext').style.display = "none";
				document.getElementById('backgroundtext').style.display = "block";
				
				document.getElementById(explain[0]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[0]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[1]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[1]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[2]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[2]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[3]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[3]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[4]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[4]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[5]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[5]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[6]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[6]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[7]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[7]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[8]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[8]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[9]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[9]).style.background = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[10]).style.borderColor = 'rgba(255, 255, 255,0.1)';
				document.getElementById(explain[10]).style.background = 'rgba(255, 255, 255,0.1)';					
			}
			
			
			function startGame() {
				document.getElementById('tutorial').style.display = "none";
				document.getElementById('selectmove').style.display = "block";
			}
			/*--------------------------------------------------------------------------------------*/	
			
			/* CLEARS CHECKBOXES */
			function uncheck() {
				document.getElementById("m1").checked=false;
				document.getElementById("m2").checked=false;
				document.getElementById("m3").checked=false;
				document.getElementById("m4").checked=false;
				document.getElementById("m5").checked=false;
				document.getElementById("m6").checked=false;
				document.getElementById("m7").checked=false;
				document.getElementById("m8").checked=false;
				document.getElementById("m9").checked=false;
				document.getElementById("m10").checked=false;
				document.getElementById("m11").checked=false;		
			}
			
			/*--------------------------------------------------------------------------------------*/	
			/* VICTORY SCREEN CHANGE */
			function backVictory() {
				if (curVictory == 1) {
					document.getElementById('prop30').style.display = "block";
					document.getElementById('prop38').style.display = "none";
					curVictory --;
					
				}
				else if (curVictory == 2) {
					document.getElementById('prop38').style.display = "block";
					document.getElementById('noprop').style.display = "none";
					curVictory --;
				}
			}
			
			function changeVictory() {
				document.getElementById('previousbutton').style.display = "block";
				
				if (curVictory == 0) {
					document.getElementById('prop30').style.display = "none";
					document.getElementById('prop38').style.display = "block";
					curVictory ++;
					
				}
				else if (curVictory == 1) {
					document.getElementById('prop38').style.display = "none";
					document.getElementById('noprop').style.display = "block";
					curVictory ++;
				}
			}
			
			/*--------------------------------------------------------------------------------------*/	
			/* KEEPS USER FROM CLICKING MORE THAN 5 OPTIONS */
			function KeepCount() {

					var NewCount = 0

					if (document.movelist.m1.checked)
						{NewCount = NewCount + 1}

					if (document.movelist.m2.checked)
						{NewCount = NewCount + 1}

					if (document.movelist.m3.checked)
						{NewCount = NewCount + 1}

					if (document.movelist.m4.checked)
						{NewCount = NewCount + 1}

					if (document.movelist.m5.checked)
						{NewCount = NewCount + 1}
							
					if (document.movelist.m6.checked)
						{NewCount = NewCount + 1}
						
					if (document.movelist.m7.checked)
						{NewCount = NewCount + 1}
							
					if (document.movelist.m8.checked)
						{NewCount = NewCount + 1}
								
					if (document.movelist.m9.checked)
						{NewCount = NewCount + 1}
									
					if (document.movelist.m10.checked)
						{NewCount = NewCount + 1}
										
					if (document.movelist.m11.checked)
						{NewCount = NewCount + 1}	
											
					if (NewCount == 6) {
						alert('Pick Up Five.')
						document.movelist; 
						return false;
					}
					
	
			}
