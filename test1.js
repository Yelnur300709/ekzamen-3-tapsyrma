var month = parseInt(prompt("Ай номерін енгізіңіз (1-ден 12-ге дейін):"));


if (month >= 1 && month <= 12) {
    let season;
    if (month >= 3 && month <= 5) {
        season = "Көктем";
    } else if (month >= 6 && month <= 8) {
        season = "Жаз";
    } else if (month >= 9 && month <= 11) {
        season = "Күз";
    } else { 
        season = "Қыс";
    }
    alert("Бұл ай маусымына жатады.")
} else {
    alert("1 жыл 12 айдан тұрады, 1 ден 12-ге дейін сан енгізіңіз.");
}