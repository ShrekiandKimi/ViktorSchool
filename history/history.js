const historyTasks = [
  {
    id: 1,
    title: "Вычисления",
    category: "Na",
    dateAssigned: "2025-07-18",
    dateCompleted: "2025-07-18",
    status: "completed",
  },

  {
    id: 3,
    title: "Задача на движение",
    category: "Ar",
    dateAssigned: "2024-05-03",
    dateCompleted: null,
    status: "pending",
  },

  {
    id: 5,
    title: "Задача на теорему Пифагора",
    category: "Va",
    dateAssigned: "2024-05-15",
    dateCompleted: null,
    status: "pending",
  },
  {
    id: 6,
    title: "Задача на вероятность",
    category: "Ar",
    dateAssigned: "2024-05-20",
    dateCompleted: "2024-05-22",
    status: "completed",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || currentUser.role !== "student") {
    window.location.href = "../index.html";
    return;
  }

  document.querySelector(".user-name").textContent = currentUser.name;

  document
    .querySelector(".logout-button")
    .addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      window.location.href = "../index.html";
    });

  loadHistoryTasks(
    currentUser.name === "Настя"
      ? "Na"
      : currentUser.name === "Валя"
      ? "Va"
      : "Ar"
  );

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-button")
        .forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const category = this.getAttribute("data-category");
      loadHistoryTasks(category);
    });
  });
});

function loadHistoryTasks(category) {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  const filteredTasks = historyTasks.filter(
    (task) => task.category === category
  );

  if (filteredTasks.length === 0) {
    historyList.innerHTML = "<p>История заданий пуста.</p>";
    updateStats(0, 0);
    return;
  }

  filteredTasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.className = `history-card ${task.status}`;

    const statusText =
      task.status === "completed" ? "Выполнено" : "Не выполнено";
    const dateText = task.dateCompleted
      ? `Выполнено: ${formatDate(task.dateCompleted)}`
      : `Срок: до ${formatDate(getDueDate(task.dateAssigned))}`;

    taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <div class="task-meta">
                <span class="task-status ${task.status}">${statusText}</span>
                <span class="task-date">${dateText}</span>
            </div>
            <div class="task-dates">
                <span>Задано: ${formatDate(task.dateAssigned)}</span>
            </div>
        `;

    historyList.appendChild(taskCard);
  });

  const totalTasks = filteredTasks.length;
  const completedTasks = filteredTasks.filter(
    (task) => task.status === "completed"
  ).length;
  updateStats(totalTasks, completedTasks);

  updateCalendar(filteredTasks);
}

function updateStats(total, completed) {
  document.getElementById("total-tasks").textContent = total;
  document.getElementById("completed-tasks").textContent = completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  document.getElementById("completion-percent").textContent = `${percent}%`;
}

function formatDate(dateString) {
  if (!dateString) return "";
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("ru-RU", options);
}

function getDueDate(assignedDate) {
  const date = new Date(assignedDate);
  date.setDate(date.getDate() + 7);
  return date.toISOString().split("T")[0];
}

function updateCalendar(tasks) {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML =
    '<h1 class="uaua">Закрытый тгк: <a href="https://t.me/+nJasSY9k2l5mZDAy">TG</a></h1><h3>Ссылки на задания из прошлых домашних заданий:</h3><div class="calendar-grid"></div><h1 class="uaua"><a href="https://disk.yandex.ru/d/lRP_Os0lOfszIA">YandexCloud</a></h1>';
}
