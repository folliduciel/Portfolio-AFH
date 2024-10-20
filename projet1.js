// Demander l'âge de l'utilisateur et affiche un message en fonction de l'âge
function demanderAge() {
    let age = prompt("Veuillez saisir l'âge de la personne :");
    if (age !== null) {
        age = parseInt(age);
        if (!isNaN(age)) {
            if (age < 18) {
                alert("La personne est mineure!");
            } else {
                alert("La personne est majeure!");
            }
        } else {
            alert("Veuillez entrer un nombre valide.");
        }
    }
}

// Vérifier si un nombre est pair ou impair
function verifierPairImpair() {
    let nombre = prompt("Veuillez saisir un nombre de votre choix:");
    if (nombre !== null) {
        nombre = parseInt(nombre);
        if (!isNaN(nombre)) {
            if (nombre % 2 === 0) {
                alert("Le nombre est pair.");
            } else {
                alert("Le nombre est impair.");
            }
        } else {
            alert("Veuillez saisir un nombre valide.");
        }
    }
}

// Demander un chiffre du mois et afficher le nom correspondant
function nomDuMois() {
    let mois = prompt("Veuillez saisir le chiffre du mois (compris entre 1 et 12) :");
    if (mois !== null) {
        mois = parseInt(mois);
        if (!isNaN(mois) && mois >= 1 && mois <= 12) {
            const nomsDesMois = [
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ];
            alert("Le mois correspondant est : " + nomsDesMois[mois - 1]);
        } else {
            alert("Veuillez saisir un chiffre compris entre 1 et 12, SVP!");
        }
    }
}
