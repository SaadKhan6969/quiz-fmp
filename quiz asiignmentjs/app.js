 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBca2QZqtQ626zAOxG2sEsgPLTGJIdIavU",
   authDomain: "quiz-fmp.firebaseapp.com",
   projectId: "quiz-fmp",
   storageBucket: "quiz-fmp.appspot.com",
   messagingSenderId: "650017544710",
   appId: "1:650017544710:web:9d40496034c92602058187",
   measurementId: "G-1J6TDBWZS9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database=getDatabase()
















var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var main = document.getElementById("main");
var indexNum = 0;
var marks = 0;

var namest = prompt('Enter Name')

var questions = [
    {
      numb: 1,
      question: "What does HTML stands for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stands for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
    {
      numb: 6,
      question: "What is Used For Making Structure?",
      answer: "Html",
      options: [
        "Html",
        "css",
        "js",
        "python",
      ],
    },
    {
      numb: 7,
      question: "What is Used For Making Design?",
      answer: "Css",
      options: [
        "Html",
        "Css",
        "js",
        "python",
      ],
    },
    {
      numb: 8,
      question: "What is Used For Functionality?",
      answer: "js",
      options: [
        "Html",
        "Css",
        "js",
        "python",
      ],
    },
      

  ];



  
  function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Question # " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++) {
      ansParent.innerHTML += `<div class="col-md-6 py-2">
      <button onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-primary px-5 rounded-pill w-50">
      ${questions[indexNum].options[i]}
      </button>
  </div>`;
    }
  }
  showQuestion();
  
  function nextQuestion() {
    indexNum++
    showQuestion();
}
  
  window.checkAns = function (a, b) {
    if (a == b) {
     
      var number = marks++
    }
    if(indexNum + 1 == questions.length) {
      main.innerHTML = `Hi ${namest}, your Marks are: ${marks}/8`

      let obj ={
        name: namest,
        score: marks,
      }
      obj.id = Math.random().toString().slice(2)
      const refernce = ref(database, `Quizz_Score/${obj.id}`)
      set(refernce,obj)
    }
    else{
    nextQuestion()

    }
  } 
  