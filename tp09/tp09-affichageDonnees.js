// ===== EXERCICE AffichageDonnees (TP9) =====
// Description : Récupérer les données des pays via AJAX et les afficher dans la page
// Concepts : AJAX, XMLHttpRequest, manipulation DOM, API REST
// API utilisée : https://restcountries.com/v2/all

/**
 * Fonction principale appelée au chargement de la page (via onload)
 * Elle initie la requête AJAX pour récupérer les données des pays
 */
function chargerDonneesPays() {
    console.log("=== EXERCICE AffichageDonnees ===\n");
    console.log("Chargement des données des pays du monde...\n");

    // --- ETAPE 1 : Créer l'objet XMLHttpRequest ---
    // XMLHttpRequest est l'objet JavaScript qui permet de faire des requêtes HTTP
    // sans recharger la page (c'est le principe d'AJAX)
    const xhr = new XMLHttpRequest();

    // --- ETAPE 2 : Configurer la requête ---
    // open(méthode, url, asynchrone)
    // - GET : méthode HTTP pour récupérer des données
    // - URL : adresse de l'API qui contient les données
    // - true : la requête est asynchrone (ne bloque pas le navigateur)
    const url = "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital";
    xhr.open("GET", url, true);

    // --- ETAPE 3 : Définir le traitement de la réponse ---
    // onreadystatechange est une fonction qui sera appelée à chaque changement d'état
    xhr.onreadystatechange = function() {
        // Vérifier l'état de la requête :
        // - readyState === 4 : la requête est terminée
        // - status === 200 : le serveur a répondu avec succès (code HTTP 200 = OK)
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Données reçues avec succès !");
            console.log("Taille de la réponse :", xhr.responseText.length, "caractères");

            // Suppression du message de chargement des données
            cacherMessageLoading();

            // Afficher les données brutes dans la page
            afficherDonneesJson(xhr.responseText);
        } else if (xhr.readyState === 4) {
            // Si readyState est 4 mais status n'est pas 200, il y a une erreur
            afficherErreur("Erreur lors du chargement des données (code HTTP : " + xhr.status + ")");
            console.error("Erreur HTTP :", xhr.status);
        }
    };

    // --- ETAPE 4 : Envoyer la requête ---
    // send() envoie la requête au serveur
    // Pour une requête GET, on ne passe pas de paramètres
    xhr.send();
}

/**
 * Fonction pour cacher le message de chargment
 */
function cacherMessageLoading() {
    console.log("\nSuppression du message de chargement des données...");

    // Récupérer l'élément HTML où afficher les données
    const conteneur = document.querySelectorAll(".loading")[0];

    // Afficher le JSON formaté dans la page
    conteneur.textContent = "";

    console.log("Données affichées avec succès !");
    console.log("\n" + "=".repeat(40));
}

/**
 * Fonction pour afficher les données JSON brutes dans la page
 * @param {string} jsonText - Le texte JSON reçu du serveur
 */
function afficherDonneesJson(jsonText) {
    console.log("\nAffichage des données dans la page...");

    // Récupérer l'élément HTML où afficher les données
    const conteneur = document.getElementById("resultat");

    // Formater le JSON pour qu'il soit lisible (indentation de 2 espaces)
    const jsonFormate = JSON.stringify(JSON.parse(jsonText), null, 2);

    // Afficher le JSON formaté dans la page
    conteneur.textContent = jsonFormate;

    console.log("Données affichées avec succès !");
    console.log("\n" + "=".repeat(40));
}

/**
 * Fonction pour afficher un message d'erreur
 * @param {string} message - Le message d'erreur à afficher
 */
function afficherErreur(message) {
    const conteneur = document.getElementById("resultat");
    conteneur.innerHTML = '<div class="error">' + message + '</div>';
    console.error(message);
}

// ⚠️ NOTE PÉDAGOGIQUE : Les états de XMLHttpRequest
//
// La propriété readyState peut avoir 5 valeurs :
// 0 : UNSENT - L'objet a été créé mais open() n'a pas encore été appelé
// 1 : OPENED - open() a été appelé
// 2 : HEADERS_RECEIVED - send() a été appelé et les en-têtes sont disponibles
// 3 : LOADING - La réponse est en cours de chargement
// 4 : DONE - L'opération est terminée
//
// La propriété status contient le code HTTP de la réponse :
// 200 : OK - Tout s'est bien passé
// 404 : Not Found - La ressource n'existe pas
// 500 : Internal Server Error - Erreur côté serveur
// etc.
//
// C'est pourquoi on vérifie toujours : readyState === 4 && status === 200
