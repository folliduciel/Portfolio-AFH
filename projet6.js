// Fonction appelée à chaque fois que l'utilisateur saisit du texte
function saisiecar() {
    // Récupère la valeur saisie dans la zone de texte
    const input = document.getElementById("textesaisie").value;

    // Calcul de la longueur de la chaîne
    const length = input.length;
    
    // Extraction des trois premiers caractères (ou moins si la chaîne est plus courte)
    const substring = input.substring(0, 3);

    // Affichage des résultats
    document.getElementById("longueurtextsortie").textContent = "Longueur de la chaîne : " + length;
    document.getElementById("sortiestring").textContent = "Les trois premiers caractères : " + substring;
}
