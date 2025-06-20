function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
document.getElementById("Twister").addEventListener("click", function() {
    openModal('twister_id');
});
document.getElementById("Alias").addEventListener("click", function() {
    openModal('alias_id');
});
document.getElementById("Vzriv_1").addEventListener("click", function() {
    openModal('vzriv_1_id');
});
document.getElementById("Vzriv_2").addEventListener("click", function() {
    openModal('vzriv_2_id');
});
document.getElementById("Vzriv_3").addEventListener("click", function() {
    openModal('vzriv_3_id');
});
document.getElementById("Kto_tut_suetolog").addEventListener("click", function() {
    openModal('Kto_id');
});
document.getElementById("Strash_skazki").addEventListener("click", function() {
    openModal('strash_skazki_id');
});
window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
}