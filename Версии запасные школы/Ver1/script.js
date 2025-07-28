// Данные для заданий
const tasks = [
  {
    id: 1,
    title: "Задача на проценты",
    category: "algebra",
    difficulty: "easy",
    content:
      "В магазине проходит акция: при покупке двух товаров третий товар продается со скидкой 50%. Сколько рублей заплатит покупатель за три товара, если их цена без скидки составляет 1200 рублей каждый?",
    solution:
      "1. Стоимость двух товаров без скидки: 1200 * 2 = 2400 рублей\n2. Третий товар со скидкой 50%: 1200 * 0.5 = 600 рублей\n3. Общая стоимость: 2400 + 600 = 3000 рублей",
  },
  {
    id: 2,
    title: "Задача на площадь треугольника",
    category: "geometry",
    difficulty: "medium",
    content:
      "В треугольнике ABC сторона AB равна 5 см, сторона BC равна 6 см, а угол между ними равен 30 градусов. Найдите площадь треугольника ABC.",
    solution:
      "1. Формула площади треугольника через две стороны и угол между ними: S = (1/2)*a*b*sin(α)\n2. Подставляем значения: S = (1/2)*5*6*sin(30°)\n3. sin(30°) = 0.5\n4. S = (1/2)*5*6*0.5 = 7.5 см²",
  },
  {
    id: 3,
    title: "Задача на движение",
    category: "real-math",
    difficulty: "medium",
    content:
      "Из пункта A в пункт B одновременно выехали два велосипедиста. Скорость первого велосипедиста на 3 км/ч больше скорости второго. Первый велосипедист прибыл в пункт B на 1 час раньше второго. Найдите скорость первого велосипедиста, если расстояние между пунктами A и B равно 60 км.",
    solution:
      "1. Пусть скорость второго велосипедиста x км/ч, тогда первого - (x+3) км/ч\n2. Время первого: 60/(x+3), время второго: 60/x\n3. Разница во времени: 60/x - 60/(x+3) = 1\n4. Решаем уравнение: 60(x+3) - 60x = x(x+3) => 180 = x² + 3x\n5. x² + 3x - 180 = 0\n6. D = 9 + 720 = 729, x = (-3 ± 27)/2\n7. x = 12 км/ч (второй велосипедист)\n8. Скорость первого: 12 + 3 = 15 км/ч",
  },
  {
    id: 4,
    title: "Задача на уравнения",
    category: "algebra",
    difficulty: "easy",
    content: "Решите уравнение: 3x - 7 = 5x + 1",
    solution:
      "1. Переносим все члены с x в одну сторону, числа - в другую: 3x - 5x = 1 + 7\n2. -2x = 8\n3. x = 8 / (-2)\n4. x = -4",
  },
  {
    id: 5,
    title: "Задача на теорему Пифагора",
    category: "geometry",
    difficulty: "medium",
    content:
      "Гипотенуза прямоугольного треугольника равна 10 см, а один из катетов равен 6 см. Найдите второй катет.",
    solution:
      "1. По теореме Пифагора: c² = a² + b²\n2. Подставляем известные значения: 10² = 6² + b²\n3. 100 = 36 + b²\n4. b² = 100 - 36 = 64\n5. b = √64 = 8 см",
  },
  {
    id: 6,
    title: "Задача на вероятность",
    category: "real-math",
    difficulty: "hard",
    content:
      "В коробке лежат 10 красных, 7 синих и 3 зеленых шара. Какова вероятность того, что наугад вынутый шар окажется синим?",
    solution:
      "1. Общее количество шаров: 10 + 7 + 3 = 20\n2. Количество синих шаров: 7\n3. Вероятность = количество благоприятных исходов / общее количество исходов\n4. P = 7 / 20 = 0.35 или 35%",
  },
];

