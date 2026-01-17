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
document.getElementById("Podzem_yar").addEventListener("click", function() {
    openModal('podzem_yar_id');
});
document.getElementById("Podzemelie_5").addEventListener("click", function() {
    openModal('Podzemelie_5_id');
});
document.getElementById("Altushka").addEventListener("click", function() {
    openModal('Altushka_id');
});
document.getElementById("Cupi_cat").addEventListener("click", function() {
    openModal('Cupi_cat_id');
});
document.getElementById("Ne_budi_cat").addEventListener("click", function() {
    openModal('Ne_budi_cat_id');
});
document.getElementById("Kotem").addEventListener("click", function() {
    openModal('Kotem_id');
});
document.getElementById("Memenomika").addEventListener("click", function() {
    openModal('Memenomika_id');
});
document.getElementById("Oficce_cring").addEventListener("click", function() {
    openModal('Oficce_cring_id');
});
window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
}
