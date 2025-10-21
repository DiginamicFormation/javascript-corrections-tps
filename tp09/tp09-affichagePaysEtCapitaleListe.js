// ===== EXERCICE AffichagePaysEtCapitaleListe (TP9) =====
// Description : Afficher les pays dans un tableau HTML avec fonctionnalité de tri
// Concepts : AJAX, JSON, tableaux HTML, tri de données, événements
// API utilisée : https://restcountries.com/v2/all

// --- Variable globale pour stocker les données ---
// Cela permet de pouvoir trier les données sans refaire une requête AJAX
let donneesPays = [];

// --- Variable pour suivre l'état du tri ---
// 'none' = non trié, 'asc' = croissant, 'desc' = décroissant
let etatTri = 'none';

/**
 * Fonction principale appelée au chargement de la page
 */
function chargerPaysListe() {
    console.log("=== EXERCICE AffichagePaysEtCapitaleListe ===\n");
    console.log("Chargement des pays...\n");

    // --- Requête AJAX ---
    const xhr = new XMLHttpRequest();
    const url = "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital";
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Données reçues avec succès !");

            // Parser le JSON et stocker dans la variable globale
            donneesPays = JSON.parse(xhr.responseText);
            console.log("Nombre de pays :", donneesPays.length);

            // Afficher le tableau initial (sans tri)
            afficherTableau(donneesPays);
        } else if (xhr.readyState === 4) {
            afficherErreur("Erreur lors du chargement des données (code HTTP : " + xhr.status + ")");
            console.error("Erreur HTTP :", xhr.status);
        }
    };

    xhr.send();
}

/**
 * Fonction pour afficher les données sous forme de tableau HTML
 * @param {Array} donnees - Tableau des pays à afficher
 */
function afficherTableau(donnees) {
    console.log("\nConstruction du tableau HTML...");

    const conteneur = document.getElementById("resultat");

    // --- Construction du tableau ---
    let html = '<table>';

    // En-tête du tableau
    html += '<thead>';
    html += '<tr>';
    html += '<th>Pays</th>';
    html += '<th>Capitale</th>';
    html += '<th class="sortable" onclick="trierParPopulation()">Population ' + obtenirIconeTri() + '</th>';
    html += '<th>Région</th>';
    html += '</tr>';
    html += '</thead>';

    // Corps du tableau
    html += '<tbody>';

    for (let i = 0; i < donnees.length; i++) {
        const pays = donnees[i];

        // Extraire les informations
        const nom = pays.name;
        const capitale = pays.capital || "Non renseignée";
        const population = pays.population;
        const region = pays.region;

        // Formater la population
        const populationFormatee = population.toLocaleString('fr-FR');

        // Créer la ligne du tableau
        html += '<tr>';
        html += '<td>' + nom + '</td>';
        html += '<td>' + capitale + '</td>';
        html += '<td class="nombre">' + populationFormatee + '</td>';
        html += '<td>' + region + '</td>';
        html += '</tr>';
    }

    html += '</tbody>';
    html += '</table>';

    // Injecter le tableau dans la page
    conteneur.innerHTML = html;

    console.log("Tableau affiché avec", donnees.length, "pays");
}

/**
 * Fonction pour trier les pays par population
 * Gère les 3 états : non trié → croissant → décroissant → non trié
 */
function trierParPopulation() {
    console.log("\nClic sur l'en-tête Population");
    console.log("État actuel du tri :", etatTri);

    // --- Logique de changement d'état ---
    if (etatTri === 'none') {
        // Passer à tri croissant
        etatTri = 'asc';
        console.log("→ Tri croissant");
        trierCroissant();
    } else if (etatTri === 'asc') {
        // Passer à tri décroissant
        etatTri = 'desc';
        console.log("→ Tri décroissant");
        trierDecroissant();
    } else {
        // Revenir à l'état non trié (ordre original)
        etatTri = 'none';
        console.log("→ Retour à l'ordre initial");
        // Recharger les données sans tri
        const xhr = new XMLHttpRequest();
        const url = "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital";
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                donneesPays = JSON.parse(xhr.responseText);
                afficherTableau(donneesPays);
            }
        };
        xhr.send();
        return;
    }

    // Réafficher le tableau avec les nouvelles données triées
    afficherTableau(donneesPays);
}

/**
 * Fonction pour trier le tableau par population croissante
 */
function trierCroissant() {
    // ⭐ ALGORITHME DE TRI
    // La méthode sort() prend une fonction de comparaison
    // Si la fonction retourne un nombre négatif, a vient avant b
    // Si elle retourne un nombre positif, b vient avant a
    donneesPays.sort(function(a, b) {
        return a.population - b.population;
    });

    console.log("Premier pays (plus petite population) :", donneesPays[0].name, "-", donneesPays[0].population.toLocaleString('fr-FR'));
    console.log("Dernier pays (plus grande population) :", donneesPays[donneesPays.length - 1].name, "-", donneesPays[donneesPays.length - 1].population.toLocaleString('fr-FR'));
}

/**
 * Fonction pour trier le tableau par population décroissante
 */
function trierDecroissant() {
    donneesPays.sort(function(a, b) {
        return b.population - a.population;
    });

    console.log("Premier pays (plus grande population) :", donneesPays[0].name, "-", donneesPays[0].population.toLocaleString('fr-FR'));
    console.log("Dernier pays (plus petite population) :", donneesPays[donneesPays.length - 1].name, "-", donneesPays[donneesPays.length - 1].population.toLocaleString('fr-FR'));
}

/**
 * Fonction pour obtenir l'icône Font Awesome en fonction de l'état du tri
 * @returns {string} HTML de l'icône à afficher
 */
function obtenirIconeTri() {
    if (etatTri === 'none') {
        return '<i class="fa-solid fa-sort sort-icon"></i>';
    } else if (etatTri === 'asc') {
        return '<i class="fa-solid fa-sort-up sort-icon"></i>';
    } else {
        return '<i class="fa-solid fa-sort-down sort-icon"></i>';
    }
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

// ⚠️ NOTE PÉDAGOGIQUE : Tri de tableaux avec sort()
//
// 1. FONCTION DE COMPARAISON :
//    La méthode sort() modifie le tableau original
//    Elle prend une fonction qui compare deux éléments (a et b)
//
//    Tri croissant : return a.population - b.population
//    - Si a.population < b.population → résultat négatif → a avant b
//    - Si a.population > b.population → résultat positif → b avant a
//
//    Tri décroissant : return b.population - a.population
//    - On inverse simplement l'ordre de la soustraction
//
// 2. GESTION DE L'ÉTAT DU TRI :
//    On utilise une variable globale 'etatTri' pour suivre l'état
//    À chaque clic, on passe à l'état suivant : none → asc → desc → none
//
// 3. ICÔNES FONT AWESOME :
//    - fa-sort : icône de tri par défaut (↕)
//    - fa-sort-up : tri croissant (↑)
//    - fa-sort-down : tri décroissant (↓)
//
// 4. VARIABLES GLOBALES :
//    On stocke les données dans une variable globale pour éviter
//    de refaire une requête AJAX à chaque tri
//
// 5. ALTERNATIVE MODERNE :
//    On pourrait aussi utiliser des fonctions fléchées :
//    donneesPays.sort((a, b) => a.population - b.population);
