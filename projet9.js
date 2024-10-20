// Tableau initial
let tableau = [15, 3, 9, 7, 21, 5];

// Fonction pour afficher le tableau dans le paragraphe
function afficherTableau() {
    document.getElementById("tableauAffichage").textContent = "Tableau: " + tableau.join(", ");
}

// Fonction pour ajouter un élément à la fin du tableau
function ajouterElement() {
    const nouvelElement = parseInt(document.getElementById("nouveauElement").value);
    if (!isNaN(nouvelElement)) {
        tableau.push(nouvelElement);
        afficherTableau();
    } else {
        alert("Veuillez saisir un nombre valide.");
    }
    document.getElementById("nouveauElement").value = ""; // Effacer l'input
}

// Fonction pour supprimer un élément spécifique du tableau
function supprimerElement() {
    const elementSupprimer = parseInt(document.getElementById("elementSupprimer").value);
    const index = tableau.indexOf(elementSupprimer);

    if (index > -1) {
        tableau.splice(index, 1);  // Supprime l'élément à l'index donné
        afficherTableau();
    } else {
        alert("L'élément n'existe pas dans le tableau.");
    }
    document.getElementById("elementSupprimer").value = ""; // Effacer l'input
}

// Fonction pour trier le tableau dans l'ordre croissant
function trierTableau() {
    tableau.sort((a, b) => a - b);  // Trie le tableau de nombres
    afficherTableau();
}

// Afficher le tableau dès le chargement de la page
window.onload = afficherTableau;
