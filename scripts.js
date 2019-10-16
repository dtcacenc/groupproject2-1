let questions = [
	{question:"Mark has one apple",
		   value:1},
	{question:"Jon has two oranges",
		   value:2},
	{question:"Kyle has three bananas",
		   value:3},
   {question:"Dr. Cameron has 47 students in CSC498",
		  value:498}
		];
var questionsLeft = questions.length;
var score = 0;



function nextQuestion(){
	if(questionsLeft>0){
		//if last question, change "Next Question" to "Get Final Score!"
		if(questionsLeft==1){document.getElementById("next-question").innerHTML="Get Final Score!";}
		var q1 = questionsLeft;
		var q2 = questionsLeft-1;
		//load questions from questions array
		document.getElementById("left-subject").innerHTML=questions[q1].question;
		document.getElementById("right-subject").innerHTML=questions[q2].question;
		//set value of HTML elements based on relative value
		if(questions[q1].value > questions[q2].value){
			document.getElementById("left-button").attribute="greater";
			document.getElementById("right-button").attribute="smaller";
		} else {
			document.getElementById("left-button").attribute="smaller";
			document.getElementById("right-button").attribute="greater";
		}
	}
	
	if (questionsLeft<=0){
		alert('Congratulations! You\'ve reached a score of: ' + score 
					+'! \nYou should be proud of yourself!');
	}
}



function eval(input) {
	if(input=='greater'){
		score = score + 1;
	}
	
	//decrement questionsLeft
	questionsLeft--;
	
	//update score and reset attributes
	document.getElementById("score").innerHTML="SCORE: " + score;
	document.getElementById("left-button").attribute="";
	document.getElementById("right-button").attribute="";
}


