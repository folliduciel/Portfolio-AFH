// Fonction pour traiter la date saisie par l'utilisateur
function processDate() {
    const inputDate = document.getElementById("inputDate").value;
    
    // Vérifier si la date est au bon format JJ-MM-AAAA
    const dateParts = inputDate.split("-");
    if (dateParts.length !== 3 || dateParts[0].length !== 2 || dateParts[1].length !== 2 || dateParts[2].length !== 4) {
        alert("Veuillez entrer la date au format JJ-MM-AAAA.");
        return;
    }

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Les mois sont indexés à partir de 0 en JavaScript
    const year = parseInt(dateParts[2], 10);

    // Créer un objet Date à partir de la date saisie
    const date = new Date(year, month, day);

    // Afficher le jour, le mois et l'année
    document.getElementById("dayOutput").textContent = "Jour : " + date.getDate();
    document.getElementById("monthOutput").textContent = "Mois : " + (date.getMonth() + 1);
    document.getElementById("yearOutput").textContent = "Année : " + date.getFullYear();

    // Calculer la différence en jours avec la date actuelle
    calculateDateDifference(date);
}

// Fonction pour calculer la différence en jours entre la date actuelle et la date saisie
function calculateDateDifference(selectedDate) {
    const currentDate = new Date();

    // Calculer la différence en millisecondes
    const timeDifference = currentDate - selectedDate;

    // Convertir en jours (1000 ms/s * 60 s/min * 60 min/h * 24 h/jour)
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("differenceOutput").textContent = "La différence est de " + dayDifference + " jour(s).";
}
