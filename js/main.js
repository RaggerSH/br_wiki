// Открытие модального окна
function openModal() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const logoImg = document.querySelector(".logo");
    modal.style.display = "block";
    modalImg.src = logoImg.src;
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Закрытие модального окна при клике на фон
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};