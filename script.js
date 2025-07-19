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

// База данных пользователей
const usersDatabase = {
  teacher: {
    login: "teacher",
    password: "teacher123",
    name: "Учитель",
    role: "teacher",
  },
  students: {
    nastya: {
      login: "nastya",
      password: "nastya2024",
      name: "Настя",
      role: "student",
      avatar: "nastya-avatar.jpg",
    },
    valya: {
      login: "valya",
      password: "valya2024",
      name: "Валя",
      role: "student",
      avatar: "valya-avatar.jpg",
    },
    artem: {
      login: "artem",
      password: "artem2024",
      name: "Артем",
      role: "student",
      avatar: "artem-avatar.jpg",
    },
  },
};

let currentUser = null;
let selectedStudent = null;

// Инициализация авторизации
function initAuthSystem() {
  // Получаем все элементы
  const authModal = document.getElementById("auth-modal");
  const authButton = document.getElementById("auth-button");
  const closeAuth = document.querySelector(".close-auth");
  const typeSelectors = document.querySelectorAll(".type-selector");

  // Обработчики для выбора типа пользователя
  typeSelectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      typeSelectors.forEach((s) => s.classList.remove("active"));
      this.classList.add("active");

      const type = this.dataset.type;
      document.getElementById("teacher-auth").style.display =
        type === "teacher" ? "block" : "none";
      document.getElementById("student-selection").style.display =
        type === "student" ? "block" : "none";
      document.getElementById("student-auth").style.display = "none";
    });
  });

  // Обработчик для выбора ученика
  document.querySelectorAll(".student-option").forEach((option) => {
    option.addEventListener("click", function () {
      selectedStudent = this.dataset.student;
      const student = usersDatabase.students[selectedStudent];

      document.getElementById("student-selection").style.display = "none";
      document.getElementById("student-auth").style.display = "block";
      document.getElementById("student-name").textContent = student.name;
      document.getElementById("student-avatar").src = student.avatar;
    });
  });

  // Обработчики кнопок "Назад"
  document.getElementById("back-to-types").addEventListener("click", () => {
    document.getElementById("student-selection").style.display = "none";
    document.getElementById("teacher-auth").style.display = "block";
  });

  document.getElementById("back-to-students").addEventListener("click", () => {
    document.getElementById("student-auth").style.display = "none";
    document.getElementById("student-selection").style.display = "block";
  });

  // Обработчик входа для учителя
  document.getElementById("teacher-submit").addEventListener("click", () => {
    const login = document.getElementById("teacher-login").value;
    const password = document.getElementById("teacher-password").value;

    if (
      login === usersDatabase.teacher.login &&
      password === usersDatabase.teacher.password
    ) {
      currentUser = usersDatabase.teacher;
      completeAuth();
    } else {
      alert("Неверный логин или пароль");
    }
  });

  // Обработчик входа для учеников
  document.getElementById("student-submit").addEventListener("click", () => {
    const password = document.getElementById("student-password").value;
    const student = usersDatabase.students[selectedStudent];

    if (password === student.password) {
      currentUser = student;
      completeAuth();
    } else {
      document.getElementById("student-error").textContent = "Неверный пароль";
    }
  });

  // Открытие модального окна
  authButton.addEventListener("click", () => {
    authModal.style.display = "block";
    document.body.style.overflow = "hidden";
    resetAuthForms();
  });

  // Закрытие модального окна
  closeAuth.addEventListener("click", closeAuthModal);
  window.addEventListener("click", (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  // Проверка авторизации при загрузке
  checkAuthStatus();
}

// Завершение авторизации
function completeAuth() {
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();

  // Можно добавить приветствие
}

// Обновление интерфейса после авторизации
function updateAuthUI() {
  const authButton = document.getElementById("auth-button");
  const userContainer = document.createElement("div");
  userContainer.className = "user-info";

  const userName = document.createElement("span");
  userName.className = "user-name";
  userName.textContent = currentUser.name;
  userContainer.appendChild(userName);

  const logoutButton = document.createElement("button");
  logoutButton.className = "logout-button";
  logoutButton.textContent = "Выйти";
  logoutButton.addEventListener("click", logoutUser);
  userContainer.appendChild(logoutButton);

  authButton.replaceWith(userContainer);
}

// Выход из системы
function logoutUser() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  location.reload();
}

// Проверка статуса авторизации
function checkAuthStatus() {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateAuthUI();
  }
}

// Закрытие модального окна
function closeAuthModal() {
  document.getElementById("auth-modal").style.display = "none";
  document.body.style.overflow = "auto";
  resetAuthForms();
}

// Сброс форм авторизации
function resetAuthForms() {
  document.getElementById("teacher-login").value = "";
  document.getElementById("teacher-password").value = "";
  document.getElementById("student-password").value = "";
  document.getElementById("student-error").textContent = "";
  document.getElementById("teacher-auth").style.display = "block";
  document.getElementById("student-selection").style.display = "none";
  document.getElementById("student-auth").style.display = "none";
  document
    .querySelector(".type-selector[data-type='teacher']")
    .classList.add("active");
  document
    .querySelector(".type-selector[data-type='student']")
    .classList.remove("active");
}

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", initAuthSystem);
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
