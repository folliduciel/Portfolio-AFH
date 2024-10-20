// Boucle "for" pour afficher les nombres de 1 à 10
function afficherNombres() {
    let resultat = "Les nombres de 1 à 10 sont les suivants:\n";
    for (let i = 1; i <= 10; i++) {
        resultat += i + " ";
    }
    alert(resultat);
}

// Boucle "while" pour calculer la somme des entiers de 1 à 100
function calculerSomme() {
    let somme = 0;
    let i = 1;
    while (i <= 100) {
        somme += i;
        i++;
    }
    alert("La somme S des entiers de 1 à 100 est S= : " + somme);
}

// Boucle do-while pour demander à l'utilisateur de deviner un nombre secret entre 1 et 100
function devinerNombre() {
    const nombreSecret = Math.floor(Math.random() * 100) + 1;
    let supposition;
    do {
        supposition = parseInt(prompt("Devinez le nombre secret (entre 1 et 100) :"));
        if (supposition < nombreSecret) {
            alert("Le nombre secret est plus grand!");
        } else if (supposition > nombreSecret) {
            alert("Le nombre secret est plus petit!");
        }
    } while (supposition !== nombreSecret);
    alert("Tadaaaaaa!!!! Bravooooo, vous avez trouvé le nombre secret! Vous êtes un génie!!!");
}

// Génère et affiche les premiers N termes de la séquence de Fibonacci
function afficherFibonacci() {
    let n = parseInt(prompt("Veuillez saisir le nombre de termes N de la séquence de Fibonacci à afficher :"));
    if (isNaN(n) || n <= 0) {
        alert("Veuillez saisir un nombre entier positif, SVP!");
        return;
    }

    let sequence = [];
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let suivant = a + b;
        a = b;
        b = suivant;
    }

    alert("Les premiers " + n + " termes de la séquence de Fibonacci sont les suivants:\n" + sequence.join(", "));
}
