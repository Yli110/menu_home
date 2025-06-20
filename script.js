function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Обработчики кликов для кнопок
document.getElementById("Dalgone").addEventListener("click", function() {
    openModal('Dalgone_ID');
});

document.getElementById("Latte").addEventListener("click", function() {
    openModal('Latte_ID');
});

document.getElementById("Mokko").addEventListener("click", function() {
    openModal('Mokko_ID');
});

document.getElementById("Raf").addEventListener("click", function() {
    openModal('Raf_ID');
});

document.getElementById("Cap_cos").addEventListener("click", function() {
    openModal('Cap_cos_ID');
});

document.getElementById("Bambl").addEventListener("click", function() {
    openModal('Bambl_ID');
});

document.getElementById("Capuch").addEventListener("click", function() {
    openModal('Capuch_ID');
});

// Закрытие окна при клике вне его области
window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
}