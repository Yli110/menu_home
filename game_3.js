function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
document.getElementById("Podzem_dragon").addEventListener("click", function() {
    openModal('podzem_dragon_id');
});
document.getElementById("Podzem_car").addEventListener("click", function() {
    openModal('podzem_car_id');
});
document.getElementById("Mafia").addEventListener("click", function() {
    openModal('mafia_id');
});
document.getElementById("Poker").addEventListener("click", function() {
    openModal('poker_id');
});
document.getElementById("Carti").addEventListener("click", function() {
    openModal('carti_id');
});
window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
}
