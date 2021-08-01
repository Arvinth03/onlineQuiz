
const quizData = [
  {
      question: "1. What does HTML stands for?",
      a: "Hyper Text Markup Language",
      b: "Holistick Technical Method Library",
      c: "Hyper Tax Makes Line",
      d: "None of the above",
      correct: "a",
  },
  {
      question: "2. What does css stands for?",
      a:"Color Style Sheets",
      b:"Cascade Sheets Style",
      c:"Cascade Style Sheet",
      d:"Cascading Style Sheets",
      correct: "d",
  },
  {
      question: "3. Inside which HTML element do we put the JavaScript??",
      a: "<script>",
      b: "<javascript>",
      c: "<js>",
      d: "<scripting>",
      correct: "a",
  },
  {
      question: "4. What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
  {
    question: "5. The correct place to insert a JavaScript is ?",
    a:"The section",
    b:"The section",
    c:"Both 1 & 2",
    d:"none of these",
    correct: "c",
  }
];
const answerEls = document.querySelectorAll(".answer");
const question=document.getElementById("ques");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const subbtn= document.getElementById('subone');
const prevbtn= document.getElementById('prevone');


let qCount=0;
let score = 0;

loadQuestion();

function loadQuestion() {
  deselectAnswers();

const qlist= quizData[qCount];

question.innerText=qlist.question;
option1.innerText=qlist.a;
option2.innerText=qlist.b;
option3.innerText=qlist.c;
option4.innerText=qlist.d;
}  

prevbtn.addEventListener("click", () => {
  qCount--;
loadQuestion();

      score--;
});


function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
      answerEl.checked = false;
  });
}

subbtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[qCount].correct) {
          score++;
      }
      qCount++;
      if (qCount < quizData.length) {
          loadQuestion();
      } else {
          quiz.innerHTML = `
              <h2 style="margin-left:530px; margin-bottom:20px;"> Your Score= ${score}/${quizData.length}.</h2>
              <br>
              <div style= "margin-left:610px;">
              <button class="btn btn-primary" onclick="location.reload()">Reload </button>
              </div>
              <br>
              <h6 style="margin-left:500px;">To Take Test Again.(Press the Above Buton)</h6>
              
          `;
      }
  }
});


var sec= 300,
countDiv    = document.getElementById("timer"),
secpass,
countDown   = setInterval(function () {
   secpass();
}, 1000);

function secpass() {
var min     = Math.floor(sec / 60),
    remSec  = sec % 60;
if (remSec < 10) {
    remSec = '0' + remSec;
}
if (min < 10) {
   min = '0' + min;
}
countDiv.innerHTML = min + ":" + remSec;
if (sec > 0) {
    sec = sec - 1;
 } else {
   clearInterval(countDown);
   countDiv.innerHTML = 'Time Out';
 }
}




 


 

