function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Atlantic Ocean") {
		correct++;
}
	if (question2 == "True") {
		correct++;
}	
	if (question3 == "True") {
		correct++;
}
	if (question4 == "True") {
		correct++;		
	}
	
	var pictures = ["youwin.gif", "ok.gif", "youlose.gif"];
	var messages = ["Great job!", "That's okay", "Not good"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
	if (correct == 3) {
		score = 0;
	}

	var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 0;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

$('#js-startTimer').click(function () {
  $('.js-timeout').text("1:00");
  countdown();
});

$('#js-resetTimer').click(function () {
  $('.js-timeout').text("1:00");
  clearInterval(interval);
});
}