function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
document.getElementById("Bashni").addEventListener("click", function() {
    openModal('bashni_id');
});
document.getElementById("Image").addEventListener("click", function() {
    openModal('image_id');
});
document.getElementById("Game_of_vlast").addEventListener("click", function() {
    openModal('game_id');
});
document.getElementById("Kubok_fakul").addEventListener("click", function() {
    openModal('kubok_fakul_id');
});
document.getElementById("Labirint_zerkal").addEventListener("click", function() {
    openModal('labirint_zerkal_id');
});
document.getElementById("Millioner").addEventListener("click", function() {
    openModal('millioner_id');
});
document.getElementById("Podzem_grob").addEventListener("click", function() {
    openModal('podzem_grob_id');
});
window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
}