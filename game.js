var choice = ["Rock", "Paper", "Scissors"];
var wins = 0;
var losses = 0;
var ties = 0;
var userTotal = 0;
var rockCount = 0;
var paperCount = 0;
var scissorsCount = 0;

function rockChoice() {
	document.getElementById('userChoice').innerHTML = choice[0];
}

function paperChoice() {
	document.getElementById('userChoice').innerHTML = choice[1];
}

function scissorsChoice() {
	document.getElementById('userChoice').innerHTML = choice[2];
}

function play(){
	var arrayVal = Math.floor(Math.random()*3);
	
	document.getElementById('cpuChoice').innerHTML = choice[arrayVal];
	document.getElementById('cpuSelection').innerHTML = choice[arrayVal];
	
	if(document.getElementById('Rock').checked){
		if(choice[arrayVal] == choice[0]){
			tie();
		} else if(choice[arrayVal] == choice[1]){
			lose();
		} else if(choice[arrayVal] == choice[2]){
			win();
		}
	}
	
	if(document.getElementById('Paper').checked){
		if(choice[arrayVal] == choice[0]){
			win();
		} else if(choice[arrayVal] == choice[1]){
			tie();
		} else if(choice[arrayVal] == choice[2]){
			lose();
		}
	}
	
	if(document.getElementById('Scissors').checked){
		if(choice[arrayVal] == choice[0]){
			lose();
		} else if(choice[arrayVal] == choice[1]){
			win();
		} else if(choice[arrayVal] == choice[2]){
			tie();
		}
	}
	
	if(arrayVal == 0){
		rockCount++;
		document.getElementById('totalRock').innerHTML = rockCount;
	}
	
	if(arrayVal == 1){
		paperCount++;
		document.getElementById('totalPaper').innerHTML = paperCount;
	}
	
	if(arrayVal == 2){
		scissorsCount++;
		document.getElementById('totalScissors').innerHTML = scissorsCount;
	}
	
	userTotal++;
	document.getElementById('total').innerHTML = userTotal;
	
}

function win(){
	wins++;
	document.getElementById('wins').innerHTML = wins;
}

function lose(){
	losses++;
	document.getElementById('losses').innerHTML = losses;
}

function tie(){
	ties++;
	document.getElementById('ties').innerHTML = ties;
}

