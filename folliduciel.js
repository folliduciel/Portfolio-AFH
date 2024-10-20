document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    // Récupère les valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Affiche un message de succès (ici tu peux ajouter un appel à un serveur)
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = `Merci, ${name}! Votre message a été envoyé.`;
    
    // Réinitialise le formulaire
    document.getElementById('contact-form').reset();
});
