// TODO: Somehow most of the questions are being skipped by pressing the button & the button
// doesn't change to "Next questions" & No alert after clicking answers

let questionAmount = document.getElementById("question-amount").innerHTML
let questionHeader = document.getElementById("header")
let answers = document.getElementById("answers")
const button = document.getElementById("button")
const questions = [
    // Easy Questions
    {
      question: "Which of the following is a storage device?",
      answers: ["Mouse", "Keyboard", "Monitor", "Hard disk"],
      correctAnswer: 3
    },
    {
      question: "What does CPU stand for?",
      answers: ["Central Power Unit", "Central Processing Unit", "Central Print Unit", "Central Point Unit"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is an example of an operating system?",
      answers: ["Photoshop", "Windows", "BIOS", "Microsoft Word"],
      correctAnswer: 1
    },
    {
      question: "Which of these is used to connect to the internet?",
      answers: ["Router", "Monitor", "Printer", "Keyboard"],
      correctAnswer: 0
    },
    {
      question: "What is the main function of RAM in a computer?",
      answers: ["To store data temporarily", "To perform calculations", "To control peripherals", "To store data permanently"],
      correctAnswer: 0
    },
    {
      question: "What is the basic unit of data in computing?",
      answers: ["Kilobyte", "Byte", "Bit", "Megabyte"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is an example of a web browser?",
      answers: ["Google Chrome", "PowerPoint", "Windows", "Excel"],
      correctAnswer: 0
    },
    {
      question: "Which file extension is commonly used for Microsoft Word documents?",
      answers: [".jpeg", ".mp3", ".docx", ".exe"],
      correctAnswer: 2
    },
  
    // Mid-Level Questions
    {
      question: "Which protocol is used to send emails?",
      answers: ["FTP", "HTTP", "TCP", "SMTP"],
      correctAnswer: 3
    },
    {
      question: "What does SQL stand for?",
      answers: ["Simple Query Language", "Structured Query Language", "Standard Query Language", "Server Query Language"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a relational database management system?",
      answers: ["MongoDB", "Redis", "MySQL", "Cassandra"],
      correctAnswer: 2
    },
    {
      question: "What is the purpose of DNS in networking?",
      answers: ["To encrypt data", "To filter network traffic", "To resolve domain names to IP addresses", "To assign IP addresses to devices"],
      correctAnswer: 2
    },
    {
      question: "Which programming language is primarily used for Android app development?",
      answers: ["Python", "Java", "Swift", "C++"],
      correctAnswer: 1
    },
    {
      question: "What is the function of a firewall?",
      answers: ["To manage memory", "To store large amounts of data", "To protect against unauthorized access", "To increase processing speed"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a version control system?",
      answers: ["Git", "Docker", "Jenkins", "Kubernetes"],
      correctAnswer: 0
    },
  
    // Hard Questions
    {
      question: "What is the time complexity of binary search?",
      answers: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
      correctAnswer: 2
    },
    {
      question: "Which algorithm is commonly used for sorting data in ascending order?",
      answers: ["QuickSort", "BFS", "DFS", "Hashing"],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the OSI model in networking?",
      answers: ["To standardize networking protocols", "To improve network speed", "To encrypt network traffic", "To provide IP addresses"],
      correctAnswer: 0
    },
    {
      question: "What is the main difference between symmetric and asymmetric encryption?",
      answers: ["Symmetric uses one key, asymmetric uses two keys", "Symmetric is faster, asymmetric is slower", "Symmetric is for data, asymmetric is for encryption", "Symmetric is outdated, asymmetric is modern"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is a NoSQL database?",
      answers: ["PostgreSQL", "SQLite", "MySQL", "MongoDB"],
      correctAnswer: 3
    }
]

const header = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7",
    "Question 8",
    "Question 9",
    "Question 10",
    "Question 11",
    "Question 12",
    "Question 13",
    "Question 14",
    "Question 15",
    "Question 16",
    "Question 17",
    "Question 18",
    "Question 19",
    "Question 20"
]

let counter = -1

function onButtonChange() {
  counter++

  if(counter < questions.length) {
    const questionObj = questions[counter]
    document.getElementById("header").textContent = header[counter]

    answers.innerHTML = ""

    document.getElementById("questions").textContent = questionObj.question

    questionObj.answers.forEach((answer, index) => {
      const li = document.createElement("li")
      li.textContent = answer
      li.dataset.index = index
      li.onclick = () => checkAnswer(index, questionObj,correctAnswer)
      answers.appendChild(li)
    }
  )
  

  function checkAnswer(selectedIndex, correctIndex){
    if(selectedIndex === correctIndex){
      alert("Correct!")
    } else {
      alert("Wrong! Try again.")
    }
  }
  document.getElementById("start").addEventListener("click", () => {
    if(counter === -1) {
      document.getElementById("start").textContent = "Next question"
    }

    onButtonChange()
  })
}}