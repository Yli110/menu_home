function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
document.getElementById("Apple_stir").addEventListener("click", function() {
    openModal('Apple_stir_ID');
});
document.getElementById("Armen_ezev").addEventListener("click", function() {
    openModal('Armen_ezev_ID');
});
document.getElementById("Barris_wild").addEventListener("click", function() {
    openModal('Barris_wild_ID');
});
document.getElementById("Coffe_liq").addEventListener("click", function() {
    openModal('Coffe_liq_ID');
});
document.getElementById("Nast_arch").addEventListener("click", function() {
    openModal('Nast_arch_ID');
});
window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
}