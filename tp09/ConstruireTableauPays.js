// ===== EXERCICE ConstruireTableauPays (TP9) =====
// Description : Récupérer des données de pollution via AJAX et les afficher dans un tableau HTML
// Concepts : AJAX, XMLHttpRequest, manipulation DOM, tableaux HTML dynamiques
// API utilisée : https://digicode.cleverapps.io/json/pays/pollution

/**
 * Fonction principale appelée au chargement de la page
 * Elle initie la requête AJAX pour récupérer les données de pollution
 */
function chargerDonneesPollution() {
    console.log("=== EXERCICE ConstruireTableauPays ===\n");
    console.log("Chargement des données de pollution...\n");

    // --- ETAPE 1 : Créer l'objet XMLHttpRequest ---
    // Cet objet permet de faire des requêtes HTTP asynchrones
    const xhr = new XMLHttpRequest();

    // --- ETAPE 2 : Configurer la requête ---
    // GET : méthode HTTP pour récupérer des données
    // L'URL pointe vers l'API qui contient les données de pollution
    const url = "https://digicode.cleverapps.io/json/pays/pollution";
    xhr.open("GET", url, true); // true = requête asynchrone

    // --- ETAPE 3 : Définir le traitement de la réponse ---
    // Cette fonction sera appelée à chaque changement d'état de la requête
    xhr.onreadystatechange = function() {
        // readyState 4 = requête terminée
        // status 200 = succès HTTP
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Données reçues avec succès !");

            // Transformer la réponse texte en objet JavaScript
            const donnees = JSON.parse(xhr.responseText);

            // ⭐ STRUCTURE DES DONNÉES
            // Les données ont cette structure :
            // {
            //   polluant: "CO2",
            //   unite: "milliards de tonnes",
            //   annee: 2023,
            //   pays: [ {nom: "Chine", valeur: 15.9, pourcentage: 30.1, code: "cn"}, ... ]
            // }

            console.log("Polluant :", donnees.polluant);
            console.log("Unité :", donnees.unite);
            console.log("Année :", donnees.annee);
            console.log("Nombre de pays :", donnees.pays.length);

            // Afficher les données dans la page HTML
            afficherTableau(donnees);
        } else if (xhr.readyState === 4) {
            // En cas d'erreur (autre status que 200)
            afficherErreur("Erreur lors du chargement des données");
            console.error("Erreur HTTP :", xhr.status);
        }
    };

    // --- ETAPE 4 : Envoyer la requête ---
    xhr.send();
}

/**
 * Fonction pour afficher les données sous forme de tableau HTML
 * @param {Object} donnees - Objet contenant polluant, unite, annee et le tableau pays
 */
function afficherTableau(donnees) {
    console.log("\nConstruction du tableau HTML...");

    // ⭐ EXTRACTION DES DONNÉES
    // Les données sont structurées avec un objet principal contenant :
    // - Les métadonnées (polluant, unite, annee)
    // - Un tableau "pays" avec les données de chaque pays
    const tableauPays = donnees.pays;

    // --- MODIFICATION DU TITRE (h1) ---
    // On utilise querySelector ou getElementById pour modifier le contenu
    const titre = document.getElementById("titre");
    titre.textContent = "Pays les plus polluants pour le " + donnees.polluant +
                        " (" + donnees.unite + ") en " + donnees.annee;

    // --- MODIFICATION DE L'ANNÉE (h2) ---
    const annee = document.getElementById("annee");
    annee.textContent = "Année : " + donnees.annee;

    // --- MODIFICATION DU TBODY ---
    // Récupérer le tbody avec l'id "corps"
    const tbody = document.getElementById("corps");

    // Variable pour construire le contenu du tbody
    let html = "";

    // Parcourir le tableau des pays pour générer les lignes
    for (let i = 0; i < tableauPays.length; i++) {
        // ⭐ Accéder aux propriétés de chaque pays
        const pays = tableauPays[i];

        // ⭐ CONSTRUCTION DE L'URL DU DRAPEAU
        // L'URL du drapeau utilise le code du pays
        // Format : https://flagcdn.com/24x18/CODE.png
        const urlDrapeau = "https://flagcdn.com/24x18/" + pays.code + ".png";

        // Construire la ligne du tableau
        html += '<tr>';
        html += '<td><img src="' + urlDrapeau + '" alt="' + pays.nom + '" class="drapeau"></td>';
        html += '<td>' + pays.nom + '</td>';
        html += '<td>' + pays.valeur + '</td>';
        html += '<td>' + pays.pourcentage + '</td>';
        html += '</tr>';

        // Afficher les 3 premiers pays dans la console pour vérification
        if (i < 3) {
            console.log("\nPays", i + 1, ":");
            console.log("  - Nom :", pays.nom);
            console.log("  - Valeur :", pays.valeur, donnees.unite);
            console.log("  - Pourcentage :", pays.pourcentage + "%");
            console.log("  - Code :", pays.code);
            console.log("  - Drapeau :", urlDrapeau);
        }
    }

    // Injecter les lignes dans le tbody
    tbody.innerHTML = html;

    console.log("\nTableau affiché avec succès !");
    console.log(tableauPays.length + " pays affichés");
    console.log("\n" + "=".repeat(40));
}

/**
 * Fonction pour afficher un message d'erreur
 * @param {string} message - Le message d'erreur à afficher
 */
function afficherErreur(message) {
    const tbody = document.getElementById("corps");
    tbody.innerHTML = '<tr><td colspan="4" class="error">' + message + '</td></tr>';
    console.error(message);
}

// ⚠️ NOTE PÉDAGOGIQUE : AJAX et Fetch API
//
// Dans cet exercice, nous utilisons XMLHttpRequest (XHR) qui est la méthode
// "classique" pour faire des requêtes AJAX. C'est important de la connaître
// car elle est encore très utilisée dans les projets existants.
//
// Cependant, dans les projets modernes, on préfère utiliser l'API Fetch qui est
// plus moderne et plus simple à utiliser :
//
// Version moderne avec Fetch API :
//
// async function chargerDonneesPollutionModerne() {
//     try {
//         const response = await fetch("https://digicode.cleverapps.io/json/pays/pollution");
//         const donnees = await response.json();
//         afficherTableau(donnees);
//     } catch (error) {
//         afficherErreur("Erreur lors du chargement des données");
//         console.error(error);
//     }
// }
//
// Les deux méthodes fonctionnent, mais Fetch est plus concise et utilise les Promises,
// ce qui rend le code plus lisible.
