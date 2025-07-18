const tasks = [
  {
    id: 1,
    title: "Без калькулятора пж! ",
    category: "Na",
    difficulty: "easy",
    thumbnail: "dzNa.png",
    photo: "dzNa.png",
    solution: "у тебя получиться давай ! ",
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
    title: "Без калькулятора пж!",
    category: "Na",
    difficulty: "easy",
    thumbnail: "dzNa2.png",
    photo: "dzNa2.png",
    solution: "",
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
  {
    id: 7,
    title: "Без калькулятора пж!",
    category: "Na",
    difficulty: "easy",
    thumbnail: "dzNa3.png",
    photo: "dzNa3.png",
    solution: "",
  },
  {
    id: 8,
    title: "Уравнение ",
    category: "Na",
    difficulty: "easy",
    thumbnail: "dzNa4.png",
    photo: "dzNa4.png",
    solution: "Иксы влево числа вправо",
  },
];
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

  document.querySelectorAll(".view-task").forEach((button) => {
    button.addEventListener("click", function () {
      const taskId = parseInt(this.getAttribute("data-id"));
      showTask(taskId);
    });
  });
}

function showTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  taskTitle.textContent = task.title;
  taskContent.innerHTML = `<img src="${task.photo}" alt="${task.title}" class="task-full-image">`;

  taskDifficulty.className = "task-difficulty " + task.difficulty;
  taskDifficulty.textContent =
    task.difficulty === "easy"
      ? "Легкая"
      : task.difficulty === "medium"
      ? "Средняя"
      : "Сложная";

  solutionDiv.style.display = "none";
  solutionDiv.innerHTML =
    "<h3>Решение</h3><p>" + task.solution.replace(/\n/g, "<br>") + "</p>";

  document.querySelector(".hero").style.display = "none";
  document.querySelector(".features").style.display = "none";
  document.querySelector(".tasks").style.display = "none";
  document.querySelector("footer").style.display = "none";
  taskPage.style.display = "block";
}

function backToTasks() {
  document.querySelector(".hero").style.display = "block";
  document.querySelector(".features").style.display = "block";
  document.querySelector(".tasks").style.display = "block";
  document.querySelector("footer").style.display = "block";
  taskPage.style.display = "none";

  setTimeout(() => {
    document.querySelector("#tasks").scrollIntoView({ behavior: "smooth" });
  }, 50);
}

function toggleSolution() {
  if (solutionDiv.style.display === "none" || !solutionDiv.style.display) {
    solutionDiv.style.display = "block";
    solutionButton.textContent = "Скрыть подсказку";
  } else {
    solutionDiv.style.display = "none";
    solutionButton.textContent = "Подсказка";
  }
}

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    const category = this.getAttribute("data-category");
    loadTasks(category);
  });
});

backButton.addEventListener("click", backToTasks);
solutionButton.addEventListener("click", toggleSolution);

startLearningBtn.addEventListener("click", () => {
  alert("мяу");
});

document.addEventListener("DOMContentLoaded", () => {
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add("active");
    const category = tabButtons[0].getAttribute("data-category");
    loadTasks(category);
  }
});

const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("task-thumbnail") ||
    e.target.classList.contains("task-full-image")
  ) {
    modalImage.src = e.target.src;
    imageModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
});

closeModal.addEventListener("click", function () {
  imageModal.style.display = "none";
  document.body.style.overflow = "auto";
});

imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) {
    imageModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
