// Fonction appelée lorsque l'utilisateur saisit un nombre
function processNumber() {
    const number = parseFloat(document.getElementById("inputNumber").value);

    // Si le nombre est valide, calculer la racine carrée et arrondir le nombre
    if (!isNaN(number)) {
        const sqrt = Math.sqrt(number);
        const rounded = Math.round(number);

        // Afficher les résultats
        document.getElementById("sqrtOutput").textContent = "Racine carrée : " + sqrt;
        document.getElementById("roundedOutput").textContent = "Nombre arrondi : " + rounded;
    } else {
        // Si l'entrée n'est pas valide, effacer les résultats
        document.getElementById("sqrtOutput").textContent = "";
        document.getElementById("roundedOutput").textContent = "";
    }
}

// Fonction pour générer un nombre aléatoire entre 1 et 100
function Aleatoire() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomOutput").textContent = "Nombre aléatoire (1-100) : " + randomNumber;
}

// Fonction pour générer un nombre aléatoire entre deux valeurs (min et max)
function Aleatoire2() {
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);

    if (!isNaN(min) && !isNaN(max) && min < max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("randomRangeOutput").textContent = "Nombre aléatoire (" + min + "-" + max + ") : " + randomNumber;
    } else {
        document.getElementById("randomRangeOutput").textContent = "Veuillez saisir des valeurs min et max valides.";
    }
}
