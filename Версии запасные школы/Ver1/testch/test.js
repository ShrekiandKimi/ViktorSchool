// Переменные для отслеживания состояния теста
let currentTest = 0;
let currentTask = 1;
let userAnswers = {};
let correctAnswers = {
  1: "В",
  2: "В",
  3: "В",
};

// Начать тест
function startTest(testNumber) {
  currentTest = testNumber;
  document.querySelector(".variants-container").style.display = "none";
  document.getElementById("test-container").style.display = "block";
  document.getElementById("task-1").style.display = "block";
  currentTask = 1;
  userAnswers = {};
}

// Выбор варианта ответа
function selectOption(element) {
  // Сбросить выделение у всех вариантов в этом задании
  const options = element.parentElement.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));

  // Выделить выбранный вариант
  element.classList.add("selected");

  // Сохранить ответ пользователя
  userAnswers[currentTask] = element.textContent.charAt(0);
}

// Переход к следующему заданию
function nextTask() {
  // Проверить, что ответ выбран
  const selected = document.querySelector(
    `#task-${currentTask} .option.selected`
  );
  if (!selected) {
    alert("Пожалуйста, выберите ответ!");
    return;
  }

  // Скрыть текущее задание
  document.getElementById(`task-${currentTask}`).style.display = "none";
  currentTask++;

  // Если задания закончились - показать результаты
  if (currentTask > 3) {
    showResults();
    return;
  }

  // Показать следующее задание
  document.getElementById(`task-${currentTask}`).style.display = "block";
}

// Переход к предыдущему заданию
function prevTask() {
  if (currentTask <= 1) return;

  // Скрыть текущее задание
  document.getElementById(`task-${currentTask}`).style.display = "none";
  currentTask--;

  // Показать предыдущее задание
  document.getElementById(`task-${currentTask}`).style.display = "block";
}

// Показать результаты теста
function showResults() {
  document.getElementById("test-container").style.display = "none";
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";

  // Рассчитать результаты
  let correctCount = 0;
  let totalPoints = 0;

  for (let i = 1; i <= 3; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      correctCount++;
      totalPoints++;
    }
  }

  // Обновить данные на странице
  document.getElementById("correct-answers").textContent = correctCount;
  document.getElementById("total-points").textContent = totalPoints;
  document.getElementById("final-score").textContent = totalPoints;

  // Установить ширину прогресс-бара
  const progress = (correctCount / 3) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;

  // Показать текстовый результат
  const resultText = document.getElementById("result-text");
  if (correctCount === 3) {
    resultText.textContent = "Отличный результат! Вы готовы к экзамену!";
    resultText.style.color = "#1abc9c";
  } else if (correctCount >= 2) {
    resultText.textContent = "Хороший результат! Продолжайте тренироваться!";
    resultText.style.color = "#3498db";
  } else {
    resultText.textContent = "Попробуйте еще раз! Обратите внимание на теорию.";
    resultText.style.color = "#e74c3c";
  }
}

// Начать тест заново
function restartTest() {
  document.getElementById("result-container").style.display = "none";
  document.querySelector(".variants-container").style.display = "grid";
  currentTask = 1;
  userAnswers = {};
}
