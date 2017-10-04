var breakNumber = 5;
var sessionNumber = 25;
var seconds = 59
var minutes = 25;
var flag = 1;
var rotation = 1;
var myTimer = "";
var statusBox = document.querySelector("#box2");
var sessionStatus = document.querySelector("#sessionStatus");
var minute = document.querySelector("#min");
var second = document.querySelector("#second");
var breakMin = document.querySelector("#breakMin");
var breakNum = document.querySelector("#breakNum");
var breakPlus = document.querySelector("#breakPlus");
var sessMin = document.querySelector("#sessMin");
var sessNum = document.querySelector("#sessNum");
var sessPlus = document.querySelector("#sessPlus");

statusBox.addEventListener("click", function() {
	if (flag === 1) {
		statusBox.style.background = ("#6ac1b0");
		return timer(sessionNumber);
	} else if (flag === 0) {
		return resetTimer();
	}
});
breakMin.addEventListener("click", function() {
	if (breakNumber > 1 && flag === 1) {
		breakNumber-=1;
		breakNum.textContent = " " + breakNumber + " ";
	}
});
breakPlus.addEventListener("click", function() {
	if (flag === 1) {
		breakNumber+=1;
		breakNum.textContent = " " + breakNumber + " ";
	}
});
sessMin.addEventListener("click", function() {
	if (sessionNumber > 1 && flag === 1) {
		sessionNumber-=1;
		sessNum.textContent = " " + sessionNumber + " ";
		minute.textContent = sessionNumber 
	}	
});
sessPlus.addEventListener("click", function() {
	if (flag === 1) {
		sessionNumber+=1;
		sessNum.textContent = " " + sessionNumber + " ";
		minute.textContent = sessionNumber;
	}
});


function timer(status) {
	flag = 0;
	myTimer = setInterval(function() {
		minute.textContent = status - 1;
		if (status > 0) {
			if (status=== 1) {
				minute.textContent = "00";
			}
			if (seconds === 0) {
				second.textContent = ("0" + seconds).slice(-2);
				status = status - 1
				minute.textContent = status;
				seconds = 59; 
			} else if (seconds < 10) {
				second.textContent = ("0" + seconds).slice(-2);
				seconds = seconds -1;
			} else if (seconds >= 10) {
				second.textContent = seconds;
				seconds = seconds -1;
			}
		} else {
			return breakTimer();
		}
	},1000);

	return myTimer
} 
			
function breakTimer() {
	clearInterval(myTimer)
	if (rotation === 1) {
		statusBox.style.background = ("#dd1f51");
		sessionStatus.textContent = "BREAK";
		minute.textContent = breakNumber;
		second.textContent = "00";
		rotation = rotation - 1;
		timer(breakNumber);
	} else {
		sessionStatus.textContent = "RESET?";
		minute.textContent = "00";
		rotation = 1;
	}	
}

function resetTimer() {
	clearInterval(myTimer);
	statusBox.style.background = ("#afa86e");
	seconds = 59;
	sessionStatus.textContent = "SESSION";
	minute.textContent = sessionNumber;
	second.textContent = "00";
	flag = 1;
}







