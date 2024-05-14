//8 ball

//HTML Variables
let magicBtnEl = document.getElementById("ball-img");
let quesInEl = document.getElementById("ques-input");
let outputEl = document.getElementById("output");

//Event Listener
magicBtnEl.addEventListener("click", answerQues);

//fucntion

function answerQues() {
  let rand = Math.random();
  let ques = quesInEl.value;
  ques = ques.toLowerCase();

  if (ques == "") {
    outputEl.innerHTML = "Please ask a question...";
  } else if (
    ques == "does this actually work?" ||
    ques == "does this really work?" ||
    ques == "is this real?"
  ) {
    outputEl.innerHTML = "Yes, ask another question.";
  } else if (ques == "is magic real?") {
    outputEl.innerHTML = "Of course! That's how I work.";
  } else if (rand < 0.2) {
    outputEl.innerHTML = "Without a Doubt.";
  } else if (rand < 0.4) {
    outputEl.innerHTML = "As I see it, yes.";
  } else if (rand < 0.6) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (rand < 0.8) {
    outputEl.innerHTML = "Don't count on it.";
  } else {
    outputEl.innerHTML = "Outlook not so good.";
  }
}
