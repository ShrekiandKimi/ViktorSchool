// Структура данных для тестов
const testsData = {
  1: [
    {
      number: 1,
      points: 1,
      image: "v1z1.png",
      options: [
        { id: "A", text: "3517" },
        { id: "B", text: "4224" },
        { id: "C", text: "1324" },
        { id: "D", text: "2117" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v1z2.png",
      options: [
        { id: "A", text: "642" },
        { id: "B", text: "1240" },
        { id: "C", text: "500" },
        { id: "D", text: "243" },
      ],
      correct: "C",
    },
    {
      number: 3,
      points: 1,
      image: "v1z3.png",
      options: [
        { id: "A", text: "8" },
        { id: "B", text: "2" },
        { id: "C", text: "4" },
        { id: "D", text: "11" },
      ],
      correct: "C",
    },
    {
      number: 4,
      points: 1,
      image: "v1z4.png",
      options: [
        { id: "A", text: "821" },
        { id: "B", text: "1210" },
        { id: "C", text: "500" },
        { id: "D", text: "152" },
      ],
      correct: "C",
    },
    {
      number: 5,
      points: 1,
      image: "v1z5.png",
      options: [
        { id: "A", text: "821" },
        { id: "B", text: "921" },
        { id: "C", text: "129" },
        { id: "D", text: "672" },
      ],
      correct: "D",
    },
  ],
  2: [
    {
      number: 1,
      points: 1,
      image: "v2z1.png",
      options: [
        { id: "A", text: "312" },
        { id: "B", text: "123" },
        { id: "C", text: "231" },
        { id: "D", text: "321" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v2z2.png",
      options: [
        { id: "A", text: "15,4" },
        { id: "B", text: "11,5" },
        { id: "C", text: "32,1" },
        { id: "D", text: "21,2" },
      ],
      correct: "B",
    },
    {
      number: 3,
      points: 1,
      image: "v2z3.png",
      options: [
        { id: "A", text: "11500" },
        { id: "B", text: "21211" },
        { id: "C", text: "17900" },
        { id: "D", text: "22300" },
      ],
      correct: "D",
    },
    {
      number: 4,
      points: 1,
      image: "v2z4.png",
      options: [
        { id: "A", text: "17550" },
        { id: "B", text: "12200" },
        { id: "C", text: "17900" },
        { id: "D", text: "23050" },
      ],
      correct: "A",
    },
    {
      number: 5,
      points: 1,
      image: "v2z5.png",
      options: [
        { id: "A", text: "52" },
        { id: "B", text: "48" },
        { id: "C", text: "50" },
        { id: "D", text: "45" },
      ],
      correct: "C",
    },
  ],
  3: [
    {
      number: 1,
      points: 1,
      image: "v3z1.png",
      options: [
        { id: "A", text: "1236" },
        { id: "B", text: "6321" },
        { id: "C", text: "1326" },
        { id: "D", text: "5324" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v3z2.png",
      options: [
        { id: "A", text: "32" },
        { id: "B", text: "64" },
        { id: "C", text: "16" },
        { id: "D", text: "54" },
      ],
      correct: "D",
    },
    {
      number: 3,
      points: 1,
      image: "v3z3.png",
      options: [
        { id: "A", text: "4" },
        { id: "B", text: "6" },
        { id: "C", text: "3" },
        { id: "D", text: "8" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v3z4.png",
      options: [
        { id: "A", text: "2" },
        { id: "B", text: "3,5" },
        { id: "C", text: "2,25" },
        { id: "D", text: "1,75" },
      ],
      correct: "D",
    },
    {
      number: 5,
      points: 1,
      image: "v3z5.png",
      options: [
        { id: "A", text: "1600" },
        { id: "B", text: "2500" },
        { id: "C", text: "2000" },
        { id: "D", text: "1700" },
      ],
      correct: "C",
    },
  ],
  4: [
    {
      number: 1,
      points: 1,
      image: "v4z1.png",
      options: [
        { id: "A", text: "3421" },
        { id: "B", text: "3241" },
        { id: "C", text: "2431" },
        { id: "D", text: "1423" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v4z2.png",
      options: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "2" },
        { id: "D", text: "4" },
      ],
      correct: "C",
    },
    {
      number: 3,
      points: 1,
      image: "v4z3.png",
      options: [
        { id: "A", text: "312,5" },
        {
          id: "B",
          text: "311,85 (если что это тоже правильный ответ (но нужно найти другой)",
        },
        { id: "C", text: "282,12" },
        { id: "D", text: "311,15" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v4z4.png",
      options: [
        { id: "A", text: "60" },
        { id: "B", text: "55" },
        { id: "C", text: "70" },
        { id: "D", text: "75" },
      ],
      correct: "C",
    },
    {
      number: 5,
      points: 1,
      image: "v4z5.png",
      options: [
        { id: "A", text: "22" },
        { id: "B", text: "38" },
        { id: "C", text: "17" },
        { id: "D", text: "21" },
      ],
      correct: "D",
    },
  ],
  5: [
    {
      number: 1,
      points: 1,
      image: "v5z1.png",
      options: [
        { id: "A", text: "2643" },
        { id: "B", text: "6243" },
        { id: "C", text: "2463" },
        { id: "D", text: "3452" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v5z2.png",
      options: [
        { id: "A", text: "64" },
        { id: "B", text: "55" },
        { id: "C", text: "68" },
        { id: "D", text: "71" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v5z3.png",
      options: [
        { id: "A", text: "625" },
        {
          id: "B",
          text: "611,5",
        },
        { id: "C", text: "590" },
        { id: "D", text: "725,5" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v5z4.png",
      options: [
        { id: "A", text: "25" },
        { id: "B", text: "30" },
        { id: "C", text: "24" },
        { id: "D", text: "27" },
      ],
      correct: "D",
    },
    {
      number: 5,
      points: 1,
      image: "v5z5.png",
      options: [
        { id: "A", text: "2100" },
        { id: "B", text: "2800" },
        { id: "C", text: "2556" },
        { id: "D", text: "2452" },
      ],
      correct: "C",
    },
  ],
  6: [
    {
      number: 1,
      points: 1,
      image: "v6z1.png",
      options: [
        { id: "A", text: "324" },
        { id: "B", text: "432" },
        { id: "C", text: "423" },
        { id: "D", text: "142" },
      ],
      correct: "C",
    },
    {
      number: 2,
      points: 1,
      image: "v6z2.png",
      options: [
        { id: "A", text: "17" },
        { id: "B", text: "12" },
        { id: "C", text: "5" },
        { id: "D", text: "21" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v6z3.png",
      options: [
        { id: "A", text: "12" },
        {
          id: "B",
          text: "15",
        },
        { id: "C", text: "11,5" },
        { id: "D", text: "13" },
      ],
      correct: "D",
    },
    {
      number: 4,
      points: 1,
      image: "v6z4.png",
      options: [
        { id: "A", text: "65" },
        { id: "B", text: "85" },
        { id: "C", text: "80" },
        { id: "D", text: "73" },
      ],
      correct: "B",
    },
    {
      number: 5,
      points: 1,
      image: "v6z5.png",
      options: [
        { id: "A", text: "1331" },
        { id: "B", text: "1321" },
        { id: "C", text: "1272" },
        { id: "D", text: "1739" },
      ],
      correct: "C",
    },
  ],
  7: [
    {
      number: 1,
      points: 1,
      image: "v7z1.png",
      options: [
        { id: "A", text: "3642" },
        { id: "B", text: "2346" },
        { id: "C", text: "2643" },
        { id: "D", text: "4632" },
      ],
      correct: "B",
    },
    {
      number: 2,
      points: 1,
      image: "v7z2.png",
      options: [
        { id: "A", text: "19" },
        { id: "B", text: "47" },
        { id: "C", text: "51" },
        { id: "D", text: "32" },
      ],
      correct: "D",
    },
    {
      number: 3,
      points: 1,
      image: "v7z3.png",
      options: [
        { id: "A", text: "3,2" },
        {
          id: "B",
          text: "4,6",
        },
        { id: "C", text: "3,25" },
        { id: "D", text: "3" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v7z4.png",
      options: [
        { id: "A", text: "49" },
        { id: "B", text: "50" },
        { id: "C", text: "51" },
        { id: "D", text: "52 хайп" },
      ],
      correct: "B",
    },
    {
      number: 5,
      points: 1,
      image: "v7z5.png",
      options: [
        { id: "A", text: "820" },
        { id: "B", text: "760" },
        { id: "C", text: "790" },
        { id: "D", text: "910" },
      ],
      correct: "A",
    },
  ],
  8: [
    {
      number: 1,
      points: 1,
      image: "v8z1.png",
      options: [
        { id: "A", text: "2931" },
        { id: "B", text: "1221" },
        { id: "C", text: "2650" },
        { id: "D", text: "2440" },
      ],
      correct: "D",
    },
    {
      number: 2,
      points: 1,
      image: "v8z2.png",
      options: [
        { id: "A", text: "15,9" },
        { id: "B", text: "11,5" },
        { id: "C", text: "32,1" },
        { id: "D", text: "18,3" },
      ],
      correct: "D",
    },
    {
      number: 3,
      points: 1,
      image: "v8z3.png",
      options: [
        { id: "A", text: "1,6" },
        {
          id: "B",
          text: "3,2",
        },
        { id: "C", text: "1,72" },
        { id: "D", text: "2,12" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v8z4.png",
      options: [
        { id: "A", text: "120,5" },
        { id: "B", text: "137,8" },
        { id: "C", text: "116,2" },
        { id: "D", text: "121,3" },
      ],
      correct: "B",
    },
    {
      number: 5,
      points: 1,
      image: "v8z5.png",
      options: [
        { id: "A", text: "423O" },
        { id: "B", text: "3360" },
        { id: "C", text: "7210" },
        { id: "D", text: "9100" },
      ],
      correct: "B",
    },
  ],
  9: [
    {
      number: 1,
      points: 1,
      image: "v9z1.png",
      options: [
        { id: "A", text: "265" },
        { id: "B", text: "245" },
        { id: "C", text: "275" },
        { id: "D", text: "245" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v9z2.png",
      options: [
        { id: "A", text: "3,5" },
        { id: "B", text: "5,5" },
        { id: "C", text: "1,25" },
        { id: "D", text: "4,6" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v9z3.png",
      options: [
        { id: "A", text: "15,8" },
        {
          id: "B",
          text: "32,1",
        },
        { id: "C", text: "15" },
        { id: "D", text: "18" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v9z4.png",
      options: [
        { id: "A", text: "677,7" },
        { id: "B", text: "214,2" },
        { id: "C", text: "525,2" },
        { id: "D", text: "920,1" },
      ],
      correct: "A",
    },
    {
      number: 5,
      points: 1,
      image: "v9z5.png",
      options: [
        { id: "A", text: "2,75" },
        { id: "B", text: "2,7" },
        { id: "C", text: "2,4" },
        { id: "D", text: "2,45" },
      ],
      correct: "B",
    },
  ],
};

// Глобальные переменные
let currentTest = 0;
let currentTaskIndex = 0;
let userAnswers = {};

// Инициализация после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
  // Назначаем обработчик для кнопки "Далее"
  document.getElementById("next-btn").addEventListener("click", nextTask);
});

// Создать навигацию по заданиям
function createTasksNavigation() {
  const tasksNav = document.getElementById("tasks-nav");
  tasksNav.innerHTML = "";

  const test = testsData[currentTest];

  for (let i = 0; i < test.length; i++) {
    const tab = document.createElement("div");
    tab.className = "task-tab";
    tab.textContent = i + 1;
    tab.dataset.index = i;

    // Помечаем активный таб
    if (i === currentTaskIndex) {
      tab.classList.add("active");
    }

    // Помечаем отвеченные задания
    if (userAnswers[i] !== undefined) {
      tab.classList.add("answered");
    }

    tab.addEventListener("click", function () {
      goToTask(parseInt(this.dataset.index));
    });

    tasksNav.appendChild(tab);
  }
}

// Перейти к конкретному заданию
function goToTask(taskIndex) {
  currentTaskIndex = taskIndex;
  displayTask();
}

// Функция для отображения задания
function displayTask() {
  const task = testsData[currentTest][currentTaskIndex];
  const taskContainer = document.getElementById("task-container");

  // Генерация HTML для задания
  taskContainer.innerHTML = `
        <div class="task">
            <div class="task-header">
                <div class="task-number">${task.number}</div>
                <div class="task-points">${task.points} балл${
    task.points > 1 ? "а" : ""
  }</div>
            </div>
            <div class="task-question">
                ${
                  task.image
                    ? `<img src="${task.image}" alt="Задание ${task.number}" class="task-image">`
                    : `<p>${task.question}</p>`
                }
            </div>
            <div class="options">
                ${task.options
                  .map(
                    (opt) => `
                    <div class="option" onclick="selectOption(this, '${opt.id}')">
                        ${opt.id}) ${opt.text}
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  // Обновление кнопки "Назад"
  const prevButton = document.getElementById("prev-btn");
  if (currentTaskIndex === 0) {
    prevButton.textContent = "Вернуться";
    prevButton.onclick = returnToMenu;
  } else {
    prevButton.textContent = "Назад";
    prevButton.onclick = prevTask;
  }

  // Обновление кнопки "Далее"
  const nextButton = document.getElementById("next-btn");
  if (currentTaskIndex === testsData[currentTest].length - 1) {
    nextButton.textContent = "Завершить";
  } else {
    nextButton.textContent = "Далее";
  }

  // Восстановление выбранного ответа
  if (userAnswers[currentTaskIndex]) {
    const options = document.querySelectorAll(".option");
    options.forEach((opt) => {
      if (opt.textContent.startsWith(userAnswers[currentTaskIndex])) {
        opt.classList.add("selected");
      }
    });
  }

  // Обновляем навигацию
  createTasksNavigation();
}

// Начать тест
function startTest(testNumber) {
  currentTest = testNumber;
  currentTaskIndex = 0;
  userAnswers = {};

  document.getElementById("variants-container").style.display = "none";
  document.getElementById("test-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";

  displayTask();
}

// Выбор варианта ответа
function selectOption(element, optionId) {
  const options = element.parentElement.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));
  element.classList.add("selected");
  userAnswers[currentTaskIndex] = optionId;

  // Обновляем навигацию (отмечаем отвеченное задание)
  createTasksNavigation();
}

// Следующее задание
function nextTask() {
  // Если текущее задание последнее, показываем результаты
  if (currentTaskIndex === testsData[currentTest].length - 1) {
    showResults();
    return;
  }

  // Переходим к следующему заданию
  currentTaskIndex++;
  displayTask();
}

// Предыдущее задание
function prevTask() {
  if (currentTaskIndex > 0) {
    currentTaskIndex--;
    displayTask();
  }
}

// Вернуться в меню
function returnToMenu() {
  document.getElementById("test-container").style.display = "none";
  document.getElementById("variants-container").style.display = "grid";
}

// Показать результаты
function showResults() {
  const test = testsData[currentTest];
  let correctCount = 0;
  let totalPoints = 0;
  const maxPoints = test.reduce((sum, task) => sum + task.points, 0);

  // Проверяем ответы
  for (let i = 0; i < test.length; i++) {
    if (userAnswers[i] === test[i].correct) {
      correctCount++;
      totalPoints += test[i].points;
    }
  }

  // Обновляем результаты
  document.getElementById("correct-answers").textContent = correctCount;
  document.getElementById("total-tasks").textContent = test.length;
  document.getElementById("total-points").textContent = totalPoints;
  document.getElementById("max-points").textContent = maxPoints;
  document.getElementById("final-score").textContent = totalPoints;

  // Прогресс бар
  const progressPercent = (correctCount / test.length) * 100;
  document.getElementById("progress-bar").style.width = `${progressPercent}%`;

  // Текстовый результат
  const resultText = document.getElementById("result-text");
  if (correctCount === test.length) {
    resultText.textContent = "Отличный результат! Вы готовы к экзамену!";
    resultText.style.color = "#1abc9c";
  } else if (correctCount >= test.length * 0.7) {
    resultText.textContent = "Хороший результат! Продолжайте тренироваться!";
    resultText.style.color = "#3498db";
  } else {
    resultText.textContent = "Попробуйте еще раз! Обратите внимание на теорию.";
    resultText.style.color = "#e74c3c";
  }

  // Показываем детализацию ответов
  showAnswersDetails(test);

  // Показываем контейнер с результатами
  document.getElementById("test-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
}

// Показать детализацию ответов
function showAnswersDetails(test) {
  const answersList = document.getElementById("answers-list");
  answersList.innerHTML = ""; // Очищаем предыдущие результаты

  for (let i = 0; i < test.length; i++) {
    const task = test[i];
    const userAnswer = userAnswers[i] || "—";
    const isCorrect = userAnswer === task.correct;

    const answerElement = document.createElement("div");
    answerElement.className = `answer-detail ${
      isCorrect ? "correct" : "incorrect"
    }`;

    // Если есть изображение, показываем миниатюру
    let imageHtml = "";
    if (task.image) {
      imageHtml = `<div class="answer-image"><img src="${task.image}" alt="Задание ${task.number}"></div>`;
    }

    answerElement.innerHTML = `
      <div class="answer-header">
        <div class="answer-number">Задание ${task.number}</div>
        <div class="answer-status">${
          isCorrect ? "✓ Правильно" : "✗ Неправильно"
        }</div>
      </div>
      ${imageHtml}
      <div class="answer-comparison">
        <div class="answer-user">
          <span>Ваш ответ:</span>
          <span class="user-answer">${userAnswer}</span>
        </div>
        <div class="answer-correct">
          <span>Правильный ответ:</span>
          <span class="correct-answer">${task.correct}</span>
        </div>
      </div>
    `;

    answersList.appendChild(answerElement);
  }
}

// Начать заново
function restartTest() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("variants-container").style.display = "grid";
}

// Просмотреть ответы
function reviewAnswers() {
  document.getElementById("result-container").style.display = "none";

  const reviewContainer = document.createElement("div");
  reviewContainer.className = "review-container";
  reviewContainer.id = "review-container";

  reviewContainer.innerHTML = `
    <div class="review-header">
        <h2 class="review-title">Просмотр ваших ответов</h2>
        <button class="close-review" onclick="closeReview()">Закрыть</button>
    </div>
    <div id="review-tasks-container"></div>
  `;

  document.querySelector(".section").appendChild(reviewContainer);
  document.getElementById("review-container").style.display = "block";

  showReviewTasks();
}

// Показать задания для просмотра
function showReviewTasks() {
  const container = document.getElementById("review-tasks-container");
  container.innerHTML = "";

  const test = testsData[currentTest];

  for (let i = 0; i < test.length; i++) {
    const task = test[i];
    const userAnswer = userAnswers[i] || "—";
    const isCorrect = userAnswer === task.correct;

    const taskElement = document.createElement("div");
    taskElement.className = "task review-task";

    // Генерируем варианты ответов с выделением только выбора пользователя
    let optionsHtml = task.options
      .map((opt) => {
        let optionClass = "option";
        // Выделяем только ответ пользователя
        if (opt.id === userAnswer) {
          optionClass += isCorrect ? " correct" : " incorrect";
        }
        return `<div class="${optionClass}">${opt.id}) ${opt.text}</div>`;
      })
      .join("");

    taskElement.innerHTML = `
      <div class="task-header">
        <div class="task-number">${task.number}</div>
        <div class="task-points">${task.points} балл${
      task.points > 1 ? "а" : ""
    }</div>
      </div>
      <div class="task-question">
        ${
          task.image
            ? `<img src="${task.image}" alt="Задание ${task.number}" class="task-image">`
            : `<p>${task.question}</p>`
        }
      </div>
      <div class="options">
        ${optionsHtml}
      </div>
      <div class="review-answer-info">
        
        ${
          !isCorrect
            ? `
        <div class="correct-answer-review">
          <strong>Правильный ответ: ${task.correct} </strong>
        </div>
        `
            : ""
        }
      </div>
    `;

    container.appendChild(taskElement);
  }
}

// Закрыть просмотр ответов
function closeReview() {
  document.getElementById("review-container").remove();
  document.getElementById("result-container").style.display = "block";
}
