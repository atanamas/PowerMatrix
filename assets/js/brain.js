function recommendation(){
	
	disableFields();
	
	var current = document.forms["powerCalculator"]["current"].value;
	var numRadio = document.forms["powerCalculator"]["radio_added"].value;
	
	var currentRadio = 5;
	
	var powerPlant = document.forms["powerCalculator"]["PowerPlant"].value;
	var power = 54 * current * 1.2;
	var rectifier = Math.ceil(power/powerPlant)+1;
		
	var messageRectifier = document.getElementById("rectifier")	
	messageRectifier.innerHTML="";
	
	//ALPHA Power Plant
	//650W and 1200W Power Plant full shelf
	if((powerPlant<=1200) && (rectifier>4)){
		messageRectifier.innerHTML="Power plant needs to be upgraded<br />";
	}
	
	//1.8kW and 2kW Power Plant add second shelf
	if((powerPlant>=1800) && (powerPlant<=2000) && (rectifier>4) && (rectifier<=8)){		
		messageRectifier.innerHTML="Power plant needs rectifer expansion shelf<br />";
	} else if(rectifier>8){
		messageRectifier.innerHTML="Power plant needs to be upgraded<br />";
	}
	

	//ELTEK Power Plant
	if((powerPlant=1801) && (rectifier>6)){
		messageRectifier.innerHTML="Power plant needs to be upgraded<br />";
	} else {
		messageRectifier.innerHTML="";
	}

	
	
	messageRectifier.innerHTML+="Number of rectifier required: ".concat(rectifier);
	
	setVisibility('display', 'block');
	return false;
}

function setVisibility(id, visibility) {
	document.getElementById(id).style.display = visibility;
}

function disableFields(){
	
}