// Элементы DOM
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");
const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const startLearningBtn = document.getElementById("start-learning");
const categoryButtons = document.querySelectorAll(".category-button");
const taskList = document.getElementById("task-list");
const taskPage = document.getElementById("task-page");
const backButton = document.getElementById("back-button");
const solutionButton = document.getElementById("solution-button");
const solutionDiv = document.getElementById("solution");
const taskTitle = document.getElementById("task-title");
const taskContent = document.getElementById("task-content");
const taskDifficulty = document.getElementById("task-difficulty");
const homeLink = document.querySelector(".home-link");
const tasksLink = document.querySelector(".tasks-link");

// Текущий пользователь
let currentUser = null;

// Показать модальное окно
function showModal(modal) {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Скрыть модальное окно
function hideModal(modal) {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Обработчики событий для кнопок входа и регистрации
loginBtn.addEventListener("click", () => showModal(loginModal));
registerBtn.addEventListener("click", () => showModal(registerModal));

// Обработчики событий для закрытия модальных окон
closeModalButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const modal = this.closest(".modal");
    hideModal(modal);
  });
});

// Переключение между окнами входа и регистрации
showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal(loginModal);
  showModal(registerModal);
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  hideModal(registerModal);
  showModal(loginModal);
});

// Обработка формы входа
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Простая проверка (в реальном приложении нужно проверять с сервером)
  if (email && password) {
    currentUser = { email };
    updateAuthUI();
    hideModal(loginModal);
    alert("Вы успешно вошли в систему!");
  } else {
    alert("Пожалуйста, заполните все поля");
  }
});

// Обработка формы регистрации
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirm = document.getElementById("register-confirm").value;

  // Простая проверка
  if (!name || !email || !password || !confirm) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  if (password !== confirm) {
    alert("Пароли не совпадают");
    return;
  }

  currentUser = { name, email };
  updateAuthUI();
  hideModal(registerModal);
  alert("Регистрация прошла успешно! Теперь вы можете войти в систему.");
});

// Обновление UI в зависимости от авторизации
function updateAuthUI() {
  if (currentUser) {
    document.querySelector(".auth-buttons").innerHTML = `
                    <span style="color: white; margin-right: 10px;">${
                      currentUser.name || currentUser.email
                    }</span>
                    <button id="logout-btn">Выйти</button>
                `;
    document.getElementById("logout-btn").addEventListener("click", logout);
  } else {
    document.querySelector(".auth-buttons").innerHTML = `
                    <button id="login-btn">Войти</button>
                    <button id="register-btn">Регистрация</button>
                `;
    document
      .getElementById("login-btn")
      .addEventListener("click", () => showModal(loginModal));
    document
      .getElementById("register-btn")
      .addEventListener("click", () => showModal(registerModal));
  }
}

// Выход из системы
function logout() {
  currentUser = null;
  updateAuthUI();
  alert("Вы вышли из системы");
}

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
                    <p>${task.content.substring(0, 100)}...</p>
                    <button class="view-task" data-id="${
                      task.id
                    }">Подробнее</button>
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
  taskContent.innerHTML = `<p>${task.content}</p>`;

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
}

// Показать/скрыть решение
function toggleSolution() {
  if (solutionDiv.style.display === "none" || !solutionDiv.style.display) {
    solutionDiv.style.display = "block";
    solutionButton.textContent = "Скрыть решение";
  } else {
    solutionDiv.style.display = "none";
    solutionButton.textContent = "Показать решение";
  }
}

// Обработчики событий для кнопок категорий
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    const category = this.getAttribute("data-category");
    loadTasks(category);
  });
});

// Обработчики для кнопок навигации
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  backToTasks();
});

tasksLink.addEventListener("click", (e) => {
  e.preventDefault();
  backToTasks();
});

// Обработчики для страницы задачи
backButton.addEventListener("click", backToTasks);
solutionButton.addEventListener("click", toggleSolution);

// Кнопка "Начать обучение"
startLearningBtn.addEventListener("click", () => {
  if (!currentUser) {
    showModal(registerModal);
    alert("Для начала обучения необходимо зарегистрироваться");
  } else {
    // В реальном приложении здесь была бы переадресация на курс
    alert("Добро пожаловать в курс подготовки к ОГЭ!");
  }
});

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  updateAuthUI();
  loadTasks();
});
