// Define variable quiz to be loaded onto the page
var quiz = $("<div></div>");
var questionDiv = $("<div></div>").addClass("questionDiv");

// 	.append(radioButton);

var questionHeader = $("<h3></h3>");
// var radioButton = $("<div></div>").addClass("custom-control custom-radio");
// .append(input, label);
// var input = $("<input>")
// 	.attr("type", "radio")
// 	.addClass("custom-control-input")
// 	.attr("id", "")
// 	.attr("name", "");
// var label = $("<label></label>").addClass("custom-control-label");
// .attr("for", "");

var rockLee = "Who is known for his taijutsu prowess?";
var questionCounter = 0;

// array of possible questions and answers
var questions = [
	// (shikamaru = {
	// 	question:
	// 		"Which leaf village shinobi is best known for inelligence and strategic thinking?",
	// 	choice1: "Rock Lee",
	// 	choice2: "Kakashi Hatake",
	// 	choice3: "Shikamaru Nara",
	// 	choice4: "Obito Uchiha"
	// }),
	(shikamaru = [
		"shikamaru",
		"Which leaf village shinobi is best known for inelligence and strategic thinking?",
		"Rock Lee",
		"Kakashi Hatake",
		"Shikamaru Nara",
		"Obito Uchiha"
	])
];
console.log(questions);
// Generates a button to start the game
$(document).ready(function() {
	$("#startBtn").on("click", function() {
		this.remove();
		$("#gameField").append(quiz);

		// for each question, generate a div on screen with options & radio buttons
		renderGame();
	});
	function renderGame() {
		for (let i = 0; i < questions.length; i++) {
			console.log(questions[i]);
			quiz.append(questionDiv);
			questionDiv.prepend(questionHeader);
			var q = questions[i];
			questionHeader.html(q[1]);

			for (let j = 2; j < q.length; j++) {
				var inputID = q[0];
				var input = $("<input>")
					.addClass("custom-control-input")
					.attr("type", "radio")
					.attr("name", inputID);
				var label = $("<label></label>")
					.addClass("custom-control-label")
					.attr("for", inputID)
					.html(q[j]);
				var radioButton = $("<div></div>");
				radioButton
					.addClass("custom-control custom-radio")
					.append(input, label);
				questionDiv.append(radioButton);
			}
		}
	}
});
