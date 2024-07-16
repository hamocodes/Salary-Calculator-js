function verifier() {
    var nom = document.getElementById("nom").value;
    var heures = document.getElementById("heures").value;
    var taux = document.getElementById("taux").value;

    if (nom === "" || heures === "" || taux === "") {
        alert("Tous les champs doivent être renseignés.");
        return false;
    }

    if (!Number.isInteger(parseInt(heures)) || !Number.isInteger(parseInt(taux))) {
        alert("Le Nombre d’heures enseignées et le Taux horaire doivent être des entiers.");
        return false;
    }

    return true;
}

function calculer() {
    if (!verifier()) {
        return;
    }

    var nom = document.getElementById("nom").value;
    var heures = parseInt(document.getElementById("heures").value);
    var taux = parseInt(document.getElementById("taux").value);

    var salaireBrut = heures * taux;
    var tauxIR = 0.30;
    var montantIR = salaireBrut * tauxIR;
    var salaireNet = salaireBrut - montantIR;

    var tableau = document.getElementById("tableauResultats");
    var ligne = tableau.insertRow(-1);

    ligne.insertCell(0).innerHTML = nom;
    ligne.insertCell(1).innerHTML = heures;
    ligne.insertCell(2).innerHTML = taux;
    ligne.insertCell(3).innerHTML = salaireBrut.toFixed(2);
    ligne.insertCell(4).innerHTML = (tauxIR * 100).toFixed(2) + "%";
    ligne.insertCell(5).innerHTML = montantIR.toFixed(2);
    ligne.insertCell(6).innerHTML = salaireNet.toFixed(2);
    ligne.insertCell(7).innerHTML = '<button onclick="supprimer(this)">Supprimer</button>';
}

function supprimer(btn) {
    var ligne = btn.parentNode.parentNode;
    ligne.parentNode.removeChild(ligne);
}
