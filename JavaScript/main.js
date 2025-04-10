// Открытие модального окна
function openModal() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const roleImg = document.getElementById("role-img");
    if (modal && modalImg && roleImg) {
        modal.style.display = "block";
        modalImg.src = roleImg.src;
    } else {
        console.error("Modal elements not found");
    }
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error("Modal not found");
    }
}

// Закрытие модального окна при клике за пределы изображения
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Переключение изображений и характеристик/способностей
document.addEventListener("DOMContentLoaded", function() {
    // Переключение изображений
    const buttons = document.querySelectorAll(".image-btn");
    const roleImg = document.getElementById("role-img");

    console.log("Buttons found:", buttons.length); // Отладка: сколько кнопок найдено
    console.log("Role image:", roleImg); // Отладка: найдено ли изображение

    if (buttons.length > 0 && roleImg) {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                console.log("Button clicked:", button.getAttribute("data-img")); // Отладка: какой путь выбран
                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                roleImg.src = button.getAttribute("data-img");
            });
        });
    } else {
        console.error("Image buttons or role-img not found");
    }

    // Переключение характеристик и способностей (открыто по умолчанию)
    const toggleButtons = document.querySelectorAll(".toggle-button");

    console.log("Toggle buttons found:", toggleButtons.length); // Отладка: сколько кнопок найдено

    if (toggleButtons.length > 0) {
        toggleButtons.forEach(button => {
            const content = button.nextElementSibling; // Следующий элемент после кнопки (.char-list или .ability-content)
            if (content) {
                button.addEventListener("click", () => {
                    content.classList.toggle("hidden");
                    console.log(`${button.textContent} toggled, hidden:`, content.classList.contains("hidden"));
                });
            } else {
                console.error("Content not found for toggle button:", button);
            }
        });
    } else {
        console.error("Toggle buttons not found");
    }
});