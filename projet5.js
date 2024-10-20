// Afficher tous les nombres premiers entre 1 et 100
function afficherNombresPremiers() {
    let resultat = "Tous les nombres premiers entre 1 et 100 sont les suivants:\n";
    for (let i = 2; i <= 100; i++) {
        let estPremier = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                estPremier = false;
                break;
            }
        }
        if (estPremier) {
            resultat += i + " ";
        }
    }
    alert(resultat);
}

// Trouver et afficher les facteurs d'un nombre 
function trouverFacteurs() {
    let nombre = parseInt(prompt("Veuillez saisir un nombre pour trouver ses facteurs :"));
    if (isNaN(nombre) || nombre <= 0) {
        alert("Veuillez entrer un nombre entier positif.");
        return;
    }

    let facteurs = "Les facteurs de " + nombre + " sont les suivants: ";
    for (let i = 1; i <= nombre; i++) {
        if (nombre % i === 0) {
            facteurs += i + " ";
        }
    }
    alert(facteurs);
}

// Calculer la moyenne des nombres positifs
function calculerMoyenne() {
    let somme = 0;
    let count = 0;
    let nombre;

    do {
        nombre = parseFloat(prompt("Veuillez saisir une série de nombres positifs et terminer par un nombre négatif pour arrêter la série de nombre positifs) :"));
        if (nombre >= 0) {
            somme += nombre;
            count++;
        }
    } while (nombre >= 0);

    if (count > 0) {
        let moyenne = somme / count;
        alert("La moyenne M des nombres positifs est M = " + moyenne.toFixed(2));
    } else {
        alert("Veuillez saisir au moins un nombre positif, SVP!");
    }
}

// Générer et afficher un motif triangulaire d'étoiles
function genererMotifCroissant() {
    let hauteur = parseInt(prompt("Entrez la hauteur du triangle (doit être un nombre entier positif) :"));
    if (isNaN(hauteur) || hauteur <= 0) {
        alert("Veuillez entrer un nombre entier positif.");
        return;
    }

    let motif = "";
    for (let i = 1; i <= hauteur; i += 2) {
        motif += "*".repeat(i) + "\n";
    }

    if (hauteur % 2 === 0) {
        motif += "*".repeat(hauteur) + "\n";
    }

    alert(motif);
}
