// Данные для заданий с фотографиями
const tasks = [
  {
    id: 1,
    title: "Найти значение выражения",
    category: "Na",
    difficulty: "easy",
    thumbnail: "dzNa.png",
    photo: "dzNa.png",
    solution: "Задание очень легкое, зачем подсказку смотреть 😂?",
  },
  {
    id: 2,
    title: "Задача на отрезок из первой части",
    category: "Va",
    difficulty: "easy",
    thumbnail: "dzVa.png",
    photo: "dzVa.png",
    solution: "Леготня",
  },
  {
    id: 3,
    title: "Задача на движение",
    category: "Ar",
    difficulty: "easy",
    thumbnail: "dzAr.png",
    photo: "dzAr.png",
    solution: "просто смотри по точкам и чилл",
  },
  {
    id: 4,
    title: "Задача по геометрии",
    category: "Na",
    difficulty: "easy",
    thumbnail: "dzNa2.png",
    photo: "dzNa2.png",
    solution:
      "1) Биссектриса делит угол пополам \n 2) Сумма углов в ЛЮБОМ треугольнике 180 градусов.",
  },
  {
    id: 5,
    title: "Задача на теорему Пифагора",
    category: "Va",
    difficulty: "easy",
    thumbnail: "dzVa2.png",
    photo: "dzVa2.png",
    solution: "easy",
  },
  {
    id: 6,
    title: "Задача на вероятность",
    category: "Ar",
    difficulty: "easy",
    thumbnail: "dzAr2.png",
    photo: "dzAr2.png",
    solution: "p = то что нужно/все что есть",
  },
];

// Элементы DOM
const startLearningBtn = document.getElementById("start-learning");
const tabButtons = document.querySelectorAll(".tab-button");
const taskList = document.getElementById("task-list");
const taskPage = document.getElementById("task-page");
const backButton = document.getElementById("back-button");
const solutionButton = document.getElementById("solution-button");
const solutionDiv = document.getElementById("solution");
const taskTitle = document.getElementById("task-title");
const taskContent = document.getElementById("task-content");
const taskDifficulty = document.getElementById("task-difficulty");

// Загрузка заданий
function loadTasks(category = "all") {
  taskList.innerHTML = "";

  const filteredTasks =
    category === "all"
      ? tasks
      : tasks.filter((task) => task.category === category);

  if (filteredTasks.length === 0) {
    taskList.innerHTML = "<p>Заданий в этой категории пока нет.</p>";
    return;
  }

  filteredTasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.innerHTML = `
      <h3>${task.title}</h3>
      <div class="task-difficulty ${task.difficulty}">
        ${
          task.difficulty === "easy"
            ? "Легкая"
            : task.difficulty === "medium"
            ? "Средняя"
            : "Сложная"
        }
      </div>
      <div class="task-image-container">
        <img src="${task.thumbnail}" alt="${task.title}" class="task-thumbnail">
      </div>
      <button class="view-task" data-id="${task.id}">Подробнее</button>
    `;
    taskList.appendChild(taskCard);
  });

  // Добавляем обработчики для кнопок "Подробнее"
  document.querySelectorAll(".view-task").forEach((button) => {
    button.addEventListener("click", function () {
      const taskId = parseInt(this.getAttribute("data-id"));
      showTask(taskId);
    });
  });
}

// Показать страницу задачи
function showTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  taskTitle.textContent = task.title;
  taskContent.innerHTML = `<img src="${task.photo}" alt="${task.title}" class="task-full-image">`;

  // Устанавливаем класс сложности
  taskDifficulty.className = "task-difficulty " + task.difficulty;
  taskDifficulty.textContent =
    task.difficulty === "easy"
      ? "Легкая"
      : task.difficulty === "medium"
      ? "Средняя"
      : "Сложная";

  // Очищаем решение
  solutionDiv.style.display = "none";
  solutionDiv.innerHTML =
    "<h3>Решение</h3><p>" + task.solution.replace(/\n/g, "<br>") + "</p>";

  // Показываем страницу задачи
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".features").style.display = "none";
  document.querySelector(".tasks").style.display = "none";
  document.querySelector("footer").style.display = "none";
  taskPage.style.display = "block";
}

// Вернуться к списку задач
function backToTasks() {
  document.querySelector(".hero").style.display = "block";
  document.querySelector(".features").style.display = "block";
  document.querySelector(".tasks").style.display = "block";
  document.querySelector("footer").style.display = "block";
  taskPage.style.display = "none";

  // Прокрутка к разделу "Домашка"
  setTimeout(() => {
    document.querySelector("#tasks").scrollIntoView({ behavior: "smooth" });
  }, 50);
}

// Показать/скрыть решение
function toggleSolution() {
  if (solutionDiv.style.display === "none" || !solutionDiv.style.display) {
    solutionDiv.style.display = "block";
    solutionButton.textContent = "Скрыть подсказку";
  } else {
    solutionDiv.style.display = "none";
    solutionButton.textContent = "Подсказка";
  }
}

// Обработчики событий для вкладок
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    const category = this.getAttribute("data-category");
    loadTasks(category);
  });
});

// Обработчики для страницы задачи
backButton.addEventListener("click", backToTasks);
solutionButton.addEventListener("click", toggleSolution);

// Кнопка "Начать обучение"
startLearningBtn.addEventListener("click", () => {
  alert("мяу");
});

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  // Активируем первую вкладку и загружаем ее задания
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add("active");
    const category = tabButtons[0].getAttribute("data-category");
    loadTasks(category);
  }
});
