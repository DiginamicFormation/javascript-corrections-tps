// ===== EXERCICE AffichageJson (TP8) =====
// Description : Afficher des données JSON de pollution dans une page HTML
// Concepts : JSON, manipulation DOM, boucles, onload

/**
 * Fonction appelée au chargement de la page (body onload)
 * Elle initialise les données JSON et les affiche dans le DOM
 */
function initialiserDonnees() {
    console.log("=== EXERCICE AffichageJson ===\n");

    // --- ETAPE 1 : Déclaration de la variable JSON ---
    // ⭐ IMPORTANT : En JavaScript, un objet JSON est simplement un objet JavaScript
    // Il n'a pas besoin d'être "parsé" s'il est déclaré directement dans le code
    let data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [
            {"nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn"},
            {"nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us"},
            {"nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in"},
            {"nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru"},
            {"nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp"},
            {"nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de"},
            {"nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr"},
            {"nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir"},
            {"nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca"}
        ]
    };

    console.log("Données JSON chargées :");
    console.log("- Polluant :", data.polluant);
    console.log("- Unité :", data.unite);
    console.log("- Année :", data.annee);
    console.log("- Nombre de pays :", data.pays.length);

    // --- ETAPE 2 : Modification du contenu de h1 ---
    // ⭐ SÉLECTEUR : getElementById récupère l'élément avec l'id "titre"
    const h1 = document.getElementById("titre");
    // ⭐ MODIFICATION : textContent change le texte de l'élément
    h1.textContent = data.polluant + " (" + data.unite + ")";

    console.log("\nContenu du h1 modifié :", h1.textContent);

    // --- ETAPE 3 : Modification du contenu de h2 ---
    const h2 = document.getElementById("annee");
    h2.textContent = "Année : " + data.annee;

    console.log("Contenu du h2 modifié :", h2.textContent);

    // --- ETAPE 4 : Affichage de la liste des pays ---
    const spanListePays = document.getElementById("listePays");

    // Variable pour construire le HTML
    let html = "";

    // ⭐ BOUCLE sur le tableau des pays
    for (let i = 0; i < data.pays.length; i++) {
        // Récupérer le pays actuel
        const pays = data.pays[i];

        console.log("\nPays", i + 1, ":");
        console.log("  - Nom :", pays.nom);
        console.log("  - Valeur :", pays.valeur, data.unite);
        console.log("  - Pourcentage :", pays.pourcentage + "%");
        console.log("  - Code :", pays.code);

        // Construire le HTML pour ce pays
        html += '<div class="pays-item">';
        html += '<div class="pays-nom">' + pays.nom + '</div>';
        html += '<div class="pays-info">Valeur : ' + pays.valeur + ' ' + data.unite + '</div>';
        html += '<div class="pays-info">Pourcentage : ' + pays.pourcentage + ' %</div>';
        html += '<div class="pays-info">Code : ' + pays.code + '</div>';
        html += '</div>';
    }

    // Injecter le HTML dans le span
    spanListePays.innerHTML = html;

    console.log("\n" + data.pays.length + " pays affichés dans le span");
    console.log("\n" + "=".repeat(40));
}

// ⚠️ NOTE PÉDAGOGIQUE : JSON vs Objet JavaScript
//
// 1. JSON (JavaScript Object Notation) :
//    - Format de données textuelles
//    - Utilisé pour échanger des données entre applications
//    - Exemple de chaîne JSON : '{"nom": "Paris", "population": 2000000}'
//
// 2. Objet JavaScript :
//    - Structure de données native en JavaScript
//    - Exemple : {nom: "Paris", population: 2000000}
//
// 3. Conversion :
//    - JSON.parse() : convertit une chaîne JSON en objet JavaScript
//      const obj = JSON.parse('{"nom": "Paris"}');
//
//    - JSON.stringify() : convertit un objet JavaScript en chaîne JSON
//      const json = JSON.stringify({nom: "Paris"});
//
// Dans cet exercice, on déclare directement un objet JavaScript (pas besoin de parse).
// Dans le TP9 avec AJAX, on recevra une chaîne JSON qu'il faudra parser.

// ⚠️ NOTE PÉDAGOGIQUE : Accès aux propriétés d'un objet JSON
//
// Pour accéder aux propriétés d'un objet :
//
// 1. Notation pointée (recommandée) :
//    data.polluant
//    data.unite
//    data.pays[0].nom
//
// 2. Notation crochet :
//    data["polluant"]
//    data["unite"]
//    data.pays[0]["nom"]
//
// La notation crochet est utile quand :
// - Le nom de la propriété contient des espaces ou caractères spéciaux
// - Le nom de la propriété est dans une variable
//
// Exemple :
//    const prop = "polluant";
//    console.log(data[prop]); // Affiche "CO2"

// ⚠️ NOTE PÉDAGOGIQUE : body onload
//
// L'attribut onload de la balise <body> permet d'exécuter du code JavaScript
// quand la page a fini de charger :
//
// <body onload="initialiserDonnees()">
//
// Alternatives modernes :
//
// 1. DOMContentLoaded (recommandé) :
//    document.addEventListener("DOMContentLoaded", function() {
//        initialiserDonnees();
//    });
//
// 2. window.onload :
//    window.onload = function() {
//        initialiserDonnees();
//    };
//
// Différence :
// - onload attend que TOUT soit chargé (images, styles, etc.)
// - DOMContentLoaded attend seulement que le HTML soit chargé (plus rapide)

// ⚠️ NOTE PÉDAGOGIQUE : Construire du HTML dynamiquement
//
// Pour construire du HTML dynamiquement, on utilise :
//
// 1. Concaténation de chaînes (utilisé dans cet exercice) :
//    let html = "";
//    html += '<div>';
//    html += '<p>' + texte + '</p>';
//    html += '</div>';
//
// 2. Template literals (ES6, plus moderne) :
//    let html = `
//        <div>
//            <p>${texte}</p>
//        </div>
//    `;
//
// 3. createElement (plus sécurisé mais plus verbeux) :
//    const div = document.createElement("div");
//    const p = document.createElement("p");
//    p.textContent = texte;
//    div.appendChild(p);
//
// Pour cet exercice, on utilise la méthode 1 car elle est simple et pédagogique.
