const quizData = [
    {
        question: "1. Kolik slabik má slovo: Magdaléna.",
        a: "3",
        b: "4",
        
        correct: "b",
    },
    {
      question: "2. Jaký den je mezi sobotou a pondělím?",
      a: "pátek",
      b: "neděle",
      
      correct: "b",
  },
  {
    question: "3. Obrázky do knížek kreslí:",
    a: "sochař",
    b: "ilustrátor",
    
    correct: "b",
},
{
  question: "4. Leden následuje hned za:",
  a: "prosincem",
  b: "dubnem",
  
  correct: "a",
},{
  question: "5. Sestra maminky je:",
  a: "teta",
  b: "snacha",
  
  correct: "a",
},
{
question: "6. Mládětem kravičky je:",
a: "jehňátko",
b: "telátko",

correct: "b",
},{
  question: "7. Samice od koně je:",
  a: "mulice",
  b: "kobyla",
  
  correct: "b",
},
{
question: "8. Kulatý tvar má ",
a: "koule",
b: "kostka",

correct: "a",
},{
  question: "9. Klavír je hudební nástroj:",
  a: "strunový",
  b: "klávesový",
  
  correct: "b",
},
{
question: "10. Ukolébavka slouží k:",
a: "uspávaní dětí",
b: "tanečnímu doprovodu na svatbě",

correct: "a",
},{
  question: "11. Velikonoce jsou:",
  a: "na jaře",
  b: "na podzim",
  
  correct: "a",
},
{
question: "12. Mezi teplé barvy patří:",
a: "červená",
b: "modrá",

correct: "a",
},{
  question: "13. Chuťové pohárky najdeme na:",
  a: "jazyku",
  b: "uchu",
  
  correct: "a",
},
{
question: "14. Srdce je sval sloužící k pumpování:",
a: "krve",
b: "mléka",

correct: "a",
},{
  question: "15. Medvěd patří mezi:",
  a: "lesní zvířata",
  b: "mořská zvířata",
  
  correct: "a",
},
{
question: "16. Veterinář ošetřuje a léčí:",
a: "zvířata",
b: "lidi",

correct: "a",
},{
  question: "17. Vyber nakažlivou (infekční) nemoc:",
  a: "neštovice",
  b: "vysoký krevní tlak",
  
  correct: "a",
},
{
question: "18. V knížkach je písmo:",
a: "psané",
b: "tištěné",

correct: "b",
},{
  question: "19. Písmeno A je:",
  a: "souhláska",
  b: "spoluhláska",
  
  correct: "a",
},
{
question: "20. V kuchyni se:",
a: "vaří a připravuje jídlo.",
b: "spí.",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })