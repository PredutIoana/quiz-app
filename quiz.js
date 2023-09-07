const quizData = [
    {
        question: 'Cat de tare se enerveaza Pres atunci cand o pui sa repete ceva?',
        a:'foarte tare',
        b:'nuj cum mai traiesti',
        c:'pofTIM',
        correct: 'b'
    }, {
         question: 'Ce vrea sa faca pres cu viata ei??',
         a: 'nici ea nu stie',
         b: 'dracu stie',
         c: 'cel mai bun streamer intergalctic',
         correct: 'c'
    }, {
        question: 'De ce nu doarme pres noaptea?',
        a: 'joaca table cu slanderman',
        b: 'se gandeste la nemurirea sufletului',
        c: 'tre sa stea pana la 12 noaptea sa ia saorma de la sobo',
        correcr: 'c'
    }, {
        question: 'Care e cel mai mare adversar de temut al lui pres?',
        a: 'LOtto',
        b: 'Pres',
        c: 'nimeni pentru ca e cea mai tare zeita greco-romana ',
        correct: 'b'
    }
];


let questionE1 = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let submitBtn = document.getElementById('submit');

let currentQuiz = 0;


loadQuiz();



function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;



    

}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
      }  else { 

        alert(" bravo fa");

    
    }
});

