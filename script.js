function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
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
document.getElementById("Twister").addEventListener("click", function() {
    openModal('twister_id');
});
document.getElementById("Alias").addEventListener("click", function() {
    openModal('alias_id');
});
document.getElementById("Vzriv_1").addEventListener("click", function() {
    openModal('vzriv_1_id');
});
document.getElementById("Raf").addEventListener("click", function() {
    openModal('Raf_ID');
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
document.getElementById("Podzem_dragon").addEventListener("click", function() {
    openModal('podzem_dragon_id');
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
