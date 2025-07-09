function showSection(sectionId) {
  // Скрыть все разделы
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  // Показать выбранный раздел
  document.getElementById(sectionId).style.display = "block";

  // Обновить активные кнопки
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Установить активную кнопку
  event.target.classList.add("active");
}
