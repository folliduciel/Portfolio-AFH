// Fonction pour obtenir et afficher l'heure actuelle au format "HH:MM:SS"
function afficherHeure() {
    const maintenant = new Date();
    
    // Récupérer les heures, minutes et secondes
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();
    
    // Ajouter un zéro devant les nombres inférieurs à 10
    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    // Créer la chaîne d'heure au format "HH:MM:SS"
    const heureActuelle = heures + ":" + minutes + ":" + secondes;
    
    // Afficher l'heure dans la zone de saisie
    document.getElementById("timeInput").value = heureActuelle;

    // Actualiser l'heure toutes les secondes
    setTimeout(afficherHeure, 1000);
}

// Appeler la fonction dès le chargement de la page
window.onload = afficherHeure;
