function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
document.getElementById("Rik_and_Morty_1").addEventListener("click", function() {
    openModal('Rik_and_Morty_1_id');
});
document.getElementById("Stado").addEventListener("click", function() {
    openModal('Stado_id');
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