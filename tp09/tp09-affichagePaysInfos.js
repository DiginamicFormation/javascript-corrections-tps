// ===== EXERCICE AffichagePaysInfos (TP9) =====
// Description : Récupérer les données des pays et afficher des informations sélectionnées
// Concepts : AJAX, JSON.parse(), manipulation d'objets JSON, sélection de données
// API utilisée : https://restcountries.com/v2/all

/**
 * Fonction principale appelée au chargement de la page
 * Elle récupère les données des pays et affiche les informations sélectionnées
 */
function chargerPaysInfos() {
    console.log("=== EXERCICE AffichagePaysInfos ===\n");
    console.log("Chargement des informations des pays...\n");

    // --- Créer et configurer la requête AJAX ---
    const xhr = new XMLHttpRequest();
    const url = "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital";
    xhr.open("GET", url, true);

    // --- Traitement de la réponse ---
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Données reçues avec succès !");

            // ⭐ IMPORTANT : Transformation du JSON
            // JSON.parse() convertit le texte JSON en objet JavaScript
            // Cela nous permet d'accéder aux propriétés de chaque pays
            const donneesJson = JSON.parse(xhr.responseText);

            console.log("Nombre de pays reçus :", donneesJson.length);
            console.log("Type de données après JSON.parse() :", typeof donneesJson);
            console.log("Est-ce un tableau ?", Array.isArray(donneesJson));

            // Afficher les informations sélectionnées
            afficherPaysInfos(donneesJson);
        } else if (xhr.readyState === 4) {
            afficherErreur("Erreur lors du chargement des données (code HTTP : " + xhr.status + ")");
            console.error("Erreur HTTP :", xhr.status);
        }
    };

    xhr.send();
}

/**
 * Fonction pour afficher les informations sélectionnées de chaque pays
 * @param {Array} donnees - Tableau d'objets représentant les pays
 */
function afficherPaysInfos(donnees) {
    console.log("\nConstruction de l'affichage...");

    // Récupérer l'élément HTML où afficher les informations
    const conteneur = document.getElementById("resultat");

    // Variable pour stocker le HTML à afficher
    let html = "";

    // --- Parcourir tous les pays ---
    // Chaque élément du tableau est un objet avec des propriétés
    for (let i = 0; i < donnees.length; i++) {
        // Récupérer le pays actuel
        const pays = donnees[i];

        // ⭐ EXTRACTION DES DONNÉES du JSON
        // On accède aux propriétés de l'objet avec la notation pointée
        const nomPays = pays.name;              // Nom du pays
        const capitale = pays.capital || "Non renseignée";  // Capitale (avec valeur par défaut)
        const population = pays.population;     // Population
        const region = pays.region;             // Région

        // Formatage de la population avec des espaces
        const populationFormatee = population.toLocaleString('fr-FR');

        // --- Construction du HTML pour ce pays ---
        html += '<div class="pays-card">';
        html += '<div class="pays-nom">' + nomPays + '</div>';
        html += '<div class="pays-info"><strong>Capitale :</strong> ' + capitale + '</div>';
        html += '<div class="pays-info"><strong>Population :</strong> ' + populationFormatee + ' habitants</div>';
        html += '<div class="pays-info"><strong>Région :</strong> ' + region + '</div>';
        html += '</div>';

        // Afficher les informations dans la console pour les 3 premiers pays
        if (i < 3) {
            console.log("\nPays", i + 1, ":");
            console.log("  - Nom :", nomPays);
            console.log("  - Capitale :", capitale);
            console.log("  - Population :", populationFormatee);
            console.log("  - Région :", region);
        }
    }

    // Injecter le HTML dans la page
    conteneur.innerHTML = html;

    console.log("\n" + donnees.length + " pays affichés avec succès !");
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

// ⚠️ NOTE PÉDAGOGIQUE : JSON.parse() et accès aux données
//
// 1. AVANT JSON.parse() :
//    xhr.responseText est une CHAÎNE DE CARACTÈRES
//    On ne peut pas accéder aux propriétés comme .name, .capital, etc.
//
// 2. APRÈS JSON.parse() :
//    On obtient un OBJET JavaScript (ici, un tableau d'objets)
//    On peut maintenant accéder aux propriétés de chaque pays
//
// Exemple :
//    const pays = donnees[0];
//    const nom = pays.name;           // Accès avec notation pointée
//    const capitale = pays['capital']; // Ou avec notation crochet
//
// 3. GESTION DES VALEURS MANQUANTES :
//    Certains pays n'ont pas de capitale renseignée
//    On utilise l'opérateur || pour fournir une valeur par défaut :
//    const capitale = pays.capital || "Non renseignée";
//    Si pays.capital est undefined ou null, on affiche "Non renseignée"
//
// 4. PARCOURS D'UN TABLEAU D'OBJETS :
//    for (let i = 0; i < donnees.length; i++) {
//        const pays = donnees[i];
//        // Utiliser les propriétés de pays
//    }
