const container = document.getElementById("quizContainer");
let answers = {};
function loadQuiz() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(quizQuestions);
    }, 1000);
  });
}
async function renderQuiz() {
  const data = await loadQuiz();
  document.getElementById("loading").style.display = "none";
  data.forEach((q, index) => {
    container.innerHTML += `
      <div class="card p-3 mb-3 shadow-sm">
        <h5>${q.question}</h5>
        ${q.options.map((o, i) => `
          <label>
            <input type="radio"
                   name="q${index}"
                   value="${i}"
                   onchange="saveAnswer(${index},${i})">
            ${o}
          </label><br>
        `).join("")}
      </div>
    `;
  });
}
function saveAnswer(q, a) {
  answers[q] = a;
}
function submitQuiz() {
  if (Object.keys(answers).length < quizQuestions.length) {
    alert("Please answer all questions");
    return;
  }
  let score = 0;
  quizQuestions.forEach((q, i) => {
    if (answers[i] == q.answer) score++;
  });
  let percent = (score / quizQuestions.length) * 100;
  let grade;
  if (percent >= 80) grade = "A";
  else if (percent >= 60) grade = "B";
  else grade = "C";
  let message;
  switch (grade) {
    case "A":
      message = "Excellent";
      break;
    case "B":
      message = "Good";
      break;
    default:
      message = "Practice more";
  }
  document.getElementById("result").innerText =
  `Score: ${score} | ${percent}% | Grade: ${grade} | ${message}`;
    localStorage.setItem("score", percent + "%");
    let completed = JSON.parse(localStorage.getItem("completed")) || [];

courses.forEach(c => {
  if (!completed.includes(c.name)) {
    completed.push(c.name);
  }
});

localStorage.setItem("completed", JSON.stringify(completed));
}
renderQuiz();
