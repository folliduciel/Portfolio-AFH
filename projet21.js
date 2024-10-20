// Fonction calculerPaiement pour le paiement mensuel du prêt hypothécaire
function calculerPaiement() {
    // Récupération des valeurs saisies par l'utilisateur
    const montant = parseFloat(document.getElementById("montant").value);
    const taux = parseFloat(document.getElementById("taux").value);
    const duree = parseInt(document.getElementById("duree").value);
    
    // Les entrées (validation)
    if (montant <= 0) {
        alert("Veuillez saisir un montant de prêt positif, SVP.");
        return;
    }
    if (taux <= 0) {
        alert("Veuillez saisir un taux d'intérêt valide, SVP.");
        return;
    }
    if (duree <= 0) {
        alert("Veuillez saisir une durée valide en années, SVP.");
        return;
    }

    // Paiement mensuel
    const r = (taux / 100) / 12; // Taux d'intérêt mensuel
    const n = duree * 12; // Total de paiements

    const M = montant * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1); // Formule de calcul du paiement

    // Résultat à afficher
    document.getElementById("resultat").textContent = "Le paiement mensuel est : " + M.toFixed(2) + " €";
}